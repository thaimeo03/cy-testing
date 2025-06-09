describe('(Admin) Chi tiết bài tập', () => {
  const PROBLEM_ID = 'df8f3b5a-5d96-443b-80ff-c64a3bb1f5ff'

  beforeEach(() => {
    cy.loginAdmin()
    cy.visit(`/admin/problem/${PROBLEM_ID}`)
  })

  context('Quản lý bài tập', () => {
    it('CTBG12: Kiểm tra hiển thị', () => {
      cy.get('button').contains('Chỉnh sửa bài tập').should('be.visible')
    })

    it('CTBG13: Kiểm tra khi click', () => {
      cy.get('button').contains('Chỉnh sửa bài tập').click()
      cy.url().should('include', `/admin/problem/${PROBLEM_ID}/edit`)
    })

    it('CTBG14: Kiểm tra hiển thị', () => {
      cy.get('button').contains('Kích hoạt bài tập').should('be.visible')
    })

    it('CTBG15: Kiểm tra khi click', () => {
      // cy.get('bidv-badge').contains('Chưa kích hoạt').should('be.visible')
      cy.get('bidv-badge').should('contain.text','Chưa kích hoạt')
      cy.get('button').contains('Kích hoạt bài tập').click()
      cy.get('button').contains('Xác nhận').click()
      cy.get('bidv-badge').contains('Đã kích hoạt').should('be.visible')
    })

    it('CTBG18: Kiểm tra hiển thị', () => {
      cy.get('button').contains('Xóa bài tập').should('be.visible')
    })

    it('CTBG20: Kiểm tra hiển thị', () => {
      cy.get('button').contains('Hủy kích hoạt').should('be.visible')
    })

    it('CTBG21: Kiểm tra khi click', () => {
      cy.get('bidv-badge').contains('Đã kích hoạt').should('be.visible')
      cy.get('button').contains('Hủy kích hoạt').click()
      cy.get('button').contains('Xác nhận').click()
      cy.get('bidv-badge').contains('Chưa kích hoạt').should('be.visible')
    })
  })

  context('Quản lý template', () => {
    beforeEach(() => {
      cy.get('button').contains('Quản lý template').click()
    })

    context('Check UI- Update template', () => {
      // it('CTBG42: Kiểm tra khi chọn ngôn ngữ = java', () => {
      //   cy.get('bidv-select[formcontrolname="language"]').click()
      //   cy.get('bidv-data-list')
      //     .should('be.visible')
      //     .find('span')
      //     .filter((index, element) => {
      //       return element.textContent.trim() === 'Java' // Exact match
      //     })
      // })
      it('CTBG42: Kiểm tra khi chọn ngôn ngữ = Java', () => {
        cy.get('bidv-select[formcontrolname="language"]').click()
        cy.get('bidv-data-list')
        .find('bidv-select-option')
        .filter((index, element) => {
        return element.textContent.trim() === 'Java'
        })
        .click()
        cy.get('bidv-select[formcontrolname="language"]')
        .find('bidv-primitive-textfield input[readonly]')
        .should('have.value', 'Java')
      })
      it('CTB43: Kiểm tra khi chọn ngôn ngữ = Javascript', () => {
        cy.get('bidv-select[formcontrolname="language"]').click()
        cy.get('bidv-data-list')
        .find('bidv-select-option')
        .filter((index, element) => {
        return element.textContent.trim() === 'Javascript'
        })
        .click()
        cy.get('bidv-select[formcontrolname="language"]')
        .find('bidv-primitive-textfield input[readonly]')
        .should('have.value', 'Javascript')
      })
      it('CTB44: Kiểm tra khi chọn ngôn ngữ = Python', () => {
        cy.get('bidv-select[formcontrolname="language"]').click()
        cy.get('bidv-data-list')
        .find('bidv-select-option')
        .filter((index, element) => {
        return element.textContent.trim() === 'Python'
        })
        .click()
        cy.get('bidv-select[formcontrolname="language"]')
        .find('bidv-primitive-textfield input[readonly]')
        .should('have.value', 'Python')
      })
      it('CTBG45: Kiểm tra khi bỏ trống code editor', () => {
        cy.get('button').contains('Sửa mẫu code').click()
        cy.setCodeMirrorContent('')

        cy.get('button').contains('Lưu mẫu code').click()

        cy.get('bidv-error').should(
          'contain.text',
          'Vui lòng nhập đầy đủ thông tin',
        )
      })

      it('CTBG46: Kiểm tra khi nhập khoảng trắng vào code editor', () => {
        cy.get('button').contains('Sửa mẫu code').click()
        cy.setCodeMirrorContent(' ')

        cy.get('button').contains('Lưu mẫu code').click()

        cy.get('bidv-error').should(
          'contain.text',
          'Vui lòng nhập đầy đủ thông tin',
        )
      })
    })
    context('Check function - Update template', () => {
      it('CTBG50: Cập nhật template khi chọn ngôn ngữ = java', () => {
        cy.get('button').contains('Sửa mẫu code').click()
        cy.get('bidv-select[formcontrolname="language"]').click()
        cy.get('bidv-data-list')
        .find('bidv-select-option')
        .filter((index, element) => {
        return element.textContent.trim() === 'Java'
        })
        .click()
        
        cy.fixture('submissions/submit').then((data) => {
          const templateCode = data.java.templateCode
          const code = templateCode.replace('{{content}}', '')

          cy.setCodeMirrorContent(code)

          cy.get('button').contains('Lưu mẫu code').click()
          cy.get('bidv-dialogs').find('button').contains('Xác nhận').click()

          cy.get('bidv-notification').should(
            'contain.text',
            'Cập nhật mẫu code thành công',
          )
        })
      })

      it('CTBG51: Cập nhật template khi chọn ngôn ngữ = javascript', () => {
        cy.get('button').contains('Sửa mẫu code').click()
        cy.get('bidv-select[formcontrolname="language"]').click()
        cy.get('bidv-data-list')
          .should('be.visible')
          .contains('Javascript')
          .click()
        cy.wait(1000)

        cy.fixture('submissions/submit').then((data) => {
          const templateCode = data.javascript.templateCode
          const code = templateCode.replace('{{content}}', '')

          cy.setCodeMirrorContent(code)

          cy.get('button').contains('Lưu mẫu code').click()
          cy.get('bidv-dialogs').find('button').contains('Xác nhận').click()

          cy.get('bidv-notification').should(
            'contain.text',
            'Cập nhật mẫu code thành công',
          )
        })
      })

      it('CTBG52: Cập nhật template khi chọn ngôn ngữ = python', () => {
        cy.get('button').contains('Sửa mẫu code').click()
        cy.get('bidv-select[formcontrolname="language"]').click()
        cy.get('bidv-data-list').should('be.visible').contains('Python').click()
        cy.wait(1000)

        cy.fixture('submissions/submit').then((data) => {
          const templateCode = data.python.templateCode
          const code = templateCode.replace('{{content}}', '')

          cy.setCodeMirrorContent(code)

          cy.get('button').contains('Lưu mẫu code').click()
          cy.get('bidv-dialogs').find('button').contains('Xác nhận').click()

          cy.get('bidv-notification').should(
            'contain.text',
            'Cập nhật mẫu code thành công',
          )
        })
      })
    })
  })

  context('Quản lý bộ test', () => {
    beforeEach(() => {
      cy.get('button').contains('Quản lý bộ test').click()
      cy.get('button').contains('Sửa bộ kiểm thử').click()
    })

    context('Check UI - Cập nhật testsuit', () => {
      it('CTBG71: Kiểm tra khi để trống [Tên hàm] textbox', () => {
        cy.get('bidv-input[formcontrolname="functionName"] input[type=text]').clear()
        cy.get('button').contains('Cập nhật').click()
        cy.get('bidv-error[formcontrolname="functionName"]').should('contain.text','Trường này là bắt buộc')
      })

      it('CTBG72: Kiểm tra khi nhập khoảng trắng vào [Tên hàm] texbox', () => {
        cy.get('bidv-input[formcontrolname="functionName"] input[type=text]').clear().type(' ')
        cy.get('button').contains('Cập nhật').click()
        cy.get('bidv-error[formcontrolname="functionName"]').should('contain.text','Trường này là bắt buộc')
      })

      it('CTBG73: Kiểm tra khi nhập kí tự đặc biệt vào [Tên hàm] textbox', () => {
        cy.get('bidv-input[formcontrolname="functionName"] input[type=text]').clear().type('@#$%^&')
        cy.get('button').contains('Cập nhật').click()
        cy.get('bidv-notification').should('contain.text','Cập nhật bộ kiểm thử thành công')
      })

      it('CTBG74: Kiểm tra khi nhập số vào [Tên hàm] textbox', () => {
        cy.get('bidv-input[formcontrolname="functionName"] input[type=text]').clear().type('12345678')
        cy.get('button').contains('Cập nhật').click()
        cy.get('bidv-notification').should('contain.text','Cập nhật bộ kiểm thử thành công')
      })

      it('CTBG75: Kiểm tra khi nhập 99 kí tự vào [Tên hàm] textbox', () => {
        const input = 'a'.repeat(99)
        cy.get('bidv-input[formcontrolname="functionName"] input[type=text]').clear().type(input)
        cy.get('button').contains('Cập nhật').click()
        cy.get('bidv-notification').should('contain.text','Cập nhật bộ kiểm thử thành công')
      })

      it('CTBG76: Kiểm tra khi nhập 100 kí tự  vào [Tên hàm] textbox', () => {
        const input = 'a'.repeat(100)
        cy.get('bidv-input[formcontrolname="functionName"] input[type=text]').clear().type(input)
        cy.get('button').contains('Cập nhật').click()
        cy.get('bidv-notification').should('contain.text','Cập nhật bộ kiểm thử thành công')
      })

      it('CTBG77: Kiểm tra khi nhập 101 kí tự vào [Tên hàm] textbox', () => {
        const input = 'a'.repeat(101)
        cy.get('bidv-input[formcontrolname="functionName"] input[type=text]').clear().type(input)
        cy.get('button').contains('Cập nhật').click()
        cy.get('bidv-error[formcontrolname ="functionName"').should('contain.text','Độ dài tối đa — 100')
      })
      
      it('CTBG78: Kiểm tra khi để trống  [Kiểu dữ liệu đầu vào] selectbox', () => {
        cy.get('[data-index]').then(($rows) => {
        const currentCount = $rows.length
        cy.get('button').contains('Thêm kiểu dữ liệu').click()
        cy.get('button').contains('Cập nhật').click()
        cy.get(`[data-index="${currentCount}"]`)
          .find('bidv-error')
          .should('contain.text', 'Trường này là bắt buộc')
      })
    })
   
      it('CTBG82: Kiểm tra khi click  [Thêm kiểu dữ liệu] button', () => {
        cy.get('[data-index]').then(($initialRows) => {
        const initialCount = $initialRows.length
        cy.contains('Thêm kiểu dữ liệu').click()
        cy.get('[data-index]').should('have.length', initialCount + 1)
      })
    })
      it('CTBG83: Kiểm tra khi để trống [Dữ liệu đầu vào (mỗi dòng ứng với một kiểu dữ liệu] textbox ', () => {
          cy.get('bidv-textarea[formcontrolname="expectedOutputSuit"] textarea').clear()
          cy.get('button').contains('Cập nhật').click()
          cy.get('bidv-error[formcontrolname="expectedOutputSuit"]').should('contain.text','Trường này là bắt buộc')
      })
      it('CTBG84: Kiểm tra khi nhập khoảng trắng vào [Dữ liệu đầu vào (mỗi dòng ứng với một kiểu dữ liệu] textbox ', () => {
          cy.get('bidv-textarea[formcontrolname="expectedOutputSuit"] textarea').clear().type(' ')
          cy.get('button').contains('Cập nhật').click()
          cy.get('bidv-notification').should('contain.text','Cập nhật bộ kiểm thử thành công')
      })
    })   
  })
})

