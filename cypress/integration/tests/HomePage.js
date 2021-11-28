/// <reference types="cypress" />
describe("homepage test", () => {
  let landingText = ".display-4";

  beforeEach(() => {
    cy.visit("./");
  });
  it("running login button test", () => {
    cy.get(landingText).should("exist");
    cy.get('span > [href="/login"]').click();
    cy.url().should("include", "login");
  });
  it("running register button test", () => {
    cy.get(landingText).should("exist");
    cy.get('span > [href="/register"]').click();
    cy.url().should("include", "register");
  });
  after(() => {
    cy.visit("./");
  });
});
