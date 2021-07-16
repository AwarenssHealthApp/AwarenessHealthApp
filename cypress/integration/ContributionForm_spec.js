describe('ContributionForm View', () => {

    beforeEach(() => {
      cy.fixture('mockDr.json')
        .then(mockData => {
          cy.intercept('GET', 'https://head-to-toe-be.herokuapp.com/api/v1/medical_professionals?type=doctor&state=South Dakota', {
            statusCode: 201,
            delay: 100,
            body: mockData
          })
        })
      cy.visit('http://localhost:3000/submit')
    });

  it('Should have a controlled input field for first name whose value reflects the data typed into the form', () => {
    cy.get('form input[name="firstName"]').type('Betty')
      .get('form input[name="firstName"]').should('have.value', 'Betty')
  });

  it('Should have a controlled input field for last name whose value reflects the data typed into the form', () => {
    cy.get('form input[name="lastName"]').type('White')
      .get('form input[name="lastName"]').should('have.value', 'White')
  })

  it('Should have a controlled input field for specialty whose value reflects the data typed into the form', () => {
    cy.get('form input[name="specialties"]').type('trans health')
      .get('form input[name="specialties"]').should('have.value', 'trans health')
  });

  it('Should have a controlled input field for insurance whose value reflects the data typed into the form', () => {
    cy.get('form input[name="insurances"]').type('sliding scale')
      .get('form input[name="insurances"]').should('have.value', 'sliding scale')
  });
  it('Should have a controlled input field for street whose value reflects the data typed into the form', () => {
    cy.get('form input[name="street"]').type('123 Main St')
      .get('form input[name="street"]').should('have.value', '123 Main St')
  });
  it('Should have a controlled input field for unit whose value reflects the data typed into the form', () => {
    cy.get('form input[name="unit"]').type('A')
      .get('form input[name="unit"]').should('have.value', 'A')
  });
  it('Should have a controlled input field for city whose value reflects the data typed into the form', () => {
    cy.get('form input[name="city"]').type('Paris')
      .get('form input[name="city"]').should('have.value', 'Paris')
  });
  it('Should have a controlled input field for state whose value reflects the data typed into the form', () => {
    cy.get('form select[name="state"]').select('Kansas')
      .get('form select[name="state"]').should('have.value', 'Kansas')
  });
  it('Should have a controlled input field for zip code whose value reflects the data typed into the form', () => {
    cy.get('form input[name="zip"]').type('00000')
      .get('form input[name="zip"]').should('have.value', '00000')
  });
  it('Should have a controlled input field for phone number whose value reflects the data typed into the form', () => {
    cy.get('form input[name="phone"]').type('1-800-GOOD-DOC')
      .get('form input[name="phone"]').should('have.value', '1-800-GOOD-DOC')
  });

  it('should display the sumbit page when the sumbit button is pressed', () => {
    cy.get('#submit-button').click()
      .location('pathname').should('eq', '/submit')
      .get('h2').should('contain', 'Contribution Form')
      .get('form input[name="firstName"]')
  });

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
});
