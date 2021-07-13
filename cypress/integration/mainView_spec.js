describe('Show landing page of Head To Toe', () => {

  beforeEach(() => {
    cy.fixture('mockDr.json')
      .then(mockData => {
        cy.intercept('GET', 'https://ron-swanson-quotes.herokuapp.com/v2/quotes', {
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

  it('Should be show a background image covering the whole page', () => {
    cy.get('.App').should('have.css', 'background-image', 'url("http://localhost:3000/static/media/peacefulOceanImage.dfb3c4eb.png")')
  });

  it('should display the title on the main page', () => {
  cy.get('h1').should('contain', 'Head To Toe')
    .get('.App-title').should('have.css', 'font-family', 'opendyslexic')
  });



})
