/// <reference types="Cypress" 



describe("Verify Dropdown", () =>{

it.skip("Using Select Verify Dropdown", () =>{

    cy.visit("https://www.zoho.com/commerce/free-demo.html")
    cy.get(".globalcountrycode").select('France').should('have.value','France')



})


it.skip("Autosuggest Dropdown", () =>{

    cy.visit('https://www.wikipedia.org/')

    cy.get("#searchInput").type('Delhi')
    cy.get(".suggestions-dropdown").contains('Delhi University').click()



})
it.skip("Autosuggest Dropdown", () =>{

    cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

    cy.get("#select2-reasondummy-container").click()
    cy.get(".select2-search__field").type('Visa application').type('{enter}')
    cy.get("#select2-reasondummy-container").should('have.text','Visa application')


})
it("Autosuggest Dropdown", () =>{

    cy.visit('https://www.google.co.in/')

     cy.get(".gLFyf").type('selenium')

     cy.wait(3000)
   
     cy.get("div.wM6W7d>span").should('have.length',12)
     cy.get("div.wM6W7d>span").each( ($el,index,$list) => {

        if($el.text()=="selenium ide"){

            cy.wrap($el).click()
        }

        

        


    })

   
    cy.get(".gLFyf").should('have.value','selenium ide')

})


})