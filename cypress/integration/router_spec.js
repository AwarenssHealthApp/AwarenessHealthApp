describe('router', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should display the title on the main page', () => {
    cy.get('h1').should('contain', 'Head to Toe')
  })

  it('should display the navigation buttons on the main page', () => {
    cy.get('#doctors-button').should('contain', 'Doctors')
      .get('#mental-health-pros-button').should('contain', 'Mental Health Professionals')
      .get('#submit-button').should('contain', 'Submit')
  })

  it('should display a mission statement on the main page', () => {
    cy.get('p').should('contain', 'A place to find queer affirming support')
  })

})
