/// <reference types = "Cypress" />
import { addBoard } from "../page_object/addBoard";
import { loginPage } from "../page_object/login";
import { deleteBoard } from "../page_object/deleteBoard";

describe("delete board", () => {
  before("get to organization home page", () => {
    cy.visit("/login");
    loginPage.login(Cypress.env("loginEmail"), Cypress.env("loginPass"));
    // deleteBoard.toDoHeader.should("be.visible");
  });
  it("delete board", () => {
    addBoard.orgHomePage.click();
    deleteBoard.toDoHeader.should("be.visible");
    deleteBoard.setingsBtn.click();
    deleteBoard.deleteBtn.click();
  });
});
