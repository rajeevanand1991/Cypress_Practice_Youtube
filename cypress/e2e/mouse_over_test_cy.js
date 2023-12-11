describe('mouse over feature',()=>{

    //It will skip this testcase alone
    it.skip('click on Sign Up Link Test',()=>{
        
        cy.visit('https://www.spicejet.com/')

        //The below lines will do mouseover action
        cy.contains('Login / Signup').trigger('mouseover')
        cy.contains('SpiceClub Members').trigger('mouseover')

        cy.contains('Sign up').click()

    })

    it('click on Member Login Link Test',()=>{
        
        cy.visit('https://www.spicejet.com/')

        //The below lines will do mouseover action
        cy.contains('Login / Signup').trigger('mouseover')
        cy.contains('SpiceClub Members').trigger('mouseover')

        cy.contains('Member Login').click()

    })

    //using invoke() method
    it('Add to Cart Test',()=>{
        
        cy.visit('http://automationpractice.com/index.php')

        cy.get('.ajax_add_to_cart_button').first().click()
        cy.get('.cross').click()

        cy.wait(3000)

        cy.get('.cart_block').should('be.hidden').invoke('show')
        cy.get('#button_order_cart').click()
        cy.url().should('include','controller=order')

    })

})