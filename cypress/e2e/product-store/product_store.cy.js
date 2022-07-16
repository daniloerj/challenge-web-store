/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('challenge product store', () => {
    beforeEach(() => {
      cy.visit('https://www.demoblaze.com/index.html')
    })

    function userID_Alpha_Numeric() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
      for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
  
      return text;
    }

    const user = userID_Alpha_Numeric()
    
    it('create user', () => {
      cy.get('a[id="signin2"]').click()
      cy.wait(1000)
      cy.get('input[id="sign-username"]').type(user)
      cy.wait(1000)
      cy.get('input[id="sign-password"]').type('123456')
      cy.wait(1000)
      cy.get('button[type="button"]').contains('Sign up').click()
      cy.wait(1000)
    })

    it('login and logout user', () => {
      cy.get('a[id="login2"]').click()
      cy.wait(1000)
      cy.get('input[id="loginusername"]').type(user)
      cy.wait(1000)
      cy.get('input[id="loginpassword"]').type('123456')
      cy.wait(1000)
      cy.get('button[type="button"]').contains('Log in').click()
      cy.wait(1000)
      cy.get('a[id="nameofuser"]').should('contain', `Welcome ${user}`)
      cy.wait(1000)
      cy.get('a[id="logout2"]').click()
    })

    it('add a laptop to car', () => {
      cy.get('a[id="login2"]').click()
      cy.wait(1000)
      cy.get('input[id="loginusername"]').type(user)
      cy.wait(1000)
      cy.get('input[id="loginpassword"]').type('123456')
      cy.wait(1000)
      cy.get('button[type="button"]').contains('Log in').click()
      cy.wait(1000)
      cy.get('a[onclick*="notebook"]').click()
      cy.wait(3000)
      cy.get('.hrefch').first().click()
      cy.wait(1000)
      cy.get('h2[class="name"]').invoke('text').then((text) => {
        cy.get('a[onclick*="addToCart"]').click()
      cy.wait(1000)
      cy.get('a[id="cartur"]').click()
      cy.wait(1000)
      cy.get('.table-responsive')
        .find('tbody tr:last')
        .find('td')
        .eq(1)
        .should('have.text', text.trim())
    });
    })

  })
  