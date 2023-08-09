import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <div id="about" className="bg-blue-300 px-6 min-h-screen">
      <div className="flex flex-col items-center justify-center w-11/12 max-w-2xl m-auto">
        <div className="text-white text-4xl pt-40">ABOUT ME</div>
        <div className="flex items-center justify-center mt-8">
          <div className="flex flex-col items-center justify-center w-1/3">
            <img
              alt="About Image"
              className="w-1/2 transform transition duration-300 hover:-translate-y-2"
              src="/images/miso-icon.png"
            />
            <div className="text-white p-2 text-center w-44 rounded-md text-2xl mb-4">
              bono
            </div>
            <div className="flex items-center justify-center mt-4">
              <a
                href="https://twitter.com/bonomodel"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="X Icon"
                  className="w-8 h-8 mr-4 transform transition duration-300 hover:-translate-y-2"
                  src="/images/logo/x-logo.png"
                />
              </a>
              <a
                href="https://bonomodel.hatenablog.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="hatena Icon"
                  className="w-12 h-12 mr-4 transform transition duration-300 hover:-translate-y-2"
                  src="/images/logo/hatenablog-logo.svg"
                />
              </a>
              <a
                href="https://github.com/norm02"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="github Icon"
                  className="w-8 h-8 mr-4 transform transition duration-300 hover:-translate-y-2"
                  src="/images/logo/github-mark.png"
                />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center w-2/3">
            <div className="bg-gray-300 p-4 rounded-md shadow-md overflow-y-auto">
              <p className="text-white text-2xl">
                Web開発の、ジュニアエンジニアを目指しています。
              </p>
              <p className="text-white text-2xl">
                よしなに動く、ツールや言語が好きです。
              </p>
              <p className="text-white text-2xl">
                地道にぼちぼち進めることが、モットーです。
              </p>
              <p className="text-white text-2xl">
                アルバイトでテスターを経験し、テスト自動化に取り組んでいます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
