import { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <div id="Footer" className="bg-blue-300  py-8 px-6 flex justify-center">
      <div className="text-white font-raleway text-sm">
        <a className="link" href="" target="_blank" rel="noopener noreferrer">
          ©bono
        </a>
      </div>
    </div>
  );
};

export default Footer;
