describe('back and forward button simulate',()=>{

    it('back-fwd test',()=> {

        cy.visit('https://www.freshworks.com/')
        cy.contains('Platform').click()

        cy.visit('https://www.google.com/') //Will get ERROR ===> Attempt to visit different origin domain, NOT ALLOWED IN CYPRESS
        .go('back')
        .go('forward')

        cy.go('back') //It will go back page in the browser
        cy.go('back', {timeout:5000}) //it is an optional parameter to get timeout for 5 seconds
        
        // otherwise we can use this approach as well for Back
        //cy.go(-1)

        cy.wait(200) //will wait for 200 milli seconds
        cy.go('forward')

        // otherwise we can use this approach as well for the forward
        //cy.go(1)
    })
})