describe('(User) Chi tiết bài tập', () => {
  const COURSE_ID = '3130031e-67f1-4a53-b28f-50f39efceed5'
  const PROBLEM_ID = '21afaef7-4ec1-46a9-b5c4-b478cb1e01c0'

  beforeEach(() => {
    cy.loginAdmin()
    cy.visit(`/course/${COURSE_ID}/problem/${PROBLEM_ID}`)
  })

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
          const errorCode = data.javascript.syntaxErrors.invalidOperatorUsage

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
          const errorCode = data.javascript.syntaxErrors.duplicateDeclaration

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
          const errorCode = data.javascript.logicError

          cy.setCodeMirrorContent(errorCode)

          cy.get('button').contains('Nộp bài').click()

          cy.get('bidv-dialog')
            .should('be.visible')
            .and('contain.text', 'Có lỗi xảy ra')
            .and('contain.text', 'Test case failed')
        })
      })
    })

    context('Execute code thành công', () => {
      it('CTBT40: Xác minh có thể excecute code thành công', () => {
        cy.fixture('submissions/submit').then((data) => {
          const validCode = data.javascript.validCode

          cy.setCodeMirrorContent(validCode)

          cy.get('button').contains('Nộp bài').click()

          cy.get('bidv-dialog')
            .should('be.visible')
            .and('contain.text', 'Chúc mừng bạn đã hoàn thành bài toán')

          cy.get(
            'bidv-dialog button[ng-reflect-icon-left="bidvIconDismiss"]',
          ).click()
          cy.get('button').contains('Lịch sử nộp bài').click()
          cy.get('div[row-index="0"]')
            .should('contain.text', 'Javascript')
            .and('contain.text', 'Đã vượt qua')
        })
      })
    })
  })

  context('Python', () => {
    beforeEach(() => {
      // Select Python language for all tests in this context
      cy.get('bidv-select[formcontrolname="language"]').click()
      cy.get('bidv-data-list').should('be.visible').contains('Python').click()
    })

    context('Lỗi syntax', () => {
      it('CTBT14: Truyền lên code sai đóng mở ngoặc', () => {
        cy.fixture('submissions/submit').then((data) => {
          const templateCode = data.python.templateCode
          const errorCode = data.python.syntaxErrors.missingBracket

          const code = templateCode.replace('{{content}}', errorCode)
          cy.setCodeMirrorContent(code)

          cy.get('button').contains('Nộp bài').click()

          cy.get('bidv-dialog')
            .should('be.visible')
            .and('contain.text', 'Có lỗi xảy ra')
        })
      })

      it('CTBT15: Truyền lên code chứa cú pháp sai', () => {
        cy.fixture('submissions/submit').then((data) => {
          const templateCode = data.python.templateCode
          const errorCode = data.python.syntaxErrors.invalidSyntax

          const code = templateCode.replace('{{content}}', errorCode)
          cy.setCodeMirrorContent(code)

          cy.get('button').contains('Nộp bài').click()

          cy.get('bidv-dialog')
            .should('be.visible')
            .and('contain.text', 'Có lỗi xảy ra')
        })
      })

      it('CTBT16: Sử dụng toán tử không hợp lệ hoặc sai cách', () => {
        cy.fixture('submissions/submit').then((data) => {
          const templateCode = data.python.templateCode
          const errorCode = data.python.syntaxErrors.invalidOperatorUsage

          const code = templateCode.replace('{{content}}', errorCode)
          cy.setCodeMirrorContent(code)

          cy.get('button').contains('Nộp bài').click()

          cy.get('bidv-dialog')
            .should('be.visible')
            .and('contain.text', 'Có lỗi xảy ra')
        })
      })

      it('CTBT17: Lỗi ép kiểu dữ liệu không hợp lệ', () => {
        cy.fixture('submissions/submit').then((data) => {
          const templateCode = data.python.templateCode
          const errorCode = data.python.syntaxErrors.typeCastingError

          const code = templateCode.replace('{{content}}', errorCode)
          cy.setCodeMirrorContent(code)

          cy.get('button').contains('Nộp bài').click()

          cy.get('bidv-dialog')
            .should('be.visible')
            .and('contain.text', 'Có lỗi xảy ra')
        })
      })

      it('CTBT18: Sử dụng biến, hàm chưa được khai báo', () => {
        cy.fixture('submissions/submit').then((data) => {
          const templateCode = data.python.templateCode
          const errorCode = data.python.syntaxErrors.undeclaredVariable

          const code = templateCode.replace('{{content}}', errorCode)
          cy.setCodeMirrorContent(code)

          cy.get('button').contains('Nộp bài').click()

          cy.get('bidv-dialog')
            .should('be.visible')
            .and('contain.text', 'Có lỗi xảy ra')
        })
      })

      it('CTBT19: Khai báo tên biến trùng', () => {
        cy.fixture('submissions/submit').then((data) => {
          const templateCode = data.python.templateCode
          const errorCode = data.python.syntaxErrors.duplicateDeclaration

          const code = templateCode.replace('{{content}}', errorCode)
          cy.setCodeMirrorContent(code)

          cy.get('button').contains('Nộp bài').click()

          cy.get('bidv-dialog')
            .should('be.visible')
            .and('contain.text', 'Có lỗi xảy ra')
        })
      })

      it('CTBT20: Truyền lên sai template', () => {
        cy.fixture('submissions/submit').then((data) => {
          const wrongTemplate = data.python.syntaxErrors.wrongTemplate

          cy.setCodeMirrorContent(wrongTemplate)

          cy.get('button').contains('Nộp bài').click()

          cy.get('bidv-dialog')
            .should('be.visible')
            .and('contain.text', 'Có lỗi xảy ra')
        })
      })
    })

    context('Lỗi runtime', () => {
      it('CTBT21: Lỗi tràn bộ nhớ (Stack Overflow)', () => {
        cy.fixture('submissions/submit').then((data) => {
          const templateCode = data.python.templateCode
          const errorCode = data.python.runtimeErrors.stackOverflow

          const code = templateCode.replace('{{content}}', errorCode)
          cy.setCodeMirrorContent(code)

          cy.get('button').contains('Nộp bài').click()

          cy.get('bidv-dialog')
            .should('be.visible')
            .and('contain.text', 'Có lỗi xảy ra')
        })
      })

      it('CTBT22: Lỗi truy cập ngoài phạm vi dữ liệu (Out of Bounds)', () => {
        cy.fixture('submissions/submit').then((data) => {
          const templateCode = data.python.templateCode
          const errorCode = data.python.runtimeErrors.outOfBounds

          const code = templateCode.replace('{{content}}', errorCode)
          cy.setCodeMirrorContent(code)

          cy.get('button').contains('Nộp bài').click()

          cy.get('bidv-dialog')
            .should('be.visible')
            .and('contain.text', 'Có lỗi xảy ra')
        })
      })

      it('CTBT23: Lỗi tính toán (chia cho 0)', () => {
        cy.fixture('submissions/submit').then((data) => {
          const templateCode = data.python.templateCode
          const errorCode = data.python.runtimeErrors.divisionByZero

          const code = templateCode.replace('{{content}}', errorCode)
          cy.setCodeMirrorContent(code)

          cy.get('button').contains('Nộp bài').click()

          cy.get('bidv-dialog')
            .should('be.visible')
            .and('contain.text', 'Có lỗi xảy ra')
        })
      })

      it('CTBT24: Lỗi vòng lặp vô tận (Infinite Loop)', () => {
        cy.fixture('submissions/submit').then((data) => {
          const templateCode = data.python.templateCode
          const errorCode = data.python.runtimeErrors.infiniteLoop

          const code = templateCode.replace('{{content}}', errorCode)
          cy.setCodeMirrorContent(code)

          cy.get('button').contains('Nộp bài').click()

          cy.get('bidv-dialog')
            .should('be.visible')
            .and('contain.text', 'Có lỗi xảy ra')
          // Note: Infinite loops would typically result in timeout errors on the server
        })
      })

      // it('CTBT25: Dữ liệu đầu vào lớn (Large Input Data)', () => {
      //   cy.fixture('submissions/submit').then((data) => {
      //     const templateCode = data.python.templateCode
      //     const errorCode = data.python.runtimeErrors.largeInputData

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
      it('CTBT26: Code đúng syntax, sai logic => fail bộ test', () => {
        cy.fixture('submissions/submit').then((data) => {
          const errorCode = data.python.logicError

          cy.setCodeMirrorContent(errorCode)

          cy.get('button').contains('Nộp bài').click()

          cy.get('bidv-dialog')
            .should('be.visible')
            .and('contain.text', 'Có lỗi xảy ra')
            .and('contain.text', 'Test case failed')
        })
      })
    })

    context('Execute code thành công', () => {
      it('CTBT41: Xác minh có thể excecute code thành công', () => {
        cy.fixture('submissions/submit').then((data) => {
          const validCode = data.python.validCode

          cy.setCodeMirrorContent(validCode)

          cy.get('button').contains('Nộp bài').click()

          cy.get('bidv-dialog')
            .should('be.visible')
            .and('contain.text', 'Chúc mừng bạn đã hoàn thành bài toán')

          cy.get(
            'bidv-dialog button[ng-reflect-icon-left="bidvIconDismiss"]',
          ).click()
          cy.get('button').contains('Lịch sử nộp bài').click()
          cy.get('div[row-index="0"]')
            .should('contain.text', 'Python')
            .and('contain.text', 'Đã vượt qua')
        })
      })
    })
  })

  context('Java', () => {
    beforeEach(() => {
      // Select Java language for all tests in this context
      cy.get('bidv-select[formcontrolname="language"]').click()
      cy.get('bidv-data-list')
        .should('be.visible')
        .find('span')
        .filter((index, element) => {
          return element.textContent.trim() === 'Java' // Exact match
        })
        .click()
    })

    context('Lỗi syntax', () => {
      it('CTBT27: Truyền lên code sai đóng mở ngoặc', () => {
        cy.fixture('submissions/submit').then((data) => {
          const templateCode = data.java.templateCode
          const errorCode = data.java.syntaxErrors.missingBracket

          const code = templateCode.replace('{{content}}', errorCode)
          cy.setCodeMirrorContent(code)

          cy.get('button').contains('Nộp bài').click()

          cy.get('bidv-dialog')
            .should('be.visible')
            .and('contain.text', 'Có lỗi xảy ra')
        })
      })

      it('CTBT28: Truyền lên code chứa cú pháp sai', () => {
        cy.fixture('submissions/submit').then((data) => {
          const templateCode = data.java.templateCode
          const errorCode = data.java.syntaxErrors.invalidSyntax

          const code = templateCode.replace('{{content}}', errorCode)
          cy.setCodeMirrorContent(code)

          cy.get('button').contains('Nộp bài').click()

          cy.get('bidv-dialog')
            .should('be.visible')
            .and('contain.text', 'Có lỗi xảy ra')
        })
      })

      it('CTBT29: Sử dụng toán tử không hợp lệ hoặc sai cách', () => {
        cy.fixture('submissions/submit').then((data) => {
          const templateCode = data.java.templateCode
          const errorCode = data.java.syntaxErrors.invalidOperatorUsage

          const code = templateCode.replace('{{content}}', errorCode)
          cy.setCodeMirrorContent(code)

          cy.get('button').contains('Nộp bài').click()

          cy.get('bidv-dialog')
            .should('be.visible')
            .and('contain.text', 'Có lỗi xảy ra')
        })
      })

      it('CTBT30: Lỗi ép kiểu dữ liệu không hợp lệ', () => {
        cy.fixture('submissions/submit').then((data) => {
          const templateCode = data.java.templateCode
          const errorCode = data.java.syntaxErrors.typeCastingError

          const code = templateCode.replace('{{content}}', errorCode)
          cy.setCodeMirrorContent(code)

          cy.get('button').contains('Nộp bài').click()

          cy.get('bidv-dialog')
            .should('be.visible')
            .and('contain.text', 'Có lỗi xảy ra')
        })
      })

      it('CTBT31: Sử dụng biến, hàm chưa được khai báo', () => {
        cy.fixture('submissions/submit').then((data) => {
          const templateCode = data.java.templateCode
          const errorCode = data.java.syntaxErrors.undeclaredVariable

          const code = templateCode.replace('{{content}}', errorCode)
          cy.setCodeMirrorContent(code)

          cy.get('button').contains('Nộp bài').click()

          cy.get('bidv-dialog')
            .should('be.visible')
            .and('contain.text', 'Có lỗi xảy ra')
        })
      })

      it('CTBT32: Khai báo tên biến trùng', () => {
        cy.fixture('submissions/submit').then((data) => {
          const templateCode = data.java.templateCode
          const errorCode = data.java.syntaxErrors.duplicateDeclaration

          const code = templateCode.replace('{{content}}', errorCode)
          cy.setCodeMirrorContent(code)

          cy.get('button').contains('Nộp bài').click()

          cy.get('bidv-dialog')
            .should('be.visible')
            .and('contain.text', 'Có lỗi xảy ra')
        })
      })

      it('CTBT33: Truyền lên sai template', () => {
        cy.fixture('submissions/submit').then((data) => {
          const wrongTemplate = data.java.syntaxErrors.wrongTemplate

          cy.setCodeMirrorContent(wrongTemplate)

          cy.get('button').contains('Nộp bài').click()

          cy.get('bidv-dialog')
            .should('be.visible')
            .and('contain.text', 'Có lỗi xảy ra')
        })
      })
    })

    context('Lỗi runtime', () => {
      it('CTBT34: Lỗi tràn bộ nhớ (Stack Overflow)', () => {
        cy.fixture('submissions/submit').then((data) => {
          const templateCode = data.java.templateCode
          const errorCode = data.java.runtimeErrors.stackOverflow

          const code = templateCode.replace('{{content}}', errorCode)
          cy.setCodeMirrorContent(code)

          cy.get('button').contains('Nộp bài').click()

          cy.get('bidv-dialog')
            .should('be.visible')
            .and('contain.text', 'Có lỗi xảy ra')
        })
      })

      it('CTBT35: Lỗi truy cập ngoài phạm vi dữ liệu (Out of Bounds)', () => {
        cy.fixture('submissions/submit').then((data) => {
          const templateCode = data.java.templateCode
          const errorCode = data.java.runtimeErrors.outOfBounds

          const code = templateCode.replace('{{content}}', errorCode)
          cy.setCodeMirrorContent(code)

          cy.get('button').contains('Nộp bài').click()

          cy.get('bidv-dialog')
            .should('be.visible')
            .and('contain.text', 'Có lỗi xảy ra')
        })
      })

      it('CTBT36: Lỗi tính toán (chia cho 0)', () => {
        cy.fixture('submissions/submit').then((data) => {
          const templateCode = data.java.templateCode
          const errorCode = data.java.runtimeErrors.divisionByZero

          const code = templateCode.replace('{{content}}', errorCode)
          cy.setCodeMirrorContent(code)

          cy.get('button').contains('Nộp bài').click()

          cy.get('bidv-dialog')
            .should('be.visible')
            .and('contain.text', 'Có lỗi xảy ra')
        })
      })

      it('CTBT37: Lỗi vòng lặp vô tận (Infinite Loop)', () => {
        cy.fixture('submissions/submit').then((data) => {
          const templateCode = data.java.templateCode
          const errorCode = data.java.runtimeErrors.infiniteLoop

          const code = templateCode.replace('{{content}}', errorCode)
          cy.setCodeMirrorContent(code)

          cy.get('button').contains('Nộp bài').click()

          cy.get('bidv-dialog')
            .should('be.visible')
            .and('contain.text', 'Có lỗi xảy ra')
          // Note: Infinite loops would typically result in timeout errors on the server
        })
      })

      // it('CTBT38: Dữ liệu đầu vào lớn (Large Input Data)', () => {
      //   cy.fixture('submissions/submit').then((data) => {
      //     const templateCode = data.java.templateCode
      //     const errorCode = data.java.runtimeErrors.largeInputData

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
      it('CTBT39: Code đúng syntax, sai logic => fail bộ test', () => {
        cy.fixture('submissions/submit').then((data) => {
          const errorCode = data.java.logicError

          cy.setCodeMirrorContent(errorCode)

          cy.get('button').contains('Nộp bài').click()

          cy.get('bidv-dialog')
            .should('be.visible')
            .and('contain.text', 'Có lỗi xảy ra')
            .and('contain.text', 'Test case failed')
        })
      })
    })

    context('Execute code thành công', () => {
      it('CTBT42: Xác minh có thể excecute code thành công', () => {
        cy.fixture('submissions/submit').then((data) => {
          const validCode = data.java.validCode

          cy.setCodeMirrorContent(validCode)

          cy.get('button').contains('Nộp bài').click()

          cy.get('bidv-dialog')
            .should('be.visible')
            .and('contain.text', 'Chúc mừng bạn đã hoàn thành bài toán')

          cy.get(
            'bidv-dialog button[ng-reflect-icon-left="bidvIconDismiss"]',
          ).click()
          cy.get('button').contains('Lịch sử nộp bài').click()
          cy.get('div[row-index="0"]')
            .should('contain.text', 'Java')
            .and('contain.text', 'Đã vượt qua')
        })
      })
    })
  })
})
