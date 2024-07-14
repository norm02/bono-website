import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface Article {
  day: string;
  title: string;
  href: string;
  source: "Hatena" | "Zenn";
  emoji?: string;
}

export default function AllArticles() {
  const router = useRouter();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch("/api/articles");
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        setArticles(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load articles. Please try again later.");
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center">
        <p className="text-2xl font-semibold">Loading articles...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center">
        <p className="text-2xl font-semibold text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          All ARTICLES
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="article-card bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="p-6 flex flex-col flex-grow">
                {article.source === "Zenn" && article.emoji && (
                  <span className="text-5xl mb-4">{article.emoji}</span>
                )}
                <h3 className="text-xl font-semibold mb-4 flex-grow">
                  {article.title}
                </h3>
                <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
                  <span className="font-medium bg-gray-200 px-2 py-1 rounded">
                    {article.source}
                  </span>
                  <span>{article.day}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button
            onClick={() => router.back()}
            className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
