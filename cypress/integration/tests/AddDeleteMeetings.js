/// <reference types="cypress" />
describe("add meetings test", () => {
  it("add meeting", () => {
    cy.visit("./login");
    cy.get("#email").type("b@a.com");
    cy.get(":nth-child(3) > .form-control").type("abcd123");
    cy.get("[id=loginButton]").click();
    cy.get("[type=text]").type("newmeeting");
    cy.get("#buttonAdd").click();
    cy.get("[id=meetingList]")
      .children()
      .children()
      .its("length")
      .should("be.gt", 0);
  });
  it("delete meeting", () => {
    cy.get("[id=meetingList]")
      .children()
      .children()
      .its("length")
      .then((length) => {
        cy.get(':nth-child(1) > .btn-group > [title="Delete Meeting"]').click();
        cy.log(length);
        cy.get("[id=meetingList]")
          .children()
          .children()
          .its("length")
          .should("be.lt", length);
      });
  });
});
