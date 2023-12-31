import type { NextPage } from "next";
import About from "../components/About/index";
import Footer from "../components/Footer/index";
import Skills from "../components/Skills/index";
import Top from "../components/Top/index";
import Achievement from "../components/Achievement";
import Meta from "../components/_common/Meta";

const Home: NextPage = () => {
  return (
    <div>
      <Meta pageTitle="" pageUrl="" pageOgImage="" />
      <div className="bg-gradient-to-br">
        <Top />
        <About />
        <Skills />
        <Achievement />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
