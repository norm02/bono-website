describe("TopからFooterまでの一通りの動きをテストする", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.injectAxe();
  });
  it("Topのテキストやスクロールをテストする", () => {
    cy.get("#top").contains("bono-website");
    cy.get("#top").contains("ABOUT").click();
    cy.contains("ABOUT ME").should("be.visible");
    cy.get("#about").should("be.visible");
    cy.get("#top").contains("SKILLS").click();
    cy.contains("SKILLS").should("be.visible");
    cy.get("#top").contains("ACHIEVEMENT").click();
    cy.contains("ACHIEVEMENT").should("be.visible");
  });
  it("cy-axeでアクセシビリティをテストする", () => {
    cy.checkA11y();
  });
});
