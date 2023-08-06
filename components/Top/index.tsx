import type { NextPage } from "next";

const Top: NextPage = () => {
  return (
    <div
      id="Welcome"
      className="flex flex-col justify-center items-center py-20 md:py-30"
    >
      <div className="mockup-window bg-slate-400 md:w-9/12 w-10/12 shadow-2xl max-w-5xl">
        <div className="flex flex-col justify-center items-center gap-4 bg-slate-500 bg-opacity-90 py-10">
          <div className="relative md:w-60 md:h-60 w-40 h-40">
            <img className="mask mask-squircle" src="/images/toppage.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
