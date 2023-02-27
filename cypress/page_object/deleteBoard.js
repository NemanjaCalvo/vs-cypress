class DeleteBoard {
  get setingsBtn() {
    return cy.get(".vs-c-site-logo").eq(10);
  }
  get toDoHeader() {
    return cy.get(".vs-c-col__head");
  }
  get deleteBtn() {
    return cy.get(".vs-c-btn").last();
  }
}

export const deleteBoard = new DeleteBoard();
