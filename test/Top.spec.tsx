import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Top from "../components/Top/index";

describe("Top", () => {
  it("should render correctly", () => {
    render(<Top />);
    expect(screen.getByText("bono-website"));
  });
});
