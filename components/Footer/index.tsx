import { NextPage } from "next";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <div id="Footer" className="py-8 px-6 flex justify-center">
      <Link href="/privacyPolicy">
        <div className="font-raleway text-xs mr-4">プライバシーポリシー</div>
      </Link>
      <div className="font-raleway text-sm">©2023 bono</div>
    </div>
  );
};

export default Footer;
