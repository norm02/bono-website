import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer/index";

describe("Footerコンポーネントのテスト", () => {
  it("Footer画面のテキストを確認する", () => {
    render(<Footer />);
    const copyright = screen.getByText("©bono");
    expect(copyright).toBeInTheDocument();
  });
});
