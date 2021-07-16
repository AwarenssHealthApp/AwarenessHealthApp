describe('Doctors Display', () => {

  beforeEach(() => {
    cy.fixture('mockDr.json')
      .then(mockDr => {
        cy.intercept('GET', 'https://head-to-toe-be.herokuapp.com/api/v1/medical_professionals?type=doctor&state=South Dakota', {
          statusCode: 201,
          delay: 100,
          body: mockDr
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
    });


  it('Should display rating buttons for our users to give their opinions about our listed providers', () => {
    cy.get('#doctors-button').should('be.visible')
      .get('#doctors-button').click()
      .location('pathname').should('eq', '/doctors')

      .get('.accept-button').should('be.visible')
      .get('.accept-button').should('contain', 'Love')

      .get('.deny-button').should('be.visible')
      .get('.deny-button').should('contain', 'D')
      });

  it('Should return to the main page when the home button is clicked', () => {
    cy.get('#doctors-button').click()
      .location('pathname').should('eq', '/doctors')

      .get('.home-button').should('be.visible')
      .get('.home-button').should('contain', 'Home')
      .get('.home-button').click()
      .location('pathname').should('eq', '/')
  });

  it('Should have a controlled input field for first name whose value reflects the data typed into the form', () => {
    cy.get('#doctors-button').click()
      .get('form input[name="search"]').type('Reichel')
      .get('form input[name="search"]').should('have.value', 'Reichel')
  });

  it('Should clear the inputs when the search button is clicked', () => {
    cy.get('#doctors-button').click()
      .get('form input[name="search"]').type('S')
      .get('#search-button').should('be.visible')
      .get('#search-button').should('contain', 'Search')
      .get('#search-button').click()
      .get('form input[name="search"]').should('have.value', '')
  })

  it('Should be able to filter the cards based on the search parameter', () => {
    cy.get('#doctors-button').click()
      .get('form input[name="search"]').type('S')
      .get('#search-button').click()
      .get('section').children('.provider-card-wrapper').should('have.length', 8)

      .get('form input[name="search"]').type('nobis')
      .get('#search-button').click()
      .get('section').children('.provider-card-wrapper').should('have.length', 1)
  })

  it('Should be give an error message when there are no matching search results', () => {
    cy.get('#doctors-button').click()
      .get('form input[name="search"]').type('bogus insurance')
      .get('#search-button').click()
      .get('#search-error-message').should('contain', 'Sorry! We don\'t have any results for bogus insurance')
  })
});
