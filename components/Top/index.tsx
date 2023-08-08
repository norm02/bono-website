import type { NextPage } from "next";
import { Link } from "react-scroll";

const Top: NextPage = () => {
  return (
    <div
      id="top"
      className="bg-white h-screen flex flex-col justify-center items-center"
    >
      <div className="bg-gray-200 w-4/5 h-4/5 rounded-lg shadow-lg flex flex-col justify-center items-center">
        <div className="bg-blue-300 w-2/3 h-48 rounded-lg shadow-lg flex justify-center item-center">
          <p className="text-white text-6xl font-bold flex items-center justify-center">
            bono-website
          </p>
        </div>
        <br />
        <div className="flex justify-center gap-4">
          <div className="transition duration-300">
            <Link to={"about"} smooth>
              <div className="bg-orange-300 text-white text-2xl font-bold w-48 h-48 rounded-lg shadow-lg flex justify-center items-center hover:bg-orange-400">
                <p>ABOUT</p>
              </div>
            </Link>
          </div>
          <div className="transition duration-300">
            <Link to={"skills"} smooth>
              <div className="bg-green-300 text-white text-2xl font-bold w-48 h-48 rounded-lg shadow-lg flex justify-center items-center hover:bg-green-400">
                <p>SKILLS</p>
              </div>
            </Link>
          </div>
          <div className="transition duration-300">
            <Link to={"achievement"} smooth>
              <div className="bg-indigo-300 text-white text-2xl font-bold w-48 h-48 rounded-lg shadow-lg flex justify-center items-center hover:bg-indigo-400">
                ACHIEVEMENT
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
