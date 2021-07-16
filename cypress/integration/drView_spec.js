describe('Doctors Display', () => {

  beforeEach(() => {
    cy.fixture('mockDr.json')
      .then(mockData => {
        cy.intercept('GET', 'https://head-to-toe-be.herokuapp.com/api/v1/medical_professionals?type=doctors&state=South%Dakota', {
          statusCode: 201,
          delay: 100,
          body: mockData
        })
      })
    cy.visit('http://localhost:3000/')
  });


  it('Should be able to open to the main page', () => {
  cy.url().should('eq', 'http://localhost:3000/')
  });

  it('Should acknowledge the presence of list of of doctors with a sub title', () => {
    cy.get('#doctors-button').should('be.visible')
      .get('#doctors-button').click()
      .location('pathname').should('eq', '/doctors')

      .get('.dr-sub-title').should('be.visible')
      .get('.dr-sub-title').should('contain', 'Doctor')
      .get('.dr-sub-title').should('have.css', 'font-family', 'opendyslexic')
  });

  it('Should display the doctors page when the doctor button is pressed', () => {
    cy.get('#doctors-button').should('contain', 'Doctors')
      .get('#doctors-button').click()

      .location('pathname').should('eq', '/doctors')
      .get('h2').last().should('contain', 'Doctors here')
  });

  it('Should display the list of doctors for our users to see', () => {
    cy.get('#doctors-button').should('be.visible')
      .get('#doctors-button').click()
      .location('pathname').should('eq', '/doctors')

      .get('.provider-card').should('be.visible')
      .get('.first-name').should('be.visible')
      .get('.first-name').should('contain', 'sea lion')
      .get('.last-name').should('contain', 'Drowzee')
      .get('.address').should('contain', 'Raymon')
      .get('.all-drs').should('have.length', 1)
    });

  it('Should toggle between light and dark mode on click of dark mode button', () => {
    cy.get('#doctors-button').click()
      .location('pathname').should('eq', '/doctors')

    cy.get('.dark-mode-button').should('be.visible')
      .get('.dark-mode-button').should('contain', 'Dark')
      .get('.dark-mode-button').click()

      .get('.dark-mode-button').invoke('val', 25).trigger('change')

  });


  it('Should display rating buttons for our users to give their opinions about our listed providers', () => {
    cy.get('#doctors-button').should('be.visible')
      .get('#doctors-button').click()
      .location('pathname').should('eq', '/doctors')

      .get('.accept-button').should('be.visible')
      .get('.accept-button').should('contain', 'Love')

      .get('.deny-button').should('be.visible')
      .get('.deny-button').should('contain', 'Love')
      });

  it('Should return to the main page when the home button is clicked', () => {
    cy.get('#doctors-button').click()
      .location('pathname').should('eq', '/doctors')

      .get('.home-button').should('be.visible')
      .get('.home-button').should('contain', 'Home')
      .get('.home-button').click()
      .location('pathname').should('eq', '/')
  });
});
