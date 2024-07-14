import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <div id="about" className="bg-blue-100 px-6 py-20 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-blue-600 text-4xl text-center mb-12">ABOUT ME</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img
              alt="About Image"
              className="w-40 h-40 mx-auto rounded-full shadow-lg transform transition duration-300 hover:-translate-y-2"
              src="/images/miso-icon.png"
            />
            <div className="text-blue-600 text-center text-2xl mt-4 mb-6">
              bono
            </div>
            <div className="flex justify-center space-x-4">
              <SocialLink
                href="https://twitter.com/bonomodel"
                src="/images/logo/x-logo.png"
                alt="X Icon"
              />
              <SocialLink
                href="https://bonomodel.hatenablog.com/"
                src="/images/logo/hatenablog-logo.svg"
                alt="Hatena Icon"
                className="w-10 h-10"
              />
              <SocialLink
                href="https://github.com/norm02"
                src="/images/logo/github-mark.png"
                alt="GitHub Icon"
              />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <CharacteristicSection
                characteristics={[
                  "黙々と地道に手を動かすことが得意",
                  "実績のある新しい技術を活用し、既存のものに少し手を加えるのが得意",
                  "体系的な学習アプローチを好む",
                  "集中力を活かしたシングルタスクの遂行力",
                ]}
              />
              <SkillSection
                title="得意な言語・フレームワークなど"
                skills={[
                  "JavaScript",
                  "Playwright",
                  "Cypress",
                  "GitHub Actions",
                ]}
              />
              <SkillSection
                title="伸ばしたい言語・フレームワークなど"
                skills={["TypeScript", "React"]}
              />
              <SkillSection
                title="得意にしたいこと"
                skills={["フロントエンド", "自動テスト"]}
              />
              <SkillSection
                title="興味があること"
                skills={["セキュリティ", "Google Cloud"]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ href, src, alt, className = "w-8 h-8" }) => (
  <a href={href} rel="noopener noreferrer" target="_blank">
    <img
      alt={alt}
      className={`${className} transform transition duration-300 hover:-translate-y-2`}
      src={src}
    />
  </a>
);

const CharacteristicSection = ({ characteristics }) => (
  <div className="mb-6">
    <ul className="list-disc list-inside text-gray-700">
      {characteristics.map((characteristic, index) => (
        <li key={index} className="mb-2">
          {characteristic}
        </li>
      ))}
    </ul>
  </div>
);

const SkillSection = ({ title, skills }) => (
  <div className="mb-4">
    <h4 className="text-lg font-semibold text-blue-600 mb-2">{title}</h4>
    <p className="text-gray-700">{skills.join(" / ")}</p>
  </div>
);

export default About;
