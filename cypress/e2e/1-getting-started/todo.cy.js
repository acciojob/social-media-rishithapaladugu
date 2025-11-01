/// <reference types="cypress" />

describe('To-Do App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Change URL if necessary
  });

  it('displays the app title', () => {
    cy.get('h1').should('have.text', 'GenZ');
  });

  it('can add new todo items', () => {
    const newItem = 'Feed the cat';
    cy.get('#postTitle').type(newItem);
    cy.get('#postAuthor').type('Author Name');
    cy.get('#postContent').type('This is a new post content.');
    cy.get('button[type="submit"]').click();

    cy.get('.posts-list .post').should('have.length', 1);
    cy.get('.posts-list .post h2').should('have.text', newItem);
  });
});
