describe('Image Me', () => {



  it('Should render all relevant components', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="emoji"]').should('have.length', 2)
    cy.get('[data-cy="header-h1"]')
    cy.get('[data-cy="nav-elem"]').should('have.length', 4)
    cy.get('[data-cy="user-notice"]')
    cy.get('[data-cy="date-entry"]')
    cy.get('[data-cy="button"]')
  });

  it('Should show a satellite image when user enters a date and clicks button ', () => {
    cy.intercept('GET','https://api.nasa.gov/planetary/earth/assets?lon=-104.98&lat=39.86&date=2020-08-08&&dim=0.12&api_key=jQ7EPqCa67ytp2FbzIfuAiEFwx1ZLF8hlOm8z24l', { fixture: 'image'} )
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="date-entry"]').type('2020-08-08')
    cy.get('[data-cy="button"]').click()
    cy.get('.load-image')
    cy.wait(10000)
    cy.get('.satellite-image')
    cy.get('.coordinates')
  })

  it('Should allow a user to save an image', () => {
    cy.intercept('GET','https://api.nasa.gov/planetary/earth/assets?lon=-104.98&lat=39.86&date=2020-08-08&&dim=0.12&api_key=jQ7EPqCa67ytp2FbzIfuAiEFwx1ZLF8hlOm8z24l', { fixture: 'image'} )
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="date-entry"]').type('2020-08-08')
    cy.get('[data-cy="button"]').click()
    cy.wait(10000)
    cy.get('.save-button').click()
    cy.get('[data-cy="nav-elem"]').contains('Saved').click()
    .url().should('eq','http://localhost:3000/savedphotos')
    cy.get('.saved-photo')
  })
})