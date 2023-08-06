import type { NextPage } from "next";
import NavIcon from "./NavIcon";

const NavBar: NextPage = () => {
  return (
    <div
      id="NavBar"
      className="sticky top-0 z-30 bg-opacity-90 backdrop-blur navbar font-raleway font-semibold text-neutral-content"
    >
      <div className="flex-1 md:text-base text-xs">
        <ul className="hidden md:flex menu menu-horizontal p-0">
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
        </ul>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 bg-opacity-0">
          <li>
            <NavIcon
              link="https://twitter.com/bonomodel"
              imgPath="./images/logo/x-logo.png"
            />
          </li>
          <li>
            <NavIcon
              link="https://bonomodel.hatenablog.com/"
              imgPath="./images/logo/hatenablog-logo.svg"
            />
          </li>
          <li>
            <NavIcon
              link="https://github.com/norm02"
              imgPath="./images/logo/github-mark.png"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
