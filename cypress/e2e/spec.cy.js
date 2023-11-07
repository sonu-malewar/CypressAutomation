describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.co.in/')
    cy.title().should('eq','Google')
  })
})