/// <reference types="cypress" />
describe("register user page test", () => {
  beforeEach(() => {
    cy.visit("./register");
  });
  it("registeration failed test", () => {
    cy.get(".font-weight-light").should("exist").contains("Register");

    cy.get(".btn").click();
    cy.url().should("include", "register");
  });
  it("login successful test", () => {
    cy.get(".font-weight-light").should("exist").contains("Register");

    cy.get("#displayName").type("hamza");

    //you will have to add a unique email everytime you run this test for it to be successful
    cy.get("#email").type("hamza@abc.com");

    cy.get("[name=passOne]").type("abcd123");
    cy.get("[name=passTwo]").type("abcd123");

    cy.get(".btn").click();
    cy.url().should("include", "meetings");
    cy.get("[id=meetingPageHeader]").should("exist");
  });
});
