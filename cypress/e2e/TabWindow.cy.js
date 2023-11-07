/// <reference types="Cypress" 

describe('New tab oe window ham=ndling', () => {

it('pproch 1 - verify by removing target attribute', () =>{

  cy.visit('https://the-internet.herokuapp.com/windows')
  cy.get(".example>a").invoke('removeAttr','target').click()

  cy.url().should('include','https://the-internet.herokuapp.com/windows')
  cy.go('back')
})

it.only('approch 2 - verify by removing target attribute', () =>{

    cy.visit('https://the-internet.herokuapp.com/windows')
    cy.get(".example>a").then((a) =>{

        let url=a.prop('href')
        cy.visit(url)
    })
  
    cy.url().should('include','https://the-internet.herokuapp.com/windows')
    cy.go('back')
  })


})




