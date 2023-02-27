class AddBoard {
  get orgHomePage() {
    return cy.get("ul[class='vs-c-list']").find("li").eq(-2).find("a");
  }
  get modalBodyConfirmation() {
    return cy.get(".vs-c-modal--features-confirm-button");
  }
  get orgHomePageHeading() {
    return cy.get(".vs-l-project__nav");
  }
  get addNewBoard() {
    return cy.get(".vs-c-boards-item__header--add-new");
  }
  get boardName() {
    return cy.get("input").eq(1);
  }
  get nextBtn() {
    return cy.get("button[name = 'next_btn']");
  }
  get kanbanSelect() {
    return cy.get("span[name = 'type_kanban']");
  }
}

export const addBoard = new AddBoard();
