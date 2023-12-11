describe('testing diff view ports', ()=>{ /*()=> calback function with Lambda also called supplier 
                                        (mean like it does not take input but gives some output)*/
    before(()=>{    // At the begining it will execute
        console.log('running my tests') // To print our message
    })

    beforeEach(()=>{    //This will execute before every tests
        cy.visit('https://wwww.google.co.in')

    })

    it('open in macbook version 13',()=>{
        cy.viewport('macbook-13') //This is present cypress doc, which shows height and width for our product like macbook 13
        cy.screenshot() //capture screenshot and added to the screenshot folder
        cy.wait(200) //it was in milli seconds
    })

    it('open in macbook version 15',()=>{
        cy.viewport('macbook-15') //This is present cypress doc, which shows height and width for our product like macbook 15
        cy.screenshot() //capture screenshot and added to the screenshot folder
        cy.wait(200) //it was in milli seconds
    })

    it('open in iphone-x',()=>{
        cy.viewport('iphone-x') //This is present cypress doc, which shows height and width for our product like iphone-x
        cy.screenshot() //capture screenshot and added to the screenshot folder
        cy.wait(200) //it was in milli seconds
    })

    it('open in 550 and 750',()=>{
        cy.viewport(550, 750) //This is present cypress doc, which shows height and width for our product like 550 and 750
        cy.screenshot() //capture screenshot and added to the screenshot folder
        cy.wait(200) //it was in milli seconds
    })

})