describe('Get API for REST', ()=>{

    it("Get API Test for Flask - MotorBike", ()=>{
        cy.request('GET', 'https://flask-rest-api-demo.herokuapp.com/product/motorbike').then((res)=>{
            expect(res.status).equal(200) //verify response code as 200
            expect(res.body.product[0]).has.property('price', 599.99) //JSON response was product array, inside verify price
            expect(res.body.product[0]).has.property('product', 'motorbike')
        })
    })

    it("Get API Test for Flask - users", ()=>{
        cy.request('GET', 'https://flask-rest-api-demo.herokuapp.com/users').then((res)=>{
            expect(res.status).equal(200) //verify response code as 200
            expect(res.body.users[0]).has.property('username', 'test_1') //JSON response was users array, inside verify price
            expect(res.body.users[1]).has.property('id', 2)
            expect(res.body.users).has.length(5) //Total users count
            expect(res.body.users[0]).not.have.property('price')
        })
    })

    it("Get API Test for Req Res API - Users", ()=>{
        cy.request('GET', 'https://reqres.in/api/users?page=2').then((res)=>{
            expect(res.status).equal(200) //verify response code as 200
            expect(res.body.data[0]).has.property('first_name', 'Michael') //JSON response was data array, inside verify price
            expect(res.body.data[1]).has.property('email', 'lindsay.ferguson@reqres.in')
            expect(res.body.data).has.length(6) //Total data count
        })
    })

})