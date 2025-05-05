describe('Tính năng đăng nhập', () => {
  beforeEach(() => {
    cy.visit('/auth/login')
  })

  it('Không được bỏ trống trường email và password', () => {
    cy.get('button').first().click()

    cy.get('bidv-error[formcontrolname=email]')
      .should('be.visible')
      .should('contain', 'This field is required')

    cy.get('bidv-error[formcontrolname=password]')
      .should('be.visible')
      .should('contain', 'This field is required')
  })

  it('Kiểm tra email không đúng định dạng', () => {
    cy.fixture('auth/login').then((data) => {
      const invalidEmailFormat = data.invalidEmailFormat

      for (const email of invalidEmailFormat.emails) {
        cy.get('bidv-input[formcontrolname=email]').type(email)

        cy.get('button').first().click()

        cy.get('bidv-error[formcontrolname=email]')
          .should('be.visible')
          .should('contain', 'Please enter a valid email')

        cy.get('bidv-input[formcontrolname=email]').clear()
      }
    })
  })

  it('Kiểm tra password không đúng độ dài', () => {
    cy.fixture('auth/login').then((data) => {
      const password = data.invalidLengthPassword.password

      cy.get('bidv-input-password[formcontrolname=password]').type(password)

      cy.get('label').first().click()

      cy.get('bidv-error[formcontrolname=password]')
        .should('be.visible')
        .should('contain', 'Minimum length — 6')
    })
  })

  it('Kiểm tra email hoặc password không đúng', () => {
    cy.fixture('auth/login').then((data) => {
      const cases = data.invalidEmailOrPassword.cases

      for (const c of cases) {
        cy.get('bidv-input[formcontrolname=email]').type(c.email)
        cy.get('bidv-input-password[formcontrolname=password]').type(c.password)

        cy.get('button').first().click()

        cy.get('bidv-error')
          .find('[automation-id=bidv-error__text]')
          .should('be.visible')
          .should('contain', 'Email or password invalid')

        cy.get('bidv-input[formcontrolname=email]').type('a').clear()
        cy.get('bidv-input-password[formcontrolname=password]')
          .type('a')
          .clear()
      }
    })
  })

  it('Kiểm tra email và password đúng', () => {
    cy.fixture('auth/login').then((data) => {
      const email = data.validEmailAndPassword.email
      const password = data.validEmailAndPassword.password

      cy.get('bidv-input[formcontrolname=email]').type(email)
      cy.get('bidv-input-password[formcontrolname=password]').type(password)

      cy.get('button').first().click()

      cy.url().should('eq', Cypress.config('baseUrl'))
    })
  })
})
