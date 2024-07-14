import type { NextPage } from "next";
import { Link } from "react-scroll";

const Top: NextPage = () => {
  return (
    <div
      id="top"
      className="bg-white h-screen flex flex-col justify-center items-center"
    >
      <div className="bg-gray-100 w-screen h-auto flex flex-col justify-center items-center">
        <div className="bg-blue-600 w-2/3 h-40 md:h-48 flex justify-center item-center">
          <p className="text-white text-3xl md:text-6xl font-bold flex items-center justify-center">
            bono-website
          </p>
        </div>
        <br />
        <div className="flex justify-center gap-4">
          <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-center md:gap-4">
            <Link to={"about"} smooth>
              <div className="flex flex-col items-center bg-blue-100 rounded-lg border-2 border-blue-500 hover:bg-blue-600">
                <div
                  className="text-blue-600 text-lg md:text-2xl font-bold w-24 md:w-48 h-16 md:h-24 rounded-lg shadow-lg flex justify-center items-center hover:text-blue-100"
                  role="button"
                  tabIndex={0}
                >
                  <p>ABOUT</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-center md:gap-4">
            <Link to={"articles"} smooth>
              <div className="flex flex-col items-center bg-blue-100 rounded-lg border-2 border-blue-500 hover:bg-blue-600">
                <div
                  className="text-blue-600 text-lg md:text-2xl font-bold w-24 md:w-48 h-16 md:h-24 rounded-lg shadow-lg flex justify-center items-center hover:text-blue-100"
                  role="button"
                  tabIndex={0}
                >
                  <p>ARTICLES</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-center md:gap-4">
            <Link to={"achievement"} smooth>
              <div className="flex flex-col items-center bg-blue-100 rounded-lg border-2 border-blue-500 hover:bg-blue-600">
                <div
                  className="text-blue-600 text-sm md:text-2xl font-bold w-24 md:w-48 h-16 md:h-24 rounded-lg shadow-lg flex justify-center items-center hover:text-blue-100"
                  role="button"
                  tabIndex={0}
                >
                  ACHIEVEMENT
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
