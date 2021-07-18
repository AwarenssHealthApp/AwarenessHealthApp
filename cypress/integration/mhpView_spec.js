describe('Mental Health Professionals Display', () => {

  beforeEach(() => {
    cy.fixture('mockMHP.json')
      .then(mockMHP => {
        cy.intercept('GET', 'https://head-to-toe-be.herokuapp.com/api/v1/medical_professionals?type=mhp&state=Colorado', {
          statusCode: 201,
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
      .get('.mhp-sub-title').should('contain', 'Mental')
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
      .get('.mhp-sub-title').should('contain', 'Mental')

      .get('.provider-card').should('be.visible')
      .get('.first-name').should('be.visible')
      .get('.first-name').should('contain', 'panda')
      .get('.last-name').should('contain', 'Dodrio')
      .get('.address').should('contain', 'Hamillside')
      .get('.specialties').should('contain', 'Celestial')
      .get('.insurances').should('contain', 'O\'Keefe-Price, Conn-Erdman')
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

  it('Should have a controlled input field for first name whose value reflects the data typed into the form', () => {
    cy.get('#mental-health-pros-button').click()
      .get('form input[name="search"]').type('Reichel')
      .get('form input[name="search"]').should('have.value', 'Reichel')
  });

  it('Should clear the inputs when the search button is clicked', () => {
    cy.get('#mental-health-pros-button').click()
      .get('form input[name="search"]').type('S')
      .get('#search-button').should('be.visible')
      .get('#search-button').should('contain', 'Search')
      .get('#search-button').click()
      .get('form input[name="search"]').should('have.value', '')
  })

  it('Should be able to filter the cards based on the search parameter', () => {
    cy.get('#mental-health-pros-button').click()
      .get('form input[name="search"]').type('S')
      .get('#search-button').click()
      .get('section').children('.provider-card-wrapper').should('have.length', 2)

      .get('form input[name="search"]').type('herman')
      .get('#search-button').click()
      .get('section').children('.provider-card-wrapper').should('have.length', 1)
  })

  it('Should be give an error message when there are no matching search results', () => {
    cy.get('#mental-health-pros-button').click()
      .get('form input[name="search"]').type('bogus insurance')
      .get('#search-button').click()
      .get('#search-error-message').should('contain', 'Sorry! We don\'t have any results for bogus insurance')
  })
});
