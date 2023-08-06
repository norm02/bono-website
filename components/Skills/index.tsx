import type { NextPage } from "next";

const Skills: NextPage = () => {
  return (
    <div
      id="Skills"
      className="bg-slate-200/[.7] py-20 px-6 md:min-h-screen min-h-[500px] flex justify-center"
    >
      <div className="flex justify-center items-center flex-col gap-6 max-w-2xl m-auto">
        <div className="font-raleway font-semibold text-4xl">Skills</div>
        <div className="font-kosugimaru text-sm">
          身につけたスキルをまとめています。
        </div>
        <div className="flex flex-row items-baseline m-auto py-3 gap-4">
          <div className="flex flex-col gap-2 font-kosugimaru">
            <div className="text-sm font-kosugimaru">
              現在身につけようとしているスキルです。
            </div>
            <div className="flex gap-3 md:flex-row flex-col">
              <div className="card w-40 bg-base-100 shadow-lg font-raleway">
                <div className="card-body">
                  <h2 className="card-title text-lg">FrontEnd</h2>
                  <ul className="list-disc text-sm">
                    <li>Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex gap-3 md:flex-row flex-col">
              <div className="card w-40 bg-base-100 shadow-lg font-raleway">
                <div className="card-body">
                  <h2 className="card-title text-lg">BackEnd</h2>
                  <ul className="list-disc text-sm">
                    <li>OS</li>
                    <li>SQL</li>
                    <li>Go</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-baseline m-auto py-3 gap-4">
          <div className="flex flex-col gap-2 font-kosugimaru">
            <div className="text-sm font-kosugimaru">
              TechTrainでの活動を中心に、フロントエンドの開発スキルを身につけています。
            </div>
            <div className="flex gap-3 md:flex-row flex-col">
              <div className="card w-40 bg-base-100 shadow-lg font-raleway">
                <div className="card-body">
                  <h2 className="card-title text-lg"></h2>
                  <ul className="list-disc text-sm">
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>JavaScript,TypeScript</li>
                    <li>HTML,CSS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-baseline m-auto py-3 gap-4">
          <div className="flex flex-col gap-2 font-kosugimaru">
            <div className="text-sm font-kosugimaru">
              アルバイトで、主にテスターとしての業務に従事し、今はテスト自動化に取り組んでいます。
            </div>
            <div className="flex gap-3 md:flex-row flex-col">
              <div className="card w-40 bg-base-100 shadow-lg font-raleway">
                <div className="card-body">
                  <h2 className="card-title text-lg">テスト自動化</h2>
                  <ul className="list-disc text-sm">
                    <li>Cypress</li>
                    <li>Javascript</li>
                    <li>Github Actions（予定）</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-baseline m-auto py-3 gap-4">
          <div className="flex flex-col gap-2 font-kosugimaru">
            <div className="text-sm font-kosugimaru">
              Pythonを中心に、プログラミングの基礎を学びました。
            </div>
            <div className="flex gap-3 md:flex-row flex-col">
              <div className="card w-40 bg-base-100 shadow-lg font-raleway">
                <div className="card-body">
                  <h2 className="card-title text-lg">AI</h2>
                  <ul className="list-disc text-sm">
                    <li>SIGNATE</li>
                    <li>NISHIKA</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex gap-3 md:flex-row flex-col">
              <div className="card w-40 bg-base-100 shadow-lg font-raleway">
                <div className="card-body">
                  <h2 className="card-title text-lg">GoogleCloud</h2>
                  <ul className="list-disc text-sm">
                    <li>Professional Cloud Architect</li>
                    <li>Skill Boost</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
