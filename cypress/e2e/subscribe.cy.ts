/// <reference types ="cypress"/>

describe('Newsletter Subscribe Form', ()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000")
    })
    it('Allows users to subscribe to the email list',()=>{
        cy.getByData('email-input').type('test1@mailinator.com');
        cy.getByData('submit-button').click();
        cy.getByData('success-message').should('exist').contains('test1@mailinator.com');
    })

    it('Does not Allow invalid emails address', ()=>{
        cy.getByData('email-input').type('testmailinator.com');
        cy.getByData('submit-button').click();
        cy.getByData('success-message').should('not.exist');
    })

    it('Do not allow already subscribed email addresses', ()=>{
        cy.getByData('email-input').type('john@example.com');
        cy.getByData('submit-button').click();
        cy.getByData('server-error-message').should('exist').and('have.text','Error: john@example.com already exists. Please use a different email address.');
    })
})