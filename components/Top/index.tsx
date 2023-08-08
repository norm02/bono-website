import type { NextPage } from "next";

const Top: NextPage = () => {
  return (
    <div
      id="Welcome"
      className="bg-white h-screen flex flex-col justify-center items-center"
    >
      <div className="bg-gray-200 w-4/5 h-4/5 rounded-lg shadow-lg flex flex-col justify-center items-center">
        <div className="bg-orange-300 w-2/3 h-48 rounded-lg shadow-lg flex justify-center item-center">
          <p className="text-white text-2xl font-bold flex items-center justify-center">
            bono-website
          </p>
        </div>
        <br />
        <div className="flex justify-center gap-4">
          <div className="bg-yellow-300 w-48 h-48 rounded-lg shadow-lg flex justify-center items-center">
            <p className="text-white text-2xl font-bold">ABOUT</p>
          </div>
          <div className="bg-green-300 w-48 h-48 rounded-lg shadow-lg flex justify-center items-center">
            <p className="text-white text-2xl font-bold">SKILLS</p>
          </div>
          <div className="bg-blue-300 w-48 h-48 rounded-lg shadow-lg flex justify-center items-center">
            <p className="text-white text-2xl font-bold">BLOG</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
