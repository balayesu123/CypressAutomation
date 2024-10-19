/// <reference types='cypress'/>

describe('suite Hooks', function(){

    before(() => {
        // runs once before all tests in the block
        cy.log('**********Open Browser**********')
      })
    
      beforeEach(() => {
        // runs before each test in the block
        cy.log('**********Login to Application**********')
      })
    
      afterEach(() => {
        // runs after each test in the block
        cy.log('**********Logout from Application**********')
      })
    
      after(() => {
        // runs once after all tests in the block
        cy.log('**********close Browser**********')
      })

      // multiple Testes

      it('searching', function(){

        cy.log('****************This Test is for Searching the Product')
      })

      it('Advanced searching', function(){

        cy.log('****************This Test is for Advanced Searching the Product')
      })

      it('Listing products', function(){

        cy.log('****************This Test is for Listing the Product')
      })
})