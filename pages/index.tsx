import type { NextPage } from "next";
import About from "../components/About/index";
import Footer from "../components/Footer/index";
import Articles from "../components/Article/index";
import Top from "../components/Top/index";
import Achievement from "../components/Achievement";
import Meta from "../components/_common/Meta";
import { useState, useEffect } from "react";

const Home: NextPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch("/api/articles");
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        console.error("Error fetching articles:", err);
      }
    }
    fetchArticles();
  }, []);

  return (
    <div>
      <Meta pageTitle="" pageUrl="" pageOgImage="" />
      <div className="bg-gradient-to-br">
        <Top />
        <About />
        <Articles articles={articles} />
        <Achievement />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
