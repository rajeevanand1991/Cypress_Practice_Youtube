describe('automation practice features testing', ()=> {

    before(()=> {  //This will execute once before first it block Test case alone not for every it block(all Testcases)
        cy.visit('http://automationpractice.com/index.php')

        //This login() method present in commands.js file inside support folder
        cy.login('naveenanimation30@gmail.com','Test@1234')

    })

    beforeEach(()=> { //This will execute every for every it block Test cases

       // cy.visit('http://automationpractice.com/index.php')

        //This login() method present in commands.js file inside support folder
       // cy.login('naveenanimation30@gmail.com','Test@1234')
    })

    })

    it('should login', ()=> {
        //This is after login, we are doing verifying/Asserting
        cy.url().should('include', 'controller=my-account') //verify url appending "controller=my-account"
        cy.get('.myaccount-link-list a').should('have.length', 5) //verify 5 Anchor link menus presence
    })

    it('should navigate to home page', ()=>{
        cy.get('.icon-chevron-left').last().click() 
        .url().should('include', 'index.php') //Home page button (.icon-chevron-left) has 2 elements in the DOM, we need to select 2nd element
        //Then verify URL came home page like http://automationpractice.com/index.php'
    })

    it('should search', ()=> {
        cy.search('Dress')
        cy.get('.lighter').should('contain.text', 'Dress')

    })