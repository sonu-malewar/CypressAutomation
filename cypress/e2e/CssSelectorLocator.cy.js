describe("CssLocator",() =>{

    it("enter username",() =>{

        cy.visit("https://www.parasoft.com/products/")

        cy.get("[title='Careers']").click()

        cy.get('[title="parasoft"]').contains("PARASOFT") // assertion
        





    })

})






