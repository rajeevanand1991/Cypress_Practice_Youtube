describe('check element get concept',()=>{
    it('element get testing', ()=>{
        
        cy.visit('https://www.freshworks.com/')
        cy.contains('Platform').click() //contains checks the Platform menu
        
        cy.url().should('include', '/platform') //check ASSERTION: URL like: https://www.freshworks.com/platform

        cy.get('div.align-center.mb-lg h1:nth-of-type(2)') //it see the CSS selector like div tag -> align-center.mb-lg -> h1 -> :nth-of-type(2) having 2 headers, we need to select 2nd type
            .should('be.visible')
            .and('contain', 'Our platform')
            .and('have.length', 1) //above 3 lines are ASSERTIONS

            cy.get('ul.foother-nav li').should('have.length', 35) //This li tags in the webpage should contain 35 count

            cy.get('ul.foother-nav li')
            .find("a[href*='footer']") //find method used get elements from parent to child
            .should('have.length', 13) 
    })
})