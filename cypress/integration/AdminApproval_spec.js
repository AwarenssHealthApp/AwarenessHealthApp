describe('AdminApproval', () => {
  beforeEach(() => {
    cy.fixture('mockUnvetted.json')
      .then(mockData => {
        cy.intercept('GET', 'https://head-to-toe-be.herokuapp.com/api/v1/medical_professionals?vetted=false', {
          statusCode: 201,
          delay: 100,
          body: mockData
        })
      })
    cy.visit('http://localhost:3000/admin_approval_who_dis')
  })
  it('Should display the page title', () => {
    cy.get('.admin-sub-title').should('be.visible')
      .get('.admin-sub-title').should('contain', 'Admin Approval')
      .get('.admin-sub-title').should('have.css', 'font-family', 'opendyslexic')
  })
  it('Should display unvetted healthcare providers', () => {
    cy.get('.provider-card').should('be.visible')
      .get('.first-name').should('be.visible')
      .get('.first-name').should('contain', 'gnat')
      .get('.last-name').should('contain', 'Slowpoke')
      .get('.address').should('contain', 'Daphnechester')
      .get('.specialties').should('contain', 'Orc, Sylvan, Undercommon')
      .get('.insurances').should('contain', 'Schinner, Kreiger and Stokes, Yundt-Cronin, Herman-Bogan')
      .get('.all-unvetted').should('have.length', 1)
  })
  it('Should display an approve and deny button for each card', () => {
    cy.get('.approve-button').should('be.visible')
      .get('.deny-button').should('be.visible')
  })
  it('Should display a message stating there are no unvetted suggestions if all providers are vetted', () => {

  })
  it('Should display an error message when there is an error thrown in the fetch request', () => {

  })
})
