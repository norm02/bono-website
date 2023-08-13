import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Skills from "../components/Skills/index";

describe("Skillsコンポーネントのテスト", () => {
  it("２回以上出てくるテキストを確認する", () => {
    render(<Skills />);
    const frontendItems = screen.getAllByText("FrontEnd");
    const googlecloudItems = screen.getAllByText("GoogleCloud");

    expect(frontendItems.length).toBe(2);
    expect(googlecloudItems.length).toBe(2);
  });
  it("TODOのテキストを確認する", () => {
    render(<Skills />);

    const todoList = screen.getByText("TODO");
    const backendItem = screen.getByText("BackEnd");
    const osItem = screen.getByText("OS");
    const sqlItem = screen.getByText("SQL");
    const goItem = screen.getByText("Go");
    const cicdItem = screen.getByText("CI/CD");
    const githubActionsItem = screen.getByText("Github Actions");

    expect(todoList).toBeInTheDocument();
    expect(backendItem).toBeInTheDocument();
    expect(osItem).toBeInTheDocument();
    expect(sqlItem).toBeInTheDocument();
    expect(goItem).toBeInTheDocument();
    expect(cicdItem).toBeInTheDocument();
    expect(githubActionsItem).toBeInTheDocument();
  });

  it("IN PROGRESSのテキストを確認する", () => {
    render(<Skills />);

    const inProgressList = screen.getByText("IN PROGRESS");
    const nextjsItem = screen.getByText("Next.js");
    const typescriptItem = screen.getByText("TypeScript");
    const tailwindItem = screen.getByText("TailwindCSS");
    const testAutomationItem = screen.getByText("Test Automation");
    const jestItem = screen.getByText("Jest/Vitest");
    const testingLibraryItem = screen.getByText("Testing Library");
    const cypressItem = screen.getByText("Cypress");

    expect(inProgressList).toBeInTheDocument();
    expect(nextjsItem).toBeInTheDocument();
    expect(typescriptItem).toBeInTheDocument();
    expect(tailwindItem).toBeInTheDocument();
    expect(testAutomationItem).toBeInTheDocument();
    expect(jestItem).toBeInTheDocument();
    expect(testingLibraryItem).toBeInTheDocument();
    expect(cypressItem).toBeInTheDocument();
  });

  it("DONEのテキストを確認する", () => {
    render(<Skills />);

    const doneList = screen.getByText("DONE");
    const aiItem = screen.getByText("AI");
    const pythonItem = screen.getByText("Python");
    const reactItem = screen.getByText("React.js");
    const jsItem = screen.getByText("JavaScript");
    const htmlItem = screen.getByText("HTML");
    const cssItem = screen.getByText("CSS");
    const cloudArchitectItem = screen.getByText("Professional Cloud Architect");

    expect(doneList).toBeInTheDocument();
    expect(aiItem).toBeInTheDocument();
    expect(pythonItem).toBeInTheDocument();
    expect(reactItem).toBeInTheDocument();
    expect(jsItem).toBeInTheDocument();
    expect(htmlItem).toBeInTheDocument();
    expect(cssItem).toBeInTheDocument();
    expect(cloudArchitectItem).toBeInTheDocument();
  });
});
