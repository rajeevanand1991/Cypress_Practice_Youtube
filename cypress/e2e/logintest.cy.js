describe('free crm app',()=>{
    it('login test',()=>{
          //cy is an object of cypress
          cy.visit('https://classic.crmpro.com/') //To launch URL in Cypress   
          
          cy.title().should('have','Free CRM software for customer relationship management, sales, and support.')

          cy.get('input[name="username"]').type('batchautomation') //only CSS and jquery selectors alone allowed
          
          cy.get('input[name="password"]').type('Test@12345')

          cy.get('input[type="submit"]').click()

          cy.title().should('have','CRMPRO')

          //cy.get('Contacts').click()

    })
})