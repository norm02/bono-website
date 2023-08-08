import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <div id="About" className="bg-blue-300 px-6 min-h-screen">
      <div className=" flex flex-1 flex-col w-11/12 justify-center items-center m-auto max-w-2xl">
        <div className="text-white pt-40 pb-20 text-4xl">ABOUT</div>
        <div className="flex flex-row justify-center items-center">
          <div className="img-container w-1/2 relative">
            <img src="/images/miso-icon.png" alt="About Image" />
            <div className="bg-blue-100 mb-4 p-2 rounded-md shadow-md text-center w-full">
              <p className="">bono</p>
            </div>
          </div>
          <div className="text-white text-2xl w-1/2 px-6">
            <div className="sticky top-0">
              <div className="bg-gray-300 p-4 rounded-md shadow-md">
                <p>Web開発のソフトウェアエンジニアを目指しています。</p>
                <p>よしなに動く、ツールや言語が好きです。</p>
                <p>地道にぼちぼち進めることがモットーです。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
