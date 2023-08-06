import type { NextPage } from "next";
import About from "../components/About/index";
import Footer from "../components/Footer/index";
import Skills from "../components/Skills/index";
import NavBar from "../components/NavBar/index";
import Top from "../components/Top/index";
import Meta from "../components/_common/Meta";

const Home: NextPage = () => {
  return (
    <div>
      <Meta pageTitle="" pageUrl="" pageOgImage="" />
      <div className="bg-gradient-to-br from-lime-600 via-teal-100 to-cyan-300">
        <NavBar />
        <Top />
        <About />
        <Skills />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
