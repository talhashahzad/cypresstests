/// <reference types="cypress" />
describe("login page test", () => {
  beforeEach(() => {
    cy.visit("./login");
  });
  it("login fail test", () => {
    cy.get(".font-weight-light").should("exist").contains("Log in");
    cy.get("#email").type("b@a.com");
    cy.get(":nth-child(3) > .form-control").type("abcd12334");
    cy.get("[id=loginButton]").click();
    cy.url().should("include", "login");
  });
  it("login successful test", () => {
    cy.get(".font-weight-light").should("exist");

    cy.get("#email").type("b@a.com");
    cy.get(":nth-child(3) > .form-control").type("abcd123");
    cy.get("[id=loginButton]").click();
    cy.url().should("include", "meetings");
    cy.get("[id=meetingPageHeader]").should("exist");
  });
});
