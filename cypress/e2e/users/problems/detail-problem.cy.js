describe('(User) Chi tiết bài tập', () => {
  const COURSE_ID = '3130031e-67f1-4a53-b28f-50f39efceed5'
  const PROBLEM_ID = '21afaef7-4ec1-46a9-b5c4-b478cb1e01c0'

  beforeEach(() => {
    cy.loginAdmin()
    cy.visit(`/course/${COURSE_ID}/problem/${PROBLEM_ID}`)
  })

  context('Execute code', () => {
    context('Execute code thất bại', () => {
      context('JavaScript', () => {
        beforeEach(() => {
          // Select JavaScript language for all tests in this context
          cy.get('bidv-select[formcontrolname="language"]').click()
          cy.get('bidv-data-list')
            .should('be.visible')
            .contains('Javascript')
            .click()
        })

        context('Lỗi syntax', () => {
          it('CTBT01: Truyền lên code sai đóng mở ngoặc', () => {
            cy.fixture('submissions/submit').then((data) => {
              const templateCode = data.javascript.templateCode
              const errorCode = data.javascript.syntaxErrors.missingBracket

              const code = templateCode.replace('{{content}}', errorCode)
              cy.setCodeMirrorContent(code)

              cy.get('button').contains('Nộp bài').click()

              cy.get('bidv-dialog')
                .should('be.visible')
                .and('contain.text', 'Có lỗi xảy ra')
            })
          })

          it('CTBT02: Truyền lên code chứa cú pháp sai', () => {
            cy.fixture('submissions/submit').then((data) => {
              const templateCode = data.javascript.templateCode
              const errorCode = data.javascript.syntaxErrors.invalidSyntax

              const code = templateCode.replace('{{content}}', errorCode)
              cy.setCodeMirrorContent(code)

              cy.get('button').contains('Nộp bài').click()

              cy.get('bidv-dialog')
                .should('be.visible')
                .and('contain.text', 'Có lỗi xảy ra')
            })
          })

          it('CTBT03: Sử dụng toán tử không hợp lệ hoặc sai cách', () => {
            cy.fixture('submissions/submit').then((data) => {
              const templateCode = data.javascript.templateCode
              const errorCode =
                data.javascript.syntaxErrors.invalidOperatorUsage

              const code = templateCode.replace('{{content}}', errorCode)
              cy.setCodeMirrorContent(code)

              cy.get('button').contains('Nộp bài').click()

              cy.get('bidv-dialog')
                .should('be.visible')
                .and('contain.text', 'Có lỗi xảy ra')
            })
          })

          it('CTBT04: Lỗi ép kiểu dữ liệu không hợp lệ', () => {
            cy.fixture('submissions/submit').then((data) => {
              const templateCode = data.javascript.templateCode
              const errorCode = data.javascript.syntaxErrors.typeCastingError

              const code = templateCode.replace('{{content}}', errorCode)
              cy.setCodeMirrorContent(code)

              cy.get('button').contains('Nộp bài').click()

              cy.get('bidv-dialog')
                .should('be.visible')
                .and('contain.text', 'Có lỗi xảy ra')
            })
          })

          it('CTBT05: Sử dụng biến, hàm chưa được khai báo', () => {
            cy.fixture('submissions/submit').then((data) => {
              const templateCode = data.javascript.templateCode
              const errorCode = data.javascript.syntaxErrors.undeclaredVariable

              const code = templateCode.replace('{{content}}', errorCode)
              cy.setCodeMirrorContent(code)

              cy.get('button').contains('Nộp bài').click()

              cy.get('bidv-dialog')
                .should('be.visible')
                .and('contain.text', 'Có lỗi xảy ra')
            })
          })

          it('CTBT06: Khai báo tên biến trùng', () => {
            cy.fixture('submissions/submit').then((data) => {
              const templateCode = data.javascript.templateCode
              const errorCode =
                data.javascript.syntaxErrors.duplicateDeclaration

              const code = templateCode.replace('{{content}}', errorCode)
              cy.setCodeMirrorContent(code)

              cy.get('button').contains('Nộp bài').click()

              cy.get('bidv-dialog')
                .should('be.visible')
                .and('contain.text', 'Có lỗi xảy ra')
            })
          })

          it('CTBT07: Truyền lên sai template', () => {
            cy.fixture('submissions/submit').then((data) => {
              const wrongTemplate = data.javascript.syntaxErrors.wrongTemplate

              cy.setCodeMirrorContent(wrongTemplate)

              cy.get('button').contains('Nộp bài').click()

              cy.get('bidv-dialog')
                .should('be.visible')
                .and('contain.text', 'Có lỗi xảy ra')
            })
          })
        })

        context('Lỗi runtime', () => {
          it('CTBT08: Lỗi tràn bộ nhớ (Stack Overflow)', () => {
            cy.fixture('submissions/submit').then((data) => {
              const templateCode = data.javascript.templateCode
              const errorCode = data.javascript.runtimeErrors.stackOverflow

              const code = templateCode.replace('{{content}}', errorCode)
              cy.setCodeMirrorContent(code)

              cy.get('button').contains('Nộp bài').click()

              cy.get('bidv-dialog')
                .should('be.visible')
                .and('contain.text', 'Có lỗi xảy ra')
            })
          })

          it('CTBT09: Lỗi truy cập ngoài phạm vi dữ liệu (Out of Bounds)', () => {
            cy.fixture('submissions/submit').then((data) => {
              const templateCode = data.javascript.templateCode
              const errorCode = data.javascript.runtimeErrors.outOfBounds

              const code = templateCode.replace('{{content}}', errorCode)
              cy.setCodeMirrorContent(code)

              cy.get('button').contains('Nộp bài').click()

              cy.get('bidv-dialog')
                .should('be.visible')
                .and('contain.text', 'Có lỗi xảy ra')
            })
          })

          it('CTBT10: Lỗi tính toán (chia cho 0)', () => {
            cy.fixture('submissions/submit').then((data) => {
              const templateCode = data.javascript.templateCode
              const errorCode = data.javascript.runtimeErrors.divisionByZero

              const code = templateCode.replace('{{content}}', errorCode)
              cy.setCodeMirrorContent(code)

              cy.get('button').contains('Nộp bài').click()

              cy.get('bidv-dialog')
                .should('be.visible')
                .and('contain.text', 'Có lỗi xảy ra')
            })
          })

          it('CTBT11: Lỗi vòng lặp vô tận (Infinite Loop)', () => {
            cy.fixture('submissions/submit').then((data) => {
              const templateCode = data.javascript.templateCode
              const errorCode = data.javascript.runtimeErrors.infiniteLoop

              const code = templateCode.replace('{{content}}', errorCode)
              cy.setCodeMirrorContent(code)

              cy.get('button').contains('Nộp bài').click()

              cy.get('bidv-dialog')
                .should('be.visible')
                .and('contain.text', 'Có lỗi xảy ra')
              // Note: Infinite loops would typically result in timeout errors on the server
            })
          })

          // it('CTBT12: Dữ liệu đầu vào lớn (Large Input Data)', () => {
          //   cy.fixture('submissions/submit').then((data) => {
          //     const templateCode = data.javascript.templateCode
          //     const errorCode = data.javascript.runtimeErrors.largeInputData

          //     const code = templateCode.replace('{{content}}', errorCode)
          //     cy.setCodeMirrorContent(code)

          //     cy.get('button').contains('Nộp bài').click()

          //     cy.get('bidv-dialog')
          //       .should('be.visible')
          //       .and('contain', 'Có lỗi xảy ra')
          //     // Large input data may cause memory issues or timeout
          //   })
          // })
        })

        context('Code đúng syntax, sai logic', () => {
          it('CTBT13:Code đúng syntax, sai logic => fail bộ test', () => {
            cy.fixture('submissions/submit').then((data) => {
              const templateCode = data.javascript.templateCode
              const errorCode = data.javascript.logicError

              const code = templateCode.replace('{{content}}', errorCode)
              cy.setCodeMirrorContent(code)

              cy.get('button').contains('Nộp bài').click()

              cy.get('bidv-dialog')
                .should('be.visible')
                .and('contain.text', 'Có lỗi xảy ra')
                .and('contain.text', 'Test case failed')
            })
          })
        })
      })
    })

    context('Execute code thành công', () => {})
  })

  context('Lịch sử nộp bài', () => {})
})
