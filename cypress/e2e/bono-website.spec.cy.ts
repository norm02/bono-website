describe("TopからFooterまでの一通りの動きをテストする", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Topのテキストやスクロールをテストする", () => {
    cy.get("#top").contains("bono-website");
    cy.get("#top").contains("ABOUT");
    cy.get(".bg-orange-300").click();
    cy.contains("ABOUT ME").should("be.visible");
    cy.get("#about").should("be.visible");
    cy.get("#top").contains("SKILLS");
    cy.get(".bg-green-300").click();
    cy.contains("SKILLS").should("be.visible");
    cy.get("#top").contains("ACHIEVEMENT");
    cy.get(".bg-indigo-300").click();
    cy.contains("ACHIEVEMENT").should("be.visible");
  });
});
