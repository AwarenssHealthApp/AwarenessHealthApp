describe('router', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should display the title, navigation buttons, and a statement on the main page', () => {
    cy.get('h1').should('contain', 'Head to Toe')
      .get('#doctors-button').should('contain', 'Doctors')
      .get('#mental-health-pros-button').should('contain', 'Mental Health Professionals')
      .get('#submit-button').should('contain', 'Submit')
      .get('p').should('contain', 'A place to find queer affirming support')
  })
})
