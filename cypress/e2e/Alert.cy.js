/// <reference types="Cypress" 


describe('Alert handling',() => {

it.skip('verifying alert-popup',() => {

    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

    cy.get("button[onclick='jsAlert()']").click()

     cy.on('window:alert',(a) => {

    expect(a).to.contains('I am a JS Alert')

  })
  cy.get("#result").should('have.text','You successfully clicked an alert')

  })

  it.skip('verifying alert-popup',() => {

    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

    cy.get("button[onclick='jsConfirm()']").click()

    //to trigger event using on

     cy.on('window:confirm',(b) => {

      expect(b).to.contains('I am a JS Confirm')

     })
     cy.get("#result").should('have.text','You clicked: Ok')

  })

  it.skip('verifying alert-popup for cancel',() => {

    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

    cy.get("button[onclick='jsConfirm()']").click()

     cy.on('window:confirm',(b) => {

      expect(b).to.contains('I am a JS Confirm')

     })
     
     cy.on('window:confirm',() => false)

     cy.get("#result").should('have.text','You clicked: Cancel')

  })

  it('verifying for prompt',() => {

    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

    //getting control on window pop-up before open it

    cy.window().then((win) => {
        
        cy.stub(win,'prompt').returns('welcome')

    })

    cy.get("button[onclick='jsPrompt()']").click()

     cy.on('window:confirm',(b) => {

      expect(b).to.contains('I am a JS Confirm')

     })

     cy.get("#result").should('have.text','You entered: welcome')

  })






  })