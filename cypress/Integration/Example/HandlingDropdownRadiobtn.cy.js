/// <reference types='cypress'/>

describe('Actions', function(){

    it('Handling Dropdown and Radio Buttons', function(){

        cy.visit("https://demo.guru99.com/test/newtours/")
        cy.url().should('include', 'newtours')

        cy.get('tbody > tr:nth-child(2) > td:nth-child(2) > a').should('be.visible').click()

        cy.wait(2000)
        cy.title().should('eq', 'Find a Flight: Mercury Tours:')

        // Radio buttons

        cy.get('[value="roundtrip"]').should('be.visible').should('be.checked')
        cy.get('[value="oneway"]').should('be.visible').should('not.be.checked').click()

        // Dropdowns

        cy.get('select[name="airline"]').select('Blue Skies Airlines')

        cy.get('[name="findFlights"]').should('be.visible').should('be.enabled').click()

        cy.get('p > font > b > font:nth-child(1)').should('contain', 'After flight finder - No Seats Avaialble')



    })
})