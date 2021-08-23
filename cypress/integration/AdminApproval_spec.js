describe('AdminApproval', () => {
<<<<<<< HEAD
<<<<<<< HEAD
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

<<<<<<< HEAD
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

  it('Should make a patch request when the user clicks the approve button', () => {
<<<<<<< HEAD
<<<<<<< HEAD
    cy.fixture('mockVetted.json')
=======
    cy.fixture('mockUnvettedModified.json')
>>>>>>> 3e24ea2... Add test for patch request
=======
    cy.fixture('mockVetted.json')
>>>>>>> ce3897e... Make patch test more accurate to use
      .then(modifiedData => {
        cy.intercept('PATCH', 'https://head-to-toe-be.herokuapp.com/api/v1/medical_professionals/80', modifiedData)
      })

<<<<<<< HEAD
<<<<<<< HEAD
    cy.fixture('mockVetted.json')
      .then(mockVettedData => {
        cy.intercept('GET', 'https://head-to-toe-be.herokuapp.com/api/v1/medical_professionals?type=doctor&state=Colorado', {
          statusCode: 201,
          body: mockVettedData
        })
      })

      cy.fixture('mockUnvettedModified.json')
      .then(mockData => {
        cy.intercept('GET', 'https://head-to-toe-be.herokuapp.com/api/v1/medical_professionals?vetted=false', {
=======
    cy.fixture('mockUnvettedModified.json')
      .then(mockData => {
=======
    cy.fixture('mockVetted.json')
      .then(mockVettedData => {
>>>>>>> ce3897e... Make patch test more accurate to use
        cy.intercept('GET', 'https://head-to-toe-be.herokuapp.com/api/v1/medical_professionals?type=doctor&state=Colorado', {
>>>>>>> 3e24ea2... Add test for patch request
          statusCode: 201,
          body: mockVettedData
        })
      })

      cy.fixture('mockUnvettedModified.json')
      .then(mockData => {
        cy.intercept('GET', 'https://head-to-toe-be.herokuapp.com/api/v1/medical_professionals?vetted=false', {
          statusCode: 201,
          body: mockData
        })
      })

    cy.get('.provider-card').should('be.visible')
      .get('.first-name').should('contain', 'gnat')
      .get('.last-name').should('contain', 'Slowpoke')
      .get('.approve-button').first().click()
<<<<<<< HEAD
<<<<<<< HEAD

    cy.visit('http://localhost:3000/admin_approval_who_dis')
      .get('.provider-card').should('have.length', 1)

<<<<<<< HEAD
=======
>>>>>>> 3e24ea2... Add test for patch request
=======

>>>>>>> de997a6... Remove unnecessary comments
=======
>>>>>>> ce3897e... Make patch test more accurate to use
    cy.visit('http://localhost:3000/doctors')

    cy.get('.provider-card').should('be.visible')
      .get('.first-name').should('be.visible')
      .get('.first-name').should('contain', 'gnat')
      .get('.last-name').should('contain', 'Slowpoke')
      .get('.address').should('contain', 'Daphnechester')
      .get('.specialties').should('contain', 'Orc, Sylvan, Undercommon')
      .get('.insurances').should('contain', 'Schinner, Kreiger and Stokes, Yundt-Cronin, Herman-Bogan')
<<<<<<< HEAD
<<<<<<< HEAD
  })
=======
  // beforeEach(() => {
  //   cy.fixture('mockDr.json')
  //     .then(mockData => {
  //       cy.intercept('GET', 'https://head-to-toe-be.herokuapp.com/api/v1/medical_professionals?vetted=false', {
  //         statusCode: 201,
  //         delay: 100,
  //         body: mockData
  //       })
  //     })
  //   cy.visit('http://localhost:3000/admin_approval_who_dis')
  // })
=======
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
>>>>>>> 01ae36f... Fix syntax errors in test file
=======
>>>>>>> 3f0c8c9... Merge rebase conflict
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 042b861... Set up Cypress testing file
=======
  it('Should display an error message when there is an error thrown in the fetch request', () => {

  })
>>>>>>> b0cd125... Add loading message to each page that waits for a GET request to load
=======

  it('Should display an error message when there is an error thrown in the fetch request', () => {

  })

  it('Should make a patch request when the user clicks the approve button', () => {
    
=======

>>>>>>> 3e24ea2... Add test for patch request
=======
>>>>>>> de997a6... Remove unnecessary comments
  })
<<<<<<< HEAD
>>>>>>> 3f0c8c9... Merge rebase conflict
=======

  it('Should have a delete request when the user clicks the deny button', () => {
    cy.intercept('DELETE', 'https://head-to-toe-be.herokuapp.com/api/v1/medical_professionals/80')

    cy.fixture('mockUnvettedModified.json')
    .then(mockData => {
      cy.intercept('GET', 'https://head-to-toe-be.herokuapp.com/api/v1/medical_professionals?vetted=false', {
        statusCode: 201,
        body: mockData
      })
    })

    cy.get('.provider-card').should('be.visible')
      .get('.first-name').should('contain', 'gnat')
      .get('.last-name').should('contain', 'Slowpoke')
      .get('.deny-button').first().click()

    cy.visit('http://localhost:3000/admin_approval_who_dis')
      .get('.provider-card').should('have.length', 1)

    cy.get('.provider-card').should('be.visible')
      .get('.first-name').should('be.visible')
      .get('.first-name').should('contain', 'reindeer')
      .get('.last-name').should('contain', 'Psyduck')
      .get('.address').should('contain', 'Lake Nickychester')
      .get('.specialties').should('contain', 'Deep Speech, Undercommon')
      .get('.insurances').should('contain', 'Stamm-Renner, Reichel Group')

  })

>>>>>>> c05a1ae... Test for Delete functionality
})
