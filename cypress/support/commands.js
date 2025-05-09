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
Cypress.Commands.add('loginAdmin', () => {
  cy.visit('/auth/login')

  cy.fixture('auth/login').then((data) => {
    const { email, password } = data.adminAccount

    cy.get('bidv-input[formcontrolname=email]').type(email)
    cy.get('bidv-input-password[formcontrolname=password]').type(password)

    cy.get('button').first().click()

    cy.url().should('eq', Cypress.config('baseUrl'))
  })
})

// Custom command to set content in a CodeMirror editor
Cypress.Commands.add(
  'setCodeMirrorContent',
  (content, selector = '.cm-content') => {
    cy.get(selector).then(() => {
      cy.window().then((win) => {
        // Get the CodeMirror view instance
        const view = win.document.querySelector(selector).cmView.view
        // Set editor content by replacing the entire document
        view.dispatch({
          changes: { from: 0, to: view.state.doc.length, insert: content },
        })
      })
    })
  },
)
