describe('Category page tests',()=>{

    it('Category page on automation practice - checkbox test',()=>{
        
        cy.visit('http://automationpractice.com/index.php')

        cy.get('.sf-with-ul').first().click()

        //This is clicking all the Checkboxes and verify them
        cy.get('.checkbox').check().parent().should('have.class','checked')

        //Uncheck the Checkboxes and verify them
        cy.get('.checkbox').uncheck().parent().should('not.have.class','checked')

        
    })

    //It will execute only this TestCase
    it.only('SnapDeal page - filter checkbox test',()=>{
        
        cy.visit('https://www.snapdeal.com/')

        //we are using ID, by adding # to use like CSS Selector
        cy.get('#inputValEnter').type('Laptop')
        cy.contains('Search').click()

        //This is a CSS selector, to select all Brands checkbox of laptop shown in the left side taken from open selector playground tool
        // we have 5 checkbox brand, getting 1st brand, [data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(1) > label
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input') //This will select all brands checkbox
        .check({force:true}) //if not using this property, getting Timeout due to Element not VISIBLE, we are using {force:true}
        //.should('have.checked','checked') //If DOM changes we cannot apply this
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input') //This will select all brands checkbox and verify all CHECKED
        .should('have.checked','checked') 

        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input') //This will uncheck all brands checkbox
        .uncheck({force:true})
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input') //This will uncheck all brands checkbox and verify all UNCHECKED
        .should('not.have.checked','checked') 

        //This is clicking all the Checkboxes and verify them
        cy.get('.checkbox').check().parent().should('have.class','checked')

        //Uncheck the Checkboxes and verify them
        cy.get('.checkbox').uncheck().parent().should('not.have.class','checked')
        
    })

})