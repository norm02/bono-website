import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Article {
  title: string;
  day: string;
  source: string;
  href: string;
  image?: string;
}

interface ArticlesProps {
  articles: Article[];
}

const Articles: React.FC<ArticlesProps> = ({ articles }) => {
  return (
    <section className="bg-blue-50 py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {articles.slice(0, 8).map((article, index) => (
          <Link
            key={index}
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="h-full flex flex-col">
              {article.image && (
                <div className="h-48 relative">
                  <Image
                    src={article.image}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-4">{article.title}</h3>
                <div className="mt-auto flex justify-between text-sm text-gray-600">
                  <span className="font-medium">{article.source}</span>
                  <span>{article.day}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
        <Link
          href="/all-articles"
          className="bg-green-100 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
        >
          <div className="p-6 flex items-center justify-center h-full">
            <h3 className="bg-green-500 text-white text-xl font-semibold p-3 rounded text-center w-full">
              More Articles
            </h3>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Articles;
