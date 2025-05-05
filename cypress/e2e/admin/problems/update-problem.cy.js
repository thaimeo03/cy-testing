describe('(Admin) Cập nhật bài tập', () => {
  const PROBLEM_ID = 'df8f3b5a-5d96-443b-80ff-c64a3bb1f5ff'

  beforeEach(() => {
    cy.loginAdmin()
    cy.visit(`/admin/problem/${PROBLEM_ID}/edit`)
  })

  context('Check UI', () => {
    it('UDBT02: [Tiêu đề bài tập] textbox - Kiểm tra placeholder', () => {
      cy.get('bidv-input[formcontrolname="title"] input').clear()

      cy.get('bidv-input[formcontrolname="title"]')
        .find('label')
        .should('contain.text', 'Nhập tiêu đề')
    })

    it('UDBT03: [Cấp độ] selectbox - Kiểm tra tiêu đề', () => {
      cy.get('label').contains('Cấp độ').should('be.visible')
    })

    it('UDBT05: [Điểm] textbox - Kiểm tra tiêu đề', () => {
      cy.get('label').contains('Điểm').should('be.visible')
    })

    it('UDBT07: [Mô tả bài tập] textbox - Kiểm tra tiêu đề', () => {
      cy.get('div.editor-section')
        .contains('Mô tả bài tập')
        .should('be.visible')
    })

    it('UDBT08: [Mô tả bài tập] textbox - Kiểm tra placeholder', () => {
      cy.get('app-editor').should('contain.text', 'Nội dung mô tả')
    })
  })

  context('Check validation', () => {
    it('UDBT09: Kiểm tra khi bỏ trống [Tiêu đề bài tập] textbox', () => {
      cy.get('bidv-input[formcontrolname="title"] input').clear()

      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="title"]').should(
        'contain.text',
        'Trường này không được để trống',
      )
    })

    it('UDBT10: Kiểm tra khi nhập khoảng trắng vào [Tiêu đề bài tập] textbox', () => {
      cy.get('bidv-input[formcontrolname="title"] input').clear()

      cy.get('bidv-input[formcontrolname="title"]').type(' ')
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="title"]').should(
        'contain.text',
        'Trường này không được để trống',
      )
    })

    it('UDBT11: Kiểm tra khi nhập 1 kí tự vào [Tiêu đề bài tập] textbox', () => {
      cy.get('bidv-input[formcontrolname="title"] input').clear()

      cy.get('bidv-input[formcontrolname="title"]').type('a')
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="title"]').should('be.empty')
    })

    it('UDBT12: Kiểm tra khi nhập 300 kí tự vào [Tiêu đề bài tập] textbox', () => {
      cy.get('bidv-input[formcontrolname="title"] input').clear()

      const chars = 'a'.repeat(300)

      cy.get('bidv-input[formcontrolname="title"]').type(chars)
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="title"]').should('be.empty')
    })

    it('UDBT13: Kiểm tra khi nhập 301 kí tự vào [Tiêu đề bài tập] textbox', () => {
      cy.get('bidv-input[formcontrolname="title"] input').clear()

      const chars = 'a'.repeat(301)

      cy.get('bidv-input[formcontrolname="title"]').type(chars)
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="title"]').should(
        'contain.text',
        'Độ dài tối đa — 300',
      )
    })

    it('UDBT14: Kiểm tra khi nhập kí tự đặc biệt vào [Tiêu đề bài tập] textbox', () => {
      cy.get('bidv-input[formcontrolname="title"] input').clear()

      cy.get('bidv-input[formcontrolname="title"]').type(
        '@#$%^&*()_+{}:"<>?[];\'\\,./`~',
      )
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="title"]').should('be.empty')
    })

    it('UDBT15: Kiểm tra khi nhập số vào [Tiêu đề bài tập] textbox', () => {
      cy.get('bidv-input[formcontrolname="title"] input').clear()

      cy.get('bidv-input[formcontrolname="title"]').type('1234567890')
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="title"]').should('be.empty')
    })

    it('UDBT17: Kiểm tra khi chọn Cấp độ = 0', () => {
      cy.get('bidv-select[formcontrolname="difficulty"]').click()
      cy.get('bidv-data-list').contains('Dễ').click()
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="difficulty"]').should('be.empty')
    })

    it('UDBT18: Kiểm tra khi chọn Cấp độ = 1', () => {
      cy.get('bidv-select[formcontrolname="difficulty"]').click()
      cy.get('bidv-data-list').contains('Trung bình').click()
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="difficulty"]').should('be.empty')
    })

    it('UDBT19: Kiểm tra khi chọn Cấp độ = 2', () => {
      cy.get('bidv-select[formcontrolname="difficulty"]').click()
      cy.get('bidv-data-list').contains('Khó').click()
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="difficulty"]').should('be.empty')
    })

    it('UDBT20: Kiểm tra khi bỏ trống [Điểm] textbox', () => {
      cy.get('bidv-input[formcontrolname="point"] input[type="number"]').clear()

      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="point"]').should('be.empty')
    })

    it('UDBT22: Kiểm tra khi điểm = 0', () => {
      cy.get('bidv-input[formcontrolname="point"] input[type="number"]')
        .clear()
        .type('0')
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="point"]').should('be.empty')
    })

    it('UDBT23: Kiểm tra khi điểm = số lớn', () => {
      cy.get('bidv-input[formcontrolname="point"] input[type="number"]')
        .clear()
        .type('55555555555555555555555')
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="point"]').should('be.empty')
    })

    it('UDBT24: Kiểm tra khi điểm = số âm', () => {
      cy.get('bidv-input[formcontrolname="point"] input[type="number"]')
        .clear()
        .type('-12')
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="point"]').should(
        'contain.text',
        'Giá trị tối thiểu — 0',
      )
    })

    it('UDBT26: Kiểm tra khi bỏ trống [Mô tả bài tập] textbox', () => {
      cy.get('app-editor').find('[contenteditable="true"]').clear()

      cy.get('button').contains('Cập nhật').click()
      cy.get('app-editor bidv-error').should('not.exist')
    })

    it('UDBT27: Kiểm tra khi nhập khoảng trắng vào [Mô tả bài tập] textbox', () => {
      cy.get('app-editor').find('[contenteditable="true"]').clear()

      cy.get('app-editor').find('[contenteditable="true"]').type(' ')
      cy.get('button').contains('Cập nhật').click()
      cy.get('app-editor bidv-error').should('not.exist')
    })

    it('UDBT28: Kiểm tra khi nhập kí tự đặc biệt vào [Mô tả bài tập] textbox', () => {
      cy.get('app-editor').find('[contenteditable="true"]').clear()

      cy.get('app-editor')
        .find('[contenteditable="true"]')
        .type('@#$%^&*()_+{}:"<>?[];\'\\,./`~')
      cy.get('button').contains('Cập nhật').click()
      cy.get('app-editor bidv-error').should('not.exist')
    })

    it('UDBT29: Kiểm tra khi nhập số vào [Mô tả bài tập] textbox', () => {
      cy.get('app-editor').find('[contenteditable="true"]').clear()

      cy.get('app-editor').find('[contenteditable="true"]').type('1234567890')
      cy.get('button').contains('Cập nhật').click()
      cy.get('app-editor bidv-error').should('not.exist')
    })
  })

  context('Check logic', () => {
    it('UDBT30: Xác minh có thể cập nhật bài tập thành công', () => {
      // Clear input fields
      cy.get('bidv-input[formcontrolname="title"] input').clear()
      cy.get('bidv-input[formcontrolname="point"] input[type="number"]').clear()
      cy.get('app-editor').find('[contenteditable="true"]').clear()

      cy.fixture('/problems/update-problem').then((problem) => {
        const validProblem = problem.validProblem

        // Title
        cy.get('bidv-input[formcontrolname="title"]').type(validProblem.title)

        // Difficulty
        cy.get('bidv-select[formcontrolname="difficulty"]').click()
        cy.get('bidv-data-list').contains(validProblem.difficulty).click()
        cy.get('button').contains('Cập nhật').click()

        // Point
        cy.get('bidv-input[formcontrolname="point"] input[type="number"]')
          .clear()
          .type(validProblem.point)

        // Description
        cy.get('app-editor')
          .find('[contenteditable="true"]')
          .type(validProblem.content)

        // Submit
        cy.get('button').contains('Cập nhật').click()

        cy.get('bidv-notification').should(
          'contain.text',
          'Cập nhật bài tập thành công',
        )

        cy.wait(1000)

        cy.url().should('include', `/admin/problem/${PROBLEM_ID}`)
      })
    })

    it('UDBT31: Xác minh có thể huỷ', () => {
      cy.get('form button').contains(' Hủy ').click()

      cy.wait(1000)

      cy.url().should('include', `/admin/problem/${PROBLEM_ID}`)
    })
  })
})
