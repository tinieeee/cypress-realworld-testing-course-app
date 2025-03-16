/// <reference types="cypress"/>

describe('Home Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    // https://learn.cypress.io/testing-your-first-application/installing-cypress-and-writing-your-first-test
    cy.get('dt').as('dtElement')
  });

  it.only('Go to Homepage and verify heading 1', () => {
    
    cy.getByData("hero-heading").contains('Testing Next.js Applications with Cypress'); // lets clean up this syntax to make our tests easier to write by writing our own custom Cypress commands
    //For our use case, we want to create a custom Cypress command getBydData that will allow us to “get” data-test attributes more easily.
    //add our custom command to the cypress/support/commands.ts file
  });

  it('Features of the homepage are correct',()=>{
    
    cy.get('@dtElement').eq(0).contains('4 Courses');
  });

  it.only('Contains case sensitive using regex', ()=>{
    cy.get('@dtElement').eq(0).contains(/4 coursEs/i);
    //So if you wanted to make a case insensitive comparison using regex, you could use
    cy.get('@dtElement').eq(1).contains(/25\+ Lessons/);
    cy.get('@dtElement').eq(2).contains('Free and Open Source');
  });
})