import type { NextPage } from "next";
import Meta from "../components/_common/Meta";

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <Meta
        pageTitle="プライバシーポリシー"
        pageUrl="privacy-policy"
        pageOgImage=""
        noIndex={true}
      />
      <div className="px-6 min-h-screen">
        <div className=" flex flex-1 flex-col w-full justify-center items-center m-auto max-w-2xl">
          <div className="pt-40 pb-5 text-4xl">プライバシーポリシー</div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center md:space-x-4">
          <div className="w-full md:w-1/3 bg-gray-600 p-2 m-4 rounded-md mx-auto flex-grow">
            <ul className="">
              <li className="bg-white text-base rounded-md p-2 mb-2">
                <h2 className="text-lg font-bold mb-2">
                  アクセス解析ツールについて
                </h2>
                <ul>
                  <li>
                    当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」「Googleサーチコンソール」を利用しています。
                  </li>
                  <li>
                    このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
                  </li>
                  <li>
                    この機能はCookieを無効にすることで収集を拒否することができますので、お使いのブラウザの設定をご確認ください。
                  </li>
                </ul>
                <h2 className="text-lg font-bold mb-2">
                  プライバシーポリシーの適用範囲について
                </h2>
                <ul>
                  <li>
                    本プライバシーポリシーの適用範囲は、当サイト内のみに限定します。
                  </li>
                  <li>
                    当サイトには、外部サイトへのリンクが含まれております。外部サイトのプライバシーポリシーにつきましては、当該サイトでご確認ください。
                  </li>
                </ul>
                <h2 className="text-lg font-bold mb-2">
                  プライバシーポリシーの改訂について
                </h2>
                <ul>
                  <li>
                    当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。
                  </li>
                  <li>
                    修正された最新のプライバシーポリシーは常に本ページにて開示されます。
                  </li>
                </ul>
                <h2 className="text-lg font-bold mb-2">免責事項</h2>
                <ul>
                  <li>
                    また当ブログのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。
                  </li>
                  <li>
                    当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
