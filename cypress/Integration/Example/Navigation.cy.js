/// <reference types='cypress'/>

describe('suite Navidation', function(){

    it('Navigate to forward and back', function(){

        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq', 'nopCommerce demo store')
        cy.get('.ico-register').click()
        cy.title().should('eq', 'nopCommerce demo store. Register')

        cy.go('back')
        cy.title().should('eq', 'nopCommerce demo store')

        cy.go('forward')
        cy.title().should('eq', 'nopCommerce demo store. Register')

        cy.go(-1)  // -1 used for backward
        cy.title().should('eq', 'nopCommerce demo store')

        cy.go(1)  // 1 used for forward
        cy.title().should('eq', 'nopCommerce demo store. Register')

        cy.reload()


    })
})