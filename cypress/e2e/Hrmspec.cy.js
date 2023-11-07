

describe("CssLocator",() =>{

    it("enter username",() =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/")  //implicite assertion  should and

        cy.url().should('contain','https://opensource-demo.orangehrmlive.com/')

        cy.title().should('eq','OrangeHRM')

       cy.get("[name='username']").type("Admin")
       cy.get("[name='username']").should('have.value',"Admin")

    
       cy.get("[name='password']").type("admin123")
       
       cy.get("[type='submit']").click() 



})

it("Explicite or custome assertion",() =>{

    cy.visit("https://opensource-demo.orangehrmlive.com/")  

    

   cy.get("[name='username']").type("Admin")
   cy.get("[name='password']").type("admin123")
   cy.get("[type='submit']").click() 

   let expName="abc"

   cy.get(".oxd-userdropdown-img").then((a) =>{

                   let actName=a.text()

                   //using expect
     

      expect(actName).to.not.equal(expName)

      //using assert


   })



})


})