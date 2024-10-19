describe('My Sample Test', () => {
    it('Visits Amazon and Enter Product', () => {
      cy.visit('https://www.amazon.in/')
      cy.get('input#twotabsearchtextbox').type('samsung')
    })
  })