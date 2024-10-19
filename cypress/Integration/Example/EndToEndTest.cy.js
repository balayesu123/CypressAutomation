/// <reference types='cypress'/>

describe('Verifying value', function(){
    it('Add to cart', function(){

        cy.visit('https://demo.nopcommerce.com/')
        cy.get("#small-searchterms").type('Apple MacBook Pro 13-inch')
        cy.get("[type='submit']").click()
        cy.get(".button-2.product-box-add-to-cart-button").click()
        cy.get(".qty-input").clear().type('2')
        cy.get("#add-to-cart-button-4").click()
        cy.wait(2000)
        cy.get(".cart-label").click()
        cy.wait(3000)
        cy.get(".product-unit-price").contains('$1,800.00')
        cy.get('.remove-btn').click()
        cy.wait(3000)
        cy.get('.no-data').should('have.text', '\nYour Shopping Cart is empty!\n')
        
    } )
})