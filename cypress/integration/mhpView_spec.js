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
    cy.visit('http://localhost:3000/')
  });

  it('Should be able to open to the main page', () => {
  cy.url().should('eq', 'http://localhost:3000/')
  });

  it('Should acknowledge the presence of list of of mind pros with a subtitle', () => {
    cy.get('#mental-health-pros-button').should('be.visible')
      .get('#mental-health-pros-button').should('contain', 'Mental')
      .get('#mental-health-pros-button').click()

      .get('.mhp-sub-title').should('be.visible')
      .get('.mhp-sub-title').should('contain', 'Mental')
      .get('.mhp-sub-title').should('have.css', 'font-family', 'opendyslexic')
  });

  it('Should display the mental health pro page when the mental health pro button is pressed', () => {
    cy.get('#mental-health-pros-button').should('contain', 'Mental')
      .get('#mental-health-pros-button').click()

      .location('pathname').should('eq', '/mental_health_professionals')
      .get('h2').last().should('contain', 'Mental')
  });

  it('Should toggle between light and dark mode on click of dark mode button', () => {
    cy.get('#mental-health-pros-button').click()
      .location('pathname').should('eq', '/mental_health_professionals')

      .get('.dark-mode-button').should('be.visible')
      .get('.dark-mode-button').should('contain', 'Dark')
      .get('.dark-mode-button').click()

      .get('.dark-mode-button').invoke('val', 25).trigger('change')

  });

  it('Should display the list of mhp providers for our users to see', () => {
    cy.get('#mental-health-pros-button').click()
      .location('pathname').should('eq', '/mental_health_professionals')
      .get('h2').last().should('contain', 'Mental')

      .get('.provider-card').should('be.visible')
      .get('.first-name').should('be.visible')
      .get('.first-name').should('contain', 'beetle')
      .get('.last-name').should('contain', 'Machoke')
      .get('.address').should('contain', 'Schamberger')
      .get('.all-mhp').should('have.length', 1)
    });

  it('Should display rating buttons for our users to give their opinions about our listed providers', () => {
    cy.get('#mental-health-pros-button').should('contain', 'Mental')
      .get('#mental-health-pros-button').click()

      .get('.accept-button').should('be.visible')
      .get('.accept-button').should('contain', 'Love')

      .get('.deny-button').should('be.visible')
      .get('.deny-button').should('contain', 'Love')
    });

  it('Should return to the main page when the back button is clicked', () => {
    cy.get('#mental-health-pros-button').click()
      .location('pathname').should('eq', '/mental_health_professionals')

      .get('.home-button').should('be.visible')
      .get('.home-button').should('contain', 'Home')
      .get('.home-button').click()
      .location('pathname').should('eq', '/')
  });

});
