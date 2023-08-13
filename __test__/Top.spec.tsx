import { vi, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Top from "../components/Top/index";
import { Link } from "react-scroll";

//react-scrollのLinkコンポーネントをモック化する
//Linkを<a>タグに変換する
vi.mock("react-scroll", () => ({
  Link: vi
    .fn()
    .mockImplementation(({ children, ...rest }) => <a {...rest}>{children}</a>),
}));

describe("Topコンポーネントのテスト", () => {
  it("Top画面のテキストを確認する", () => {
    render(<Top />);

    const titleText = screen.getByText("bono-website");
    const aboutText = screen.getByText("ABOUT");
    const skillsText = screen.getByText("SKILLS");
    const achievementText = screen.getByText("ACHIEVEMENT");

    expect(titleText).toBeInTheDocument();
    expect(aboutText).toBeInTheDocument();
    expect(skillsText).toBeInTheDocument();
    expect(achievementText).toBeInTheDocument();
  });
  it("クリックするとスクロールする挙動をモックテストする", () => {
    render(<Top />);
    expect(Link).toHaveBeenCalledWith(
      expect.objectContaining({
        to: "about",
        smooth: true,
      }),
      {}
    );
    expect(Link).toHaveBeenCalledWith(
      expect.objectContaining({
        to: "skills",
        smooth: true,
      }),
      {}
    );
    expect(Link).toHaveBeenCalledWith(
      expect.objectContaining({
        to: "achievement",
        smooth: true,
      }),
      {}
    );
  });
});
