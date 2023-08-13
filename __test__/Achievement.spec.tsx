import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Achievement from "../components/Achievement/index";

describe("Achievementコンポーネントのテスト", () => {
  it("Achievement画面のテキストを確認する", () => {
    render(<Achievement />);

    const titleText = screen.getByText("ACHIEVEMENT");
    expect(titleText).toBeInTheDocument();
    const techtrainText = screen.getByText("TechTrain");
    expect(techtrainText).toBeInTheDocument();
    const nishikaText = screen.getByText("Nishika");
    expect(nishikaText).toBeInTheDocument();
    const skillboostText = screen.getByText("GoogleCloud SkillBoost");
    expect(skillboostText).toBeInTheDocument();
    const signateText = screen.getByText("SIGNATE");
    expect(signateText).toBeInTheDocument();
  });
  it("Ahievement画面の画像を確認する", () => {
    render(<Achievement />);

    const techtrainImage = screen.getByAltText("TechTrain");
    const nishikaImage = screen.getByAltText("Nishika");
    const skillboostImage = screen.getByAltText("GoogleCloud SkillBoost");
    const signateImage = screen.getByAltText("SIGNATE");

    expect(techtrainImage).toBeInTheDocument();
    expect(techtrainImage).toHaveAttribute("src", "/images/website-icon.png");
    expect(nishikaImage).toBeInTheDocument();
    expect(nishikaImage).toHaveAttribute("src", "/images/bar-icon.png");
    expect(skillboostImage).toBeInTheDocument();
    expect(skillboostImage).toHaveAttribute("src", "/images/cloud-icon.png");
    expect(signateImage).toBeInTheDocument();
    expect(signateImage).toHaveAttribute("src", "/images/model-icon.png");
  });
});
