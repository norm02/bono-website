import type { NextPage } from "next";
import Meta from "../components/_common/Meta";

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <Meta
        pageTitle="プライバシーポリシー"
        pageUrl="privacy-policy"
        pageOgImage=""
        noIndex={true}
      />
      <div className="px-6 min-h-screen">
        <div className=" flex flex-1 flex-col w-full justify-center items-center m-auto max-w-2xl">
          <div className="pt-40 pb-5 text-4xl">プライバシーポリシー</div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center md:space-x-4">
          <div className="w-full md:w-1/3 bg-gray-600 p-2 m-4 rounded-md mx-auto flex-grow">
            <h2 className="text-white text-lg mb-2" tabIndex={0}>
              プライバシーポリシー
            </h2>
            <ul className="">
              <li className="bg-white text-base rounded-md p-2 mb-2">
                ここにプライバシーポリシーの内容を記述します。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
