 



describe("Radiobutton selection",() => {

    it("to check male or female is selected",() =>{

    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
//checking visiblity 
    cy.get("#sex_1").should('be.visible')
   
    cy.get("#sex_2").should('be.visible')

//checking selection of either one
    cy.get("#sex_1").check().should('be.checked')

    cy.get("#sex_2").should('not.be.checked')



    cy.get("#sex_2").check().should('be.checked')
    
    cy.get("#sex_1").should('not.be.checked')


})

it("Checkbox verification", () => {

    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

    cy.get("#addmorepax").should('be.visible') // Visibility 
    
    cy.get("#addmorepax").check().should('be.checked') // selection

   cy.get("#addmorepax").uncheck().should('not.be.checked') //not select







})


})




