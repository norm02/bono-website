import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Top from "../components/Top/index";

describe("Topコンポーネントの単体テスト", () => {
  it("Top画面の文字を確認する", () => {
    //bono-website
    render(<Top />);
    expect(screen.getByText("bono-website"));
  });
  it("Top画面の文字をクリックした時の挙動を確認する", () => {
    //bono-websiteをクリックしてもどこにも遷移しないことを確認する
    render(<Top />);
    expect(screen.getByText("bono-website"));
    const bonoWebsite = screen.getByText("bono-website");
    bonoWebsite.click();
    expect(screen.getByText("bono-website").getAttribute("href")).not.toBe("/");
  });
});
