describe('Handles errors gracefully', () => {


  it('Should display error message when there is a server error on ImageMe', () => {
    cy.intercept('GET',
    'https://api.nasa.gov/planetary/earth/assets?lon=-104.98&lat=39.86&date=2020-08-08&&dim=0.12&api_key=jQ7EPqCa67ytp2FbzIfuAiEFwx1ZLF8hlOm8z24l', 
    { statusCode: 404 }
    ).as('getNetworkFailure')
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="date-entry"]').type('2020-08-08')
    cy.get('[data-cy="button"]').click()
    cy.wait(5000)
    cy.wait('@getNetworkFailure')
    cy.get('[data-cy="error"]').contains("Unfortunately we don't have that photo! Please try another date.")
 })

 it('Should display error message when there is a server error on Photo of the Day', () => {
  cy.intercept('GET',
  'https://api.nasa.gov/planetary/apod?api_key=jQ7EPqCa67ytp2FbzIfuAiEFwx1ZLF8hlOm8z24l', 
  { statusCode: 404 }
  ).as('getNetworkFailure')
  cy.visit('http://localhost:3000/dailyphoto')
  cy.wait(5000)
  cy.wait('@getNetworkFailure')
  cy.get('[data-cy="error"]').contains("We encountered an error! Please try again.")
})

})