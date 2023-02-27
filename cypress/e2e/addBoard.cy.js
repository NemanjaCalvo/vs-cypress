/// <reference types = "Cypress" />
import { addBoard } from "../page_object/addBoard";
import { loginPage } from "../page_object/login";
describe("add board", () => {
  before("get to organization home page", () => {
    cy.visit("/login");
    loginPage.login(Cypress.env("loginEmail"), Cypress.env("loginPass"));
  });
  it("add new board", () => {
    addBoard.orgHomePage.click();
    addBoard.modalBodyConfirmation.click();
    loginPage.searchBtn.should("be.visible").and("exist");
    addBoard.orgHomePageHeading
      .should("exist")
      .and("have.css", "color", "rgb(255, 255, 255)");
    addBoard.addNewBoard.click();
    addBoard.boardName.type("finalBoard");
    addBoard.nextBtn.click();
    addBoard.kanbanSelect.click();
    addBoard.nextBtn.click();
    addBoard.nextBtn.click();
    addBoard.nextBtn.click();
  });
});
