describe('Social Media App', () => {
  beforeEach(() => {
    // Visit the landing page before each test
    cy.visit('/');
  });

  it('should navigate to the Users page', () => {
    cy.get('a').contains('Users').click(); // Click on the Users tab
    cy.url().should('include', '/users'); // Verify the URL includes '/users'
    cy.get('h2').should('contain', 'Users'); // Check if the heading is correct
  });

  it('should create a new post', () => {
    cy.get('a').contains('Create Post').click(); // Navigate to Create Post page
    cy.url().should('include', '/create-post'); // Verify the URL
    cy.get('#postAuthor').select('User1'); // Select an author
    cy.get('#postContent').type('This is a new post!'); // Enter post content
    cy.get('button[type="submit"]').click(); // Submit the post
    // You can add assertions here to verify the post was added successfully
    cy.contains('Post added by User1: This is a new post!').should('exist'); // Check if the post appears
  });

  it('should refresh notifications', () => {
    cy.get('a').contains('Notifications').click(); // Navigate to Notifications page
    cy.url().should('include', '/notifications'); // Verify the URL
    cy.get('button.button').click(); // Click the refresh notifications button
    // Add assertions here to verify the notifications are refreshed
    cy.contains('Notifications refreshed').should('exist'); // Example assertion
  });

  it('should edit a post', () => {
    // Assuming a post exists already, you would typically want to create a post first
    cy.get('a').contains('Create Post').click();
    cy.get('#postAuthor').select('User1');
    cy.get('#postContent').type('This is a post to edit!');
    cy.get('button[type="submit"]').click();

    cy.contains('This is a post to edit!').parent().find('.button').click(); // Click the edit button
    cy.get('#postContent').clear().type('This post has been edited!'); // Edit the post content
    cy.get('button[type="submit"]').click(); // Submit the edit
    cy.contains('This post has been edited!').should('exist'); // Verify the post was edited
  });
});
