describe('Amazon Search App',()=>{
    it('search test', ()=>{
        
        cy.visit('https://www.amazon.in/')

        //For CSS selector, we have to use . which is class then  div tage nav-search-field
        cy.get('.nav-search-field').within(()=>{ //within method has call back Lambda function
            cy.get('#twotabsearchtextbox').type('Apple Mac Book Laptop')

        })
              
    })
})