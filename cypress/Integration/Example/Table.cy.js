/// <reference types='cypress'/>

describe('suite table', function(){

    it('Handling table', function(){

        cy.visit('https://testautomationpractice.blogspot.com/')

        //1) check value presence anywhere in the table
        cy.get('table[name="BookTable"]').contains('td','Learn Java').should('be.visible')

        //2) check value presence in specific row & column

        cy.get('table[name="BookTable"] > tbody > tr:nth-child(4) > td:nth-child(3)').contains('Javascript').should('be.visible')

        //3) check book name 'Master In Java' whose author is 'Amod'

        cy.get('table[name="BookTable"] > tbody > tr td:nth-child(2)').each(($e, index, $list) => {

           const text = $e.text()
           if(text.includes('Amod'))
           {
              cy.get('table[name="BookTable"] > tbody > tr td:nth-child(1)').eq(index).then(function(bname){

                const bookName = bname.text()
                expect(bookName).to.equal('Master In Java')
              })
           }
        })
    })
})