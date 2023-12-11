describe('hubspot page feature', () => {

    it('handle hub spot login test', () => {

      cy.visit('https://app.hubspot.com/login',{failOnStatusCode:false}) //{failOnStatusCode:false} ===> This will ignore status code other than 200 OK
      cy.get('#username').type('naveen@gmail.com')
      cy.get('#password').type('naveen@g123')
      cy.get('#loginBtn').click()
    })
  })