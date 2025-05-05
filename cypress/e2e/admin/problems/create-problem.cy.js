describe('(Admin) Tạo mới bài tập', () => {
  const COURSE_ID = '3130031e-67f1-4a53-b28f-50f39efceed5'

  beforeEach(() => {
    cy.loginAdmin()
    cy.visit(`/admin/problem/create?courseId=${COURSE_ID}`)
  })

  context('Check UI', () => {
    it('CBT01: [Tiêu đề bài tập] textbox - Kiểm tra tiêu đề', () => {
      cy.get('label').contains('Tiêu đề bài tập').should('be.visible')
    })

    it('CBT02: [Tiêu đề bài tập] textbox - Kiểm tra placeholder', () => {
      cy.get('bidv-input[formcontrolname="title"]')
        .find('label')
        .should('contain.text', 'Nhập tiêu đề')
    })

    it('CBT03: [Cấp độ] selectbox - Kiểm tra tiêu đề', () => {
      cy.get('label').contains('Cấp độ').should('be.visible')
    })

    it('CBT04: [Cấp độ] selectbox - Kiểm tra placeholder', () => {
      cy.get('bidv-select[formcontrolname="difficulty"]')
        .find('label')
        .should('contain.text', 'Chọn độ khó')
    })

    it('CBT05: [Điểm] textbox - Kiểm tra tiêu đề', () => {
      cy.get('label').contains('Điểm').should('be.visible')
    })

    it('CBT06: [Điểm] textbox - Kiểm tra placeholder', () => {
      cy.get('bidv-input[formcontrolname="point"]')
        .find('input')
        .should('have.value', '0')
    })

    it('CBT07: [Mô tả bài tập] textbox - Kiểm tra tiêu đề', () => {
      cy.get('div.editor-section')
        .contains('Mô tả bài tập')
        .should('be.visible')
    })

    it('CBT08: [Mô tả bài tập] textbox - Kiểm tra placeholder', () => {
      cy.get('app-editor').should('contain.text', 'Nội dung mô tả')
    })
  })

  context('Check validation', () => {
    it('CBT09: Kiểm tra khi bỏ trống [Tiêu đề bài tập] textbox', () => {
      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="title"]').should(
        'contain.text',
        'Trường này không được để trống',
      )
    })

    it('CBT10: Kiểm tra khi nhập khoảng trắng vào [Tiêu đề bài tập] textbox', () => {
      cy.get('bidv-input[formcontrolname="title"]').type(' ')
      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="title"]').should(
        'contain.text',
        'Trường này không được để trống',
      )
    })

    it('CBT11: Kiểm tra khi nhập 1 kí tự vào [Tiêu đề bài tập] textbox', () => {
      cy.get('bidv-input[formcontrolname="title"]').type('a')
      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="title"]').should('be.empty')
    })

    it('CBT12: Kiểm tra khi nhập 300 kí tự vào [Tiêu đề bài tập] textbox', () => {
      const chars = 'a'.repeat(300)

      cy.get('bidv-input[formcontrolname="title"]').type(chars)
      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="title"]').should('be.empty')
    })

    it('CBT13: Kiểm tra khi nhập 301 kí tự vào [Tiêu đề bài tập] textbox', () => {
      const chars = 'a'.repeat(301)

      cy.get('bidv-input[formcontrolname="title"]').type(chars)
      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="title"]').should(
        'contain.text',
        'Độ dài tối đa — 300',
      )
    })

    it('CBT14: Kiểm tra khi nhập kí tự đặc biệt vào [Tiêu đề bài tập] textbox', () => {
      cy.get('bidv-input[formcontrolname="title"]').type(
        '@#$%^&*()_+{}:"<>?[];\'\\,./`~',
      )
      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="title"]').should('be.empty')
    })

    it('CBT15: Kiểm tra khi nhập số vào [Tiêu đề bài tập] textbox', () => {
      cy.get('bidv-input[formcontrolname="title"]').type('1234567890')
      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="title"]').should('be.empty')
    })

    it('CBT16: Kiểm tra khi bỏ trống [Cấp độ] selectbox', () => {
      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="difficulty"]').should('be.empty')
    })

    it('CBT17: Kiểm tra khi chọn Cấp độ = 0', () => {
      cy.get('bidv-select[formcontrolname="difficulty"]').click()
      cy.get('bidv-data-list').contains('Dễ').click()
      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="difficulty"]').should('be.empty')
    })

    it('CBT18: Kiểm tra khi chọn Cấp độ = 1', () => {
      cy.get('bidv-select[formcontrolname="difficulty"]').click()
      cy.get('bidv-data-list').contains('Trung bình').click()
      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="difficulty"]').should('be.empty')
    })

    it('CBT19: Kiểm tra khi chọn Cấp độ = 2', () => {
      cy.get('bidv-select[formcontrolname="difficulty"]').click()
      cy.get('bidv-data-list').contains('Khó').click()
      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="difficulty"]').should('be.empty')
    })

    it('CBT20: Kiểm tra khi bỏ trống [Điểm] textbox', () => {
      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="point"]').should('be.empty')
    })

    it('CBT21: Kiểm tra khi nhập khoảng trắng vào [Điểm] textbox', () => {})

    it('CBT22: Kiểm tra khi điểm = 0', () => {
      cy.get('bidv-input[formcontrolname="point"] input[type="number"]')
        .clear()
        .type('0')
      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="point"]').should('be.empty')
    })

    it('CBT23: Kiểm tra khi điểm = số lớn', () => {
      cy.get('bidv-input[formcontrolname="point"] input[type="number"]')
        .clear()
        .type('55555555555555555555555')
      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="point"]').should('be.empty')
    })

    it('CBT24: Kiểm tra khi điểm = số âm', () => {
      cy.get('bidv-input[formcontrolname="point"] input[type="number"]')
        .clear()
        .type('-12')
      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="point"]').should(
        'contain.text',
        'Giá trị tối thiểu — 0',
      )
    })

    it('CBT25: Kiểm tra khi điểm = kí tự', () => {})

    it('CBT26: Kiểm tra khi bỏ trống [Mô tả bài tập] textbox', () => {
      cy.get('button').contains('Tạo mới').click()
      cy.get('app-editor bidv-error').should('not.exist')
    })

    it('CBT27: Kiểm tra khi nhập khoảng trắng vào [Mô tả bài tập] textbox', () => {
      cy.get('app-editor').find('[contenteditable="true"]').type(' ')
      cy.get('button').contains('Tạo mới').click()
      cy.get('app-editor bidv-error').should('not.exist')
    })

    it('CBT28: Kiểm tra khi nhập kí tự đặc biệt vào [Mô tả bài tập] textbox', () => {
      cy.get('app-editor')
        .find('[contenteditable="true"]')
        .type('@#$%^&*()_+{}:"<>?[];\'\\,./`~')
      cy.get('button').contains('Tạo mới').click()
      cy.get('app-editor bidv-error').should('not.exist')
    })

    it('CBT29: Kiểm tra khi nhập số vào [Mô tả bài tập] textbox', () => {
      cy.get('app-editor').find('[contenteditable="true"]').type('1234567890')
      cy.get('button').contains('Tạo mới').click()
      cy.get('app-editor bidv-error').should('not.exist')
    })
  })

  context('Check logic', () => {
    it('CBT30: Xác minh có thể tạo mới bài tập thành công', () => {
      cy.fixture('/problems/create-problem').then((problem) => {
        const validProblem = problem.validProblem

        // Title
        cy.get('bidv-input[formcontrolname="title"]').type(validProblem.title)

        // Difficulty
        cy.get('bidv-select[formcontrolname="difficulty"]').click()
        cy.get('bidv-data-list').contains(validProblem.difficulty).click()
        cy.get('button').contains('Tạo mới').click()

        // Point
        cy.get('bidv-input[formcontrolname="point"] input[type="number"]')
          .clear()
          .type(validProblem.point)

        // Description
        cy.get('app-editor')
          .find('[contenteditable="true"]')
          .type(validProblem.content)

        // Submit
        cy.get('button').contains('Tạo mới').click()

        cy.get('bidv-notification').should(
          'contain.text',
          'Tạo bài tập thành công',
        )

        cy.wait(1000)

        cy.url().should('include', '/admin/problem')
      })
    })

    it('CBT31: Xác minh có thể huỷ việc tạo mới bài giảng', () => {
      cy.get('form button').contains(' Hủy ').click()

      cy.wait(1000)

      cy.url().should('include', '/admin/problem')
    })
  })
})
