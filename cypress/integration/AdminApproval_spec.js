describe('AdminApproval', () => {
  beforeEach(() => {
    // cy.fixture('mockDr.json')
    //   .then(mockData => {
    //     cy.intercept('GET', 'https://head-to-toe-be.herokuapp.com/api/v1/medical_professionals?vetted=false', {
    //       statusCode: 201,
    //       delay: 100,
    //       body: mockData
    //     })
    //   })
    cy.visit('http://localhost:3000/admin_approval_who_dis')
  })
  it('Should display the page title', () => {
    cy.get('.admin-sub-title').should('be.visible')
      .get('.admin-sub-title').should('contain', 'Admin Approval')
      .get('.admin-sub-title').should('have.css', 'font-family', 'opendyslexic')
  })
  it('Should display unvetted healthcare providers', () => {

  })
  it('Should display a message stating there are no unvetted suggestions if all providers are vetted', () => {

  })
})
