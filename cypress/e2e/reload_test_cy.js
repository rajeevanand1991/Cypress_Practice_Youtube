describe('reload page',()=>{

    it('page reload test',()=>{
        cy.visit('https://www.freshworks.com/')
        cy.contains('Platform').click()

        cy.reload() //To make refresh the page

        cy.contains('Platform').should('be.visible')

        cy.reload(true) //This will do forcefull reload
        cy.reload(true).contains('Platform').should('be.visible')
        cy.reload(true, {timeout:5000}).contains('Platform').should('be.visible')

    })

})