describe('About', () => {
  
  it('Should render all relevant components', () => {
    cy.visit('http://localhost:3000/about')
    cy.get('[data-cy="emoji"]').should('have.length', 2)
    cy.get('[data-cy="header-h1"]')
    cy.get('[data-cy="nav-elem"]').should('have.length', 4)
    cy.get('.about-header')
    cy.get('.about-subhead')
    cy.get('.imageme-header')
    cy.get('.about')
  })
})