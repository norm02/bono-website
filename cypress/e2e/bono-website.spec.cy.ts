describe("bono-websiteのE2Eテスト", () => {
  it("Top画面のテキストが想定通りか確認する", () => {
    cy.visit("/");
    cy.get("#top").contains("bono-website");
    cy.get("#top").contains("ABOUT");
    cy.get("#top").contains("SKILLS");
    cy.get("#top").contains("ACHIEVEMENT");
  });
});
