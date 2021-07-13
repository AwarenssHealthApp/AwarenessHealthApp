describe('Mental Health Professionals Display', () => {

  beforeEach(() => {
    cy.fixture('mockDr.json')
      .then(mockDr => {
        cy.intercept('GET', 'https://head-to-toe-be.herokuapp.com/api/v1/medical_professionals?type=doctor&state=South Dakota', {
          statusCode: 201,
          delay: 100,
          body: mockDr
        })
      })
    cy.visit('http://localhost:3000/doctors')
  });

  it('Should be able to open to the main page', () => {
  cy.url().should('eq', 'http://localhost:3000/doctors')
  });

  it('Should acknowledge the presence of list of of doctors with a sub title', () => {
    cy.get('.dr-sub-title').should('be.visible')
      .get('.dr-sub-title').should('contain', 'Doctor')
      .get('.dr-sub-title').should('have.css', 'font-family', 'opendyslexic')
  });

  it('Should display the doctors page when the doctor button is pressed', () => {
    cy.get('#doctors-button').should('be.visible')
      .get('#doctors-button').should('contain', 'Doctors')
    cy.get('#doctors-button').click()
      .location('pathname').should('eq', '/doctors')
      .get('h2').last().should('contain', 'Doctors here')
  });

  it('Should return to the main page when the back button is clicked', () => {
    cy.get('#doctors-button').click()
      .location('pathname').should('eq', '/doctors')

    cy.get('.home-button').should('be.visible')
      .get('.home-button').should('contain', 'Home')
      .get('.home-button').click()
      .location('pathname').should('eq', '/')
  });
});
