describe('ContributionForm', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/submit')
  })
  it('Should have a controlled input field for first name whose value reflects the data typed into the form', () => {
    cy.get('form input[name="firstName"]').type('Betty')
      .get('form input[name="firstName"]').should('have.value', 'Betty')
  })
  it('Should have a controlled input field for last name whose value reflects the data typed into the form', () => {
    cy.get('form input[name="lastName"]').type('White')
      .get('form input[name="lastName"]').should('have.value', 'White')
  })
  it('Should have a controlled input field for specialty whose value reflects the data typed into the form', () => {
    cy.get('form input[name="specialty"]').type('trans health')
      .get('form input[name="specialty"]').should('have.value', 'trans health')
  })
  it('Should have a controlled input field for insurance whose value reflects the data typed into the form', () => {
    cy.get('form input[name="insurance"]').type('sliding scale')
      .get('form input[name="insurance"]').should('have.value', 'sliding scale')
  })
  it('Should have a controlled input field for address whose value reflects the data typed into the form', () => {
    cy.get('form input[name="address"]').type('123 Main St')
      .get('form input[name="address"]').should('have.value', '123 Main St')
  })
  it('Should have a controlled input field for phone number whose value reflects the data typed into the form', () => {
    cy.get('form input[name="phoneNum"]').type('1-800-GOOD-DOC')
      .get('form input[name="phoneNum"]').should('have.value', '1-800-GOOD-DOC')
  })
  // describe('ContributionForm Error Handling', () => {
  //   beforeEach(() => {
  //     cy.get('form input[name="firstName"]').type('Betty')
  //       .get('form input[name="lastName"]').type('White')
  //       .get('form input[name="specialty"]').type('trans health')
  //       .get('form input[name="insurance"]').type('sliding scale')
  //       .get('form input[name="address"]').type('123 Main St')
  //   })
  //   it('Should return an error message if the user does not fill out all input fields',() => {
  //     cy.get('form > button').click()
  //       .get('.error-msg').should('have.text', 'Error: Please fill out all input fields')
  //   })
  //   it('Should display a message stating that the suggestion was successfully receieved', () => {
  //     .intercept('POST', 'backendAPI', {
  //       statusCode: 200
  //     })
  //     .get('form > button').click()
  //     .get('.confirm-msg').should('have.text', 'Thank you for your suggestion! We will review your submission for approval.')
  //   })
  // })
})
