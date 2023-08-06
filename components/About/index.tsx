import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <div
      id="About"
      className="text-white py-20 px-6 bg-slate-700/[.70] md:h-screen min-h-[800px] flex justify-center items-center"
    >
      <div className="flex flex-1 flex-col gap-8 w-11/12 justify-center items-center m-auto max-w-2xl">
        <div className="text-4xl font-raleway font-semibold">About</div>
        <div className="text-sm font-kosugimaru">
          このサイトは{" "}
          <a className="link" href="" target="_blank" rel="noopener noreferrer">
            bono
          </a>{" "}
          のポートフォリオサイトです。
        </div>
        <div className="font-kosugimaru card md:w-96 w-60 bg-base-100 text-gray-900 shadow-xl">
          <ul className="card-body flex flex-col gap-2 text-left font-raleway">
            <div className="card-title md:text-xl text-lg font-raleway font-semibold">
              Items used
            </div>
            <li className="flex gap-2 md:text-base text-sm">
              <img src="./images/check-icon.png" />
              Framework:{" "}
              <a
                className="link"
                href="https://nextjs.org/"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                Next.js
              </a>
            </li>
            <li className="flex gap-2 md:text-base text-sm">
              <img src="./images/check-icon.png" />
              CSS :{" "}
              <a
                className="link"
                href="https://tailwindcss.com/"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                Tailwind CSS
              </a>
            </li>
            <li className="flex gap-2 md:text-base text-sm">
              <img src="./images/check-icon.png" />
              Hosted by:{" "}
              <a
                className="link"
                href="https://vercel.com/"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                Vercel
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
