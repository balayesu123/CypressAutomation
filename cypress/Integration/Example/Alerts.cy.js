
/// <reference types='cypress'/>

describe('suite Alert', function(){

    it('Verify Message on Alet', function(){

        cy.visit('https://mail.rediff.com/cgi-bin/login.cgi/')
        cy.get('.signinbtn[value="Sign in"]').click()

        cy.on('window:alert', (str) => {

            expect(str).to.equal('Please enter a valid user name')
        })
    })

    it('confirm Alert', function(){

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('button[onclick="myFunctionConfirm()"]').click()

        cy.on('window:confirm', (str) => {

            expect(str).to.equal('Press a button!')
        })
    })
})