import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import xml2js from "xml2js";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

// 初期化
dayjs.extend(utc);
dayjs.extend(timezone);

interface HatenaArticle {
  day: string;
  title: string;
  href: string;
  source: "Hatena";
}

interface ZennArticle {
  day: string;
  title: string;
  href: string;
  emoji: string;
  source: "Zenn";
}

type Article = HatenaArticle | ZennArticle;

// APIを叩いてはてなブログのXMLを取得する。
const getHatenaData = async (url: string): Promise<string> => {
  try {
    const res = await axios.get(url, {
      auth: {
        username: process.env.HATENA_NAME!,
        password: process.env.HATENA_PASS!,
      },
    });
    return res.data;
  } catch (err: any) {
    const { status, statusText } = err.response;
    console.log(`Error! HTTP Status: ${status} ${statusText}`);
    throw err;
  }
};

// XMLから記事一覧と次の記事一覧のURIを抽出する。
const extractItemsAndNextUri = async (
  data: string
): Promise<{ entry: any[]; next_url: string }> => {
  return new Promise((resolve, reject) => {
    xml2js.parseString(data, (err, result) => {
      if (err) {
        reject(err);
      } else {
        const entry = result.feed.entry;
        const next_url = result.feed.link[1].$.href;
        resolve({ entry, next_url });
      }
    });
  });
};

// 下書きを除く記事を配列に追加する。
const insertItems = (entry: any[], item_list: HatenaArticle[]): void => {
  for (let e of entry) {
    if (e["app:control"][0]["app:draft"][0] == "yes") {
      // 下書き記事をスキップする。
      continue;
    }

    // はてな記事のJSONを生成。
    const item: HatenaArticle = {
      day: dayjs
        .utc(e.published.toString())
        .tz("Asia/Tokyo")
        .format("YYYY-MM-DD"),
      title: e.title.toString(),
      href: e.link[1].$.href,
      source: "Hatena",
    };
    item_list.push(item);
  }
};

const getZennArticles = async (): Promise<ZennArticle[]> => {
  try {
    const response = await axios.get(
      `https://zenn.dev/api/articles?username=bono&order=latest`
    );
    return response.data.articles.map((article: any) => ({
      day: dayjs
        .utc(article.published_at)
        .tz("Asia/Tokyo")
        .format("YYYY-MM-DD"),
      title: article.title,
      href: `https://zenn.dev${article.path}`,
      emoji: article.emoji,
      source: "Zenn",
    }));
  } catch (error) {
    console.error("Error fetching Zenn articles:", error);
    return [];
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const hatenaUrl =
      "https://blog.hatena.ne.jp/bono02/bonomodel.hatenablog.com/atom/entry";

    let hatenaArticles: HatenaArticle[] = [];
    let url = hatenaUrl;

    while (hatenaArticles.length < 5) {
      const xml_data = await getHatenaData(url);
      const { entry, next_url } = await extractItemsAndNextUri(xml_data);
      insertItems(entry, hatenaArticles);
      url = next_url;
    }

    hatenaArticles = hatenaArticles.slice(0, 5);

    const zennArticles = await getZennArticles();

    const allArticles = [...hatenaArticles, ...zennArticles]
      .sort((a, b) => dayjs.utc(b.day).diff(dayjs.utc(a.day)))
      .slice(0, 5);

    res.status(200).json(allArticles);
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
