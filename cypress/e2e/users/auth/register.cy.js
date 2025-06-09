// it('Kiểm tra fullname chứa ký tự không hợp lệ', () => {
//   cy.fixture('auth/register').then((data) => {
//     const invalidValues = data.fullname.invalidValue;

//     for (const name of invalidValues) {
//       cy.get('bidv-input[formcontrolname=fullname]').type(name);

//       cy.get('button').first().click();

//       cy.get('bidv-error[formcontrolname=fullname]')
//         .should('be.visible')
//         .should('contain', 'Fullname contains invalid characters'); // chỉnh thông báo phù hợp

//       cy.get('bidv-input[formcontrolname=fullname]').clear();
//     }
//   });
// });