import React from "react";
import Link from "next/link";

interface Article {
  title: string;
  day: string;
  source: string;
  href: string;
  emoji?: string;
}

interface ArticlesProps {
  articles: Article[];
}

const Articles: React.FC<ArticlesProps> = ({ articles }) => {
  return (
    <section id="articles" className="bg-blue-50 py-16 px-4">
      <h2 className="text-blue-600 text-4xl text-center mb-12">ARTICLES</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {articles.slice(0, 8).map((article, index) => (
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
        <Link
          href="/all-articles"
          className="bg-green-100 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 flex items-center justify-center"
        >
          <div className="p-6 text-center">
            <h3 className="bg-green-500 text-white text-xl font-semibold p-4 rounded">
              More Articles
            </h3>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Articles;
