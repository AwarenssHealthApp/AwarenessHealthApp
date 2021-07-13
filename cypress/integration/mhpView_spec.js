describe('Mental Health Professionals Display', () => {

  beforeEach(() => {
    cy.fixture('mockMHP.json')
      .then(mockMHP => {
        cy.intercept('GET', 'https://head-to-toe-be.herokuapp.com/api/v1/medical_professionals?type=mhp&state=Massachusetts', {
          statusCode: 201,
          delay: 100,
          body: mockMHP
        })
      })
    cy.visit('http://localhost:3000/mental_health_professionals')
  });

  it('Should be able to open to the main page', () => {
  cy.url().should('eq', 'http://localhost:3000/mental_health_professionals')
  });

  it('Should acknowledge the presence of list of of mind pros with a subtitle', () => {
    cy.get('.mhp-sub-title').should('be.visible')
      .get('.mhp-sub-title').should('contain', 'Mental')
      .get('.mhp-sub-title').should('have.css', 'font-family', 'opendyslexic')
  });

  it('Should display the mental health pro page when the mental health pro button is pressed', () => {
    cy.get('#mental-health-pros-button').should('be.visible')
      .get('#mental-health-pros-button').should('contain', 'Mental')
      .get('#mental-health-pros-button').click()
      .location('pathname').should('eq', '/mental_health_professionals')
      .get('h2').last().should('contain', 'Mental health professionals here')
  });

  it('Should return to the main page when the back button is clicked', () => {
    cy.get('#mental-health-pros-button').click()
      .location('pathname').should('eq', '/mental_health_professionals')

    cy.get('.home-button').should('be.visible')
      .get('.home-button').should('contain', 'Home')
      .get('.home-button').click()
      .location('pathname').should('eq', '/')
  });

});
