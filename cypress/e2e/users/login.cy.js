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
    cy.fixture('users/login').then((data) => {
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
})
