describe('Photo of the Day', () => {
  
  
  
  
  
  it('Should render all relevant elements', () => {
    cy.intercept('GET', 'https://api.nasa.gov/planetary/apod?api_key=jQ7EPqCa67ytp2FbzIfuAiEFwx1ZLF8hlOm8z24l', { fixture: 'apods1'})
    cy.visit('http://localhost:3000/dailyphoto')
    Cypress.on('uncaught:exception', () => false)
    cy.wait(5000)
    cy.get('[data-cy="emoji"]').should('have.length', 2)
    cy.get('[data-cy="header-h1"]')
    cy.get('[data-cy="nav-elem"]').should('have.length', 4)
    cy.get('[data-cy="date-entry"]')
    cy.get('[data-cy="button"]')
    //The photo of the day is always rendered on load and is variable, 20 and 21 are to force getting a certain dataset
    cy.get('[data-cy="date-entry"]').type('2022-08-07')
    cy.get('[data-cy="button"]').click()
    cy.get('.apod-title').contains('Meteor')
    cy.get('.apod-image')
    cy.get('.apod-explanation').contains('Perseid')
    cy.get('.apod-copyright').contains('Fritz')
    cy.get('.apod-date').contains('2022-08-07')
  });

  it('Should render a different photo', () => {
    cy.intercept('GET', 'https://api.nasa.gov/planetary/apod?api_key=jQ7EPqCa67ytp2FbzIfuAiEFwx1ZLF8hlOm8z24l&date=2022-08-06', { fixture: 'apods2'})
    cy.visit('http://localhost:3000/dailyphoto')
    cy.get('[data-cy="date-entry"]').type('2022-08-06')
    cy.get('[data-cy="button"]').click()
    cy.get('.apod-title').contains('Stereo')
    cy.get('.apod-image')
    cy.get('.apod-explanation').contains('Phobos')
    cy.get('.apod-copyright')
    cy.get('.apod-date').contains('2022-08-06')

  });

  it('Should render a third APOD, and will have saved three images total to view', () => {
    cy.intercept('GET', 'https://api.nasa.gov/planetary/apod?api_key=jQ7EPqCa67ytp2FbzIfuAiEFwx1ZLF8hlOm8z24l&date=2022-08-07', { fixture: 'apods1'})
    cy.intercept('GET', 'https://api.nasa.gov/planetary/apod?api_key=jQ7EPqCa67ytp2FbzIfuAiEFwx1ZLF8hlOm8z24l&date=2022-08-06', { fixture: 'apods2'})
    cy.intercept('GET', 'https://api.nasa.gov/planetary/apod?api_key=jQ7EPqCa67ytp2FbzIfuAiEFwx1ZLF8hlOm8z24l&date=2022-08-05', { fixture: 'apods3'})
    cy.visit('http://localhost:3000/dailyphoto')
    cy.get('[data-cy="date-entry"]').type('2022-08-07')
    cy.get('[data-cy="button"]').click()
    cy.get('.apod-button').click()
    cy.get('[data-cy="date-entry"]').type('2022-08-06')
    cy.get('[data-cy="button"]').click()
    cy.get('.apod-button').click()
    cy.get('[data-cy="date-entry"]').type('2022-08-05')
    cy.get('[data-cy="button"]').click()
    cy.get('.apod-button').click()
    cy.get('[data-cy="nav-elem"]').contains('Saved Photos').click()
    cy.get('[src="https://apod.nasa.gov/apod/image/2208/MeteorM31_hemmerich_960.jpg"]')
    cy.get('[src="https://apod.nasa.gov/apod/image/2208/Phobos_stereoME_1024c.jpg"]')
    cy.get('[src="https://apod.nasa.gov/apod/image/2208/M20-Trifid-Nebula-1024.jpg"]')
  });

})
