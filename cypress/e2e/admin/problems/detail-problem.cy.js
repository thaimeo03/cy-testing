describe('(Admin) Chi tiết bài tập', () => {
  const PROBLEM_ID = 'df8f3b5a-5d96-443b-80ff-c64a3bb1f5ff'

  beforeEach(() => {
    cy.loginAdmin()
    cy.visit(`/admin/problem/${PROBLEM_ID}`)
  })

  // context('Quản lý bài tập', () => {
  //   it('CTBG12: Kiểm tra hiển thị', () => {
  //     cy.get('button').contains('Chỉnh sửa bài tập').should('be.visible')
  //   })

  //   it('CTBG13: Kiểm tra khi click', () => {
  //     cy.get('button').contains('Chỉnh sửa bài tập').click()
  //     cy.url().should('include', `/admin/problem/${PROBLEM_ID}/edit`)
  //   })

  //   it('CTBG14: Kiểm tra hiển thị', () => {
  //     cy.get('button').contains('Kích hoạt bài tập').should('be.visible')
  //   })

  //   it('CTBG15: Kiểm tra khi click', () => {
  //     cy.get('bidv-badge').contains('Chưa kích hoạt').should('be.visible')
  //     cy.get('button').contains('Kích hoạt bài tập').click()
  //     cy.get('button').contains('Xác nhận').click()
  //     cy.get('bidv-badge').contains('Đã kích hoạt').should('be.visible')
  //   })

  //   it('CTBG18: Kiểm tra hiển thị', () => {
  //     cy.get('button').contains('Xóa bài tập').should('be.visible')
  //   })

  //   it('CTBG20: Kiểm tra hiển thị', () => {
  //     cy.get('button').contains('Hủy kích hoạt').should('be.visible')
  //   })

  //   it('CTBG21: Kiểm tra khi click', () => {
  //     cy.get('bidv-badge').contains('Đã kích hoạt').should('be.visible')
  //     cy.get('button').contains('Hủy kích hoạt').click()
  //     cy.get('button').contains('Xác nhận').click()
  //     cy.get('bidv-badge').contains('Chưa kích hoạt').should('be.visible')
  //   })
  // })

  // context('Quản lý template', () => {
  //   beforeEach(() => {
  //     cy.get('button').contains('Quản lý template').click()
  //   })

  //   context('Check UI', () => {
  //     it('CTBG26: Kiểm tra khi chuyển sang chế độ tối ', () => {
  //       cy.get(
  //         'input[formcontrolname="darkMode"][data-appearance="default"]',
  //       ).click()

  //       cy.get('.cm-editor').should(
  //         'have.css',
  //         'background-color',
  //         'rgb(40, 44, 52)',
  //       )
  //     })

  //     it('CTBG27: Kiểm tra khi chuyển sang chế độ sáng', () => {
  //       cy.get('.cm-editor').should(
  //         'have.css',
  //         'background-color',
  //         'rgb(245, 248, 250)',
  //       )
  //     })

  //     it('CTBG28: Kiểm tra khi chọn ngôn ngữ = java', () => {
  //       cy.get('bidv-select[formcontrolname="language"]').click()
  //       cy.get('bidv-data-list')
  //         .should('be.visible')
  //         .find('span')
  //         .filter((index, element) => {
  //           return element.textContent.trim() === 'Java' // Exact match
  //         })
  //     })

  //     it('CTBG29: Kiểm tra khi chọn ngôn ngữ = javascript', () => {
  //       cy.get('bidv-select[formcontrolname="language"]').click()
  //       cy.get('bidv-data-list').should('be.visible').contains('Javascript')
  //     })

  //     it('CTBG30: Kiểm tra khi chọn ngôn ngữ = python', () => {
  //       cy.get('bidv-select[formcontrolname="language"]').click()
  //       cy.get('bidv-data-list').should('be.visible').contains('Python')
  //     })

  //     it('CTBG31: Kiểm tra khi bỏ trống code editor', () => {
  //       cy.setCodeMirrorContent('')

  //       cy.get('button').contains('Tạo mẫu code').click()

  //       cy.get('bidv-error').should(
  //         'contain.text',
  //         'Vui lòng nhập đầy đủ thông tin',
  //       )
  //     })

  //     it('CTBG32: Kiểm tra khi nhập khoảng trắng vào code editor', () => {
  //       cy.setCodeMirrorContent(' ')

  //       cy.get('button').contains('Tạo mẫu code').click()

  //       cy.get('bidv-error').should(
  //         'contain.text',
  //         'Vui lòng nhập đầy đủ thông tin',
  //       )
  //     })
  //   })

  //   context('Check function', () => {
  //     it('CTBG36: Tạo template khi chọn ngôn ngữ = java', () => {
  //       cy.get('bidv-select[formcontrolname="language"]').click()
  //       cy.get('bidv-data-list')
  //         .should('be.visible')
  //         .find('span')
  //         .filter((index, element) => {
  //           return element.textContent.trim() === 'Java' // Exact match
  //         })
  //         .click()

  //       cy.fixture('submissions/submit').then((data) => {
  //         const templateCode = data.java.templateCode
  //         const code = templateCode.replace('{{content}}', '')

  //         cy.setCodeMirrorContent(code)

  //         cy.get('button').contains('Tạo mẫu code').click()
  //         cy.get('bidv-dialogs').find('button').contains('Xác nhận').click()

  //         cy.get('bidv-notification').should(
  //           'contain.text',
  //           'Tạo mẫu code thành công',
  //         )
  //       })
  //     })

  //     it('CTBG37: Tạo template khi chọn ngôn ngữ = javascript', () => {
  //       cy.get('bidv-select[formcontrolname="language"]').click()
  //       cy.get('bidv-data-list')
  //         .should('be.visible')
  //         .contains('Javascript')
  //         .click()
  //       cy.wait(1000)

  //       cy.fixture('submissions/submit').then((data) => {
  //         const templateCode = data.javascript.templateCode
  //         const code = templateCode.replace('{{content}}', '')

  //         cy.setCodeMirrorContent(code)

  //         cy.get('button').contains('Tạo mẫu code').click()
  //         cy.get('bidv-dialogs').find('button').contains('Xác nhận').click()

  //         cy.get('bidv-notification').should(
  //           'contain.text',
  //           'Tạo mẫu code thành công',
  //         )
  //       })
  //     })

  //     it('CTBG38: Tạo template khi chọn ngôn ngữ = python', () => {
  //       cy.get('bidv-select[formcontrolname="language"]').click()
  //       cy.get('bidv-data-list').should('be.visible').contains('Python').click()
  //       cy.wait(1000)

  //       cy.fixture('submissions/submit').then((data) => {
  //         const templateCode = data.python.templateCode
  //         const code = templateCode.replace('{{content}}', '')

  //         cy.setCodeMirrorContent(code)

  //         cy.get('button').contains('Tạo mẫu code').click()
  //         cy.get('bidv-dialogs').find('button').contains('Xác nhận').click()

  //         cy.get('bidv-notification').should(
  //           'contain.text',
  //           'Tạo mẫu code thành công',
  //         )
  //       })
  //     })

  //     it('CTBG39: Kiểm tra khi tạo template của ngôn ngữ đã tạo trước đó', () => {
  //       cy.setCodeMirrorContent(' ')

  //       cy.get('button').contains('Tạo mẫu code').click()
  //       cy.get('bidv-dialogs').find('button').contains('Xác nhận').click()

  //       cy.get('bidv-notification').should(
  //         'contain.text',
  //         'Language already exists with this problem',
  //       )
  //     })

  //     it('CTBG40: Xác minh có thể cập nhật thành công', () => {
  //       cy.get('button').contains('Sửa mẫu code').click()

  //       cy.get('bidv-select[formcontrolname="language"]').click()
  //       cy.get('bidv-data-list')
  //         .should('be.visible')
  //         .contains('Javascript')
  //         .click()
  //       cy.wait(1000)

  //       cy.fixture('submissions/submit').then((data) => {
  //         const templateCode = data.javascript.templateCode
  //         const code = templateCode.replace('{{content}}', '')

  //         cy.setCodeMirrorContent(code)

  //         cy.get('button').contains('Lưu mẫu code').click()
  //         cy.get('bidv-dialogs').find('button').contains('Xác nhận').click()

  //         cy.get('bidv-notification').should(
  //           'contain.text',
  //           'Cập nhật mẫu code thành công',
  //         )
  //       })
  //     })

  //     it('CTBG41: Xác minh có thể huỷ việc cập nhật thông tin template', () => {
  //       cy.get('button').contains('Sửa mẫu code').click()
  //       cy.get('button').contains('Hủy').click()

  //       cy.get('button').contains('Sửa mẫu code').should('be.visible')
  //     })
  //   })
  // })

  context('Quản lý bộ test', () => {
    beforeEach(() => {
      cy.get('button').contains('Quản lý bộ test').click()
    })

    context('Check UI', () => {
      it('CTBG43: Kiểm tra khi để trống [Tên hàm] textbox', () => {})

      it('CTBG44: Kiểm tra khi nhập khoảng trắng vào [Tên hàm] texbox', () => {})

      it('CTBG45: Kiểm tra khi nhập kí tự đặc biệt vào [Tên hàm] textbox', () => {})

      it('CTBG46: Kiểm tra khi nhập số vào [Tên hàm] textbox', () => {})

      it('CTBG47: Kiểm tra khi nhập 99 kí tự vào [Tên hàm] textbox', () => {})

      it('CTBG48: Kiểm tra khi nhập 100 kí tự  vào [Tên hàm] textbox', () => {})

      it('CTBG49: Kiểm tra khi nhập 101 kí tự vào [Tên hàm] textbox', () => {})

      it('CTBG50: Kiểm tra khi để trống  [Kiểu dữ liệu đầu vào] selectbox', () => {})

      it('CTBG55: Kiểm tra khi click  [Thêm kiểu dữ liệu] button', () => {})
    })

    // context('Check function', () => {})
  })
})
