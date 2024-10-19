        
/// <reference types='cypress'/>
    
describe('Dropdown and CheckBox Action', function(){

    beforeEach(()=>{
        cy.visit('https://demo.automationtesting.in/Register.html')

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
    })

    it('Handling multiple Check Boxs', function(){

        cy.get('#checkbox1').check().should('be.checked').should('have.value', 'Cricket')
        cy.get('#checkbox3').check().should('be.checked').should('have.value', 'Hockey')

        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        cy.get('[type="checkbox"]').check(['Cricket', 'Movies', 'Hockey'])

    })

    it('Handling dropdown of select tag', function(){

        cy.get('select[id="Skills"]').select('Java').should('have.value', 'Java')
    })


    it('Handling dropdown of with out select tag', function(){
        
     
        cy.get('.select2-selection').click()
        cy.get('.select2-search__field').type('Japan')
        cy.get('.select2-search__field').type('{enter}')
      
    }) 
})