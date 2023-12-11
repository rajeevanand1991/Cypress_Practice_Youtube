describe('launch my app',()=>{
    it('app testing',()=>{
          //cy is an object of cypress
          cy.visit('https://www.freshworks.com/') //To launch URL in Cypress   
          cy.contains('Platform') //verify the Plaform link in the webpage
          cy.contains('Platform').click() //Will click the Platform link
          cy.url().should('include', '/platform/') //Assertion added to verify /platform in the url             
        //NO NEED OF ANY WAIT MECHANISM NEED TO ADD, CYPRESS WILL HANDLE EVERYTHING


    })




})