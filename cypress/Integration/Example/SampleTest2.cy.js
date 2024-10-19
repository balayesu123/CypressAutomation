describe('my sample Test2', function()
{
   it('verify title positive Test', function()
   {
       cy.visit('https://demo.nopcommerce.com/')
       cy.title().should('eq', 'nopCommerce demo store')
   })

   it('verify title negative Test', function()
   {
       cy.visit('https://demo.nopcommerce.com/')
       cy.title().should('eq', 'nopCommerce store')
   })
})