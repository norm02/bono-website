import type { NextPage } from "next";

const Achievement: NextPage = () => {
  return (
    <div id="achievement" className="bg-blue-100 px-6 min-h-screen">
      <div className="flex flex-col items-center justify-center w-11/12 max-w-2xl m-auto">
        <div className="text-blue-600 text-4xl pt-40">ACHIEVEMENT</div>
        <div className="flex items-center justify-center mt-8">
          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://bonomodel.hatenablog.com/entry/2023/07/11/183505"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-gray-100 p-4 rounded-md shadow-md flex flex-col items-center justify-center hover:shadow-lg hover:bg-gray-200 transition duration-300">
                <img
                  className="w-1/4 mb-4"
                  src="/images/website-icon.png"
                  alt="ブラウザアイコン"
                />
                <p className="text-gray-600 text-2xl">TechTrain</p>
              </div>
            </a>
            <a
              href="https://www.cloudskillsboost.google/public_profiles/0b6a07a7-e9fb-483a-8321-cc5827e6cb84"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-gray-100 p-4 rounded-md shadow-md flex flex-col items-center justify-center hover:shadow-lg hover:bg-gray-200 transition duration-300">
                <img
                  className="w-1/4 mb-4"
                  src="/images/cloud-icon.png"
                  alt="クラウドアイコン"
                />
                <p className="text-gray-600 text-xs text-center md:text-2xl">
                  GoogleCloud SkillBoost
                </p>
              </div>
            </a>
            <a
              href="https://competition.nishika.com/users/5owM3njENJObagpd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-gray-100 p-4 rounded-md shadow-md flex flex-col items-center justify-center hover:shadow-lg hover:bg-gray-200 transition duration-300">
                <img
                  className="w-1/4 mb-4"
                  src="/images/bar-icon.png"
                  alt="棒グラフアイコン"
                />
                <p className="text-gray-600 text-2xl">Nishika</p>
              </div>
            </a>
            <a
              href="https://signate.jp/users/43119"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-gray-100 p-4 rounded-md shadow-md flex flex-col items-center justify-center hover:shadow-lg hover:bg-gray-200 transition duration-300">
                <img
                  className="w-1/4 mb-4"
                  src="/images/model-icon.png"
                  alt="モデル開発アイコン"
                />
                <p className="text-gray-600 text-2xl">SIGNATE</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
