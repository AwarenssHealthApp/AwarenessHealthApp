describe('router', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should have a url of "/"', () => {
    cy.location('pathname').should('eq', '/')
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

  it('should display the doctors page when the doctor button is pressed', () => {
    cy.get('#doctors-button').click()
      .location('pathname').should('eq', '/doctors')
      .get('h1').last().should('contain', 'Doctors here')
  })

  it('should return to the main page when the back button is clicked', () => {
    cy.get('#doctors-button').click()
      .location('pathname').should('eq', '/doctors')
      .go('back')
      .location('pathname').should('eq', '/')
  })
})
