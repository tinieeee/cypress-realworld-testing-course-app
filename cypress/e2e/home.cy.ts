/// <reference types="cypress"/>

describe('Home Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    // https://learn.cypress.io/testing-your-first-application/installing-cypress-and-writing-your-first-test
    cy.get('dt').as('dtElement')
  });

  context('Hero Section', ()=>{
    //context method can wrap all of the tests related to the hero section of our home page together
    //makes it quick and easy for anyone reading this spec file to know that these tests are for the hero section of our home page.
  it('Go to Homepage and verify heading 1', () => {
    
    cy.getByData("hero-heading").contains('Testing Next.js Applications with Cypress'); // lets clean up this syntax to make our tests easier to write by writing our own custom Cypress commands
    //For our use case, we want to create a custom Cypress command getBydData that will allow us to “get” data-test attributes more easily.
    //add our custom command to the cypress/support/commands.ts file
  });

  it('Features of the homepage are correct',()=>{
    
    cy.get('@dtElement').eq(0).contains('4 Courses');
  });

  it('Contains case sensitive using regex', ()=>{
    cy.get('@dtElement').eq(0).contains(/4 coursEs/i);
    //So if you wanted to make a case insensitive comparison using regex, you could use
    cy.get('@dtElement').eq(1).contains(/25\+ Lessons/);
    cy.get('@dtElement').eq(2).contains('Free and Open Source');
  });

})

// Now lets test another section of home page which is the course section
context('Courses Section',()=>{
  it('Course: Testing Your First Next.js Application', ()=>{
    cy.getByData('course-0').find('a').contains('Get started').click();
    //lets verify correct url or pathname
    cy.location('pathname').should('equal', '/testing-your-first-application')
  })

  it('Course: Testing Foundations', ()=>{
    cy.getByData('course-1').find('a').contains('Get started').click();
    //lets verify correct url or pathname
    cy.location('pathname').should('equal', '/testing-foundations')
  })

  it('Course: Cypress Fundamentals', ()=>{
    cy.getByData('course-2').find('a').contains('Get started').click();
    //lets verify correct url or pathname
    cy.location('pathname').should('equal', '/cypress-fundamentals')
  })

})

})