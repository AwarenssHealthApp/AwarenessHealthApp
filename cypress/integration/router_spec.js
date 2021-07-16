describe('Router Flow', () => {

    beforeEach(() => {
      cy.fixture('mockDr.json')
        .then(mockData => {
          cy.intercept('GET', 'https://head-to-toe-be.herokuapp.com/api/v1/medical_professionals?type=doctors&state=Colorado', {
            statusCode: 201,
            delay: 100,
            body: mockData
          })
        })
      cy.visit('http://localhost:3000/')
    });

  it('should have a url of "/"', () => {
    cy.location('pathname').should('eq', '/')
  });

  it('should display the title on the main page', () => {
    cy.get('h1').should('contain', 'Head To Toe')
  });

  it('should display the navigation buttons on the main page', () => {
    cy.get('#doctors-button').should('contain', 'Doctors')
      .get('#mental-health-pros-button').should('contain', 'Mental Health Professionals')
      .get('#submit-button').should('contain', 'Submit')
  });

  it('should display the doctors page when the doctor button is pressed', () => {
    cy.get('#doctors-button').click()
      .location('pathname').should('eq', '/doctors')
      .get('h2').last().should('contain', 'Doctors here')
  });

  it('Should return from the doctors list page to the main page when the back button is clicked', () => {
    cy.get('#doctors-button').click()
      .location('pathname').should('eq', '/doctors')

      .go('back')
      .location('pathname').should('eq', '/')
  });

  it('Should navigate to the mental health pro page when the mental health pro button is pressed', () => {
    cy.get('#mental-health-pros-button').click()
      .location('pathname').should('eq', '/mental_health_professionals')
  });

  it('Should return from the MHP page to the main page when the back button is clicked', () => {
    cy.get('#mental-health-pros-button').click()
      .location('pathname').should('eq', '/mental_health_professionals')

      .go('back')
      .location('pathname').should('eq', '/')
  });

  it('should display the sumbit page when the sumbit button is pressed', () => {
    cy.get('#submit-button').should('be.visible')
      .get('#submit-button').should('contain', 'Submit')
      .get('#submit-button').click()
      .location('pathname').should('eq', '/submit')
  });

  it('Should return to the main page from submit page when the back button is clicked', () => {
    cy.get('#submit-button').should('be.visible')
      .get('#submit-button').should('contain', 'Submit')
      .get('#submit-button').click()
      .location('pathname').should('eq', '/submit')

      .go('back')
      .location('pathname').should('eq', '/')
  })
});
