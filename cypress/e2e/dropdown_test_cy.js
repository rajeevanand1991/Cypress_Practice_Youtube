describe('drop down feature',()=>{

    //It will skip this test case
    it.skip('with Select tag test',()=>{

        cy.visit('https://www.orangehrm.com/en/book-a-free-demo/')
        
        //using Select class, ID locator
        cy.get('#Form_getForm_Country')
        .select('Andorra')
        .should('have.value','Andorra')

        cy.get('#Form_getForm_Industry')
        .select('Automotive')
        .should('have.value','Automotive')


    })

    it('Google Search Test',()=>{

        cy.visit('https://www.google.com/')
        
        //Here not having Select class, hence used CSS selector
        cy.get("[name='q']").type('cypress')

        //List shows .class name and find the child element
        cy.get('.eIPGRd')
        .find('li span')
        .contains('cypress testing')
        .click()

        //The below code also work
        cy.get('.eIPGRd li span').contains('cypress testing').click()

    })

    it('Automation EComm Search Test',()=>{

        cy.visit('http://automationpractice.com/index.php')
        
        //Here not having Select class, hence used CSS selector
        cy.get('#search_query_top').type('dress')

        //List shows .class name and find the child element
        cy.get('.ac_results')
        .find('li')
        .contains('T-shirts')
        .click()

    })

})