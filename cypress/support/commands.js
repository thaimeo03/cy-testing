// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Login with admin account
Cypress.Commands.add('adminLogin', () => {
  cy.visit('/auth/login')

  cy.fixture('users/login').then((data) => {
    const { email, password } = data.adminAccount

    cy.get('bidv-input[formcontrolname=email]').type(email)
    cy.get('bidv-input-password[formcontrolname=password]').type(password)

    cy.get('button').first().click()

    cy.url().should('eq', Cypress.config('baseUrl'))
  })
})
