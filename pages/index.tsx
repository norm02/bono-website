import type { NextPage } from "next";
import About from "../components/layouts/About/index";
import Footer from "../components/layouts/Footer/index";
import Skills from "../components/layouts/Skills/index";
import Top from "../components/layouts/Top/index";
import Achievement from "../components/layouts/Achievement";
import Meta from "../components/layouts/_common/Meta";

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
