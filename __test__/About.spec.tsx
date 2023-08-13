import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "../components/About/index";

describe("Aboutコンポーネントのテスト", () => {
  it("Aboout画面のテキストを確認する", () => {
    render(<About />);

    const titleText = screen.getByText("ABOUT ME");
    expect(titleText).toBeInTheDocument();
    const nameText = screen.getByText("bono");
    expect(nameText).toBeInTheDocument();
    const fieldTextLine1 = screen.getByText(
      "Web開発の、ジュニアエンジニアを目指しています。"
    );
    const fieldTextLine2 = screen.getByText(
      "よしなに動く、ツールや言語が好きです。"
    );
    const fieldTextLine3 = screen.getByText(
      "地道にぼちぼち進めることが、モットーです。"
    );
    const fieldTextLine4 = screen.getByText(
      "アルバイトでテスターを経験し、テスト自動化に取り組んでいます。"
    );
    expect(fieldTextLine1).toBeInTheDocument();
    expect(fieldTextLine2).toBeInTheDocument();
    expect(fieldTextLine3).toBeInTheDocument();
    expect(fieldTextLine4).toBeInTheDocument();
  });
  it("Aboout画面の画像を確認する", () => {
    render(<About />);

    const iconImage = screen.getByAltText("About Image");
    const xImage = screen.getByAltText("X Icon");
    const hatenaImage = screen.getByAltText("hatena Icon");
    const githubImage = screen.getByAltText("github Icon");

    expect(iconImage).toBeInTheDocument();
    expect(iconImage).toHaveAttribute("src", "/images/miso-icon.png");
    expect(xImage).toBeInTheDocument();
    expect(xImage).toHaveAttribute("src", "/images/logo/x-logo.png");
    expect(hatenaImage).toBeInTheDocument();
    expect(hatenaImage).toHaveAttribute(
      "src",
      "/images/logo/hatenablog-logo.svg"
    );
    expect(githubImage).toBeInTheDocument();
    expect(githubImage).toHaveAttribute("src", "/images/logo/github-mark.png");
  });
});
