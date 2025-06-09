describe('(Admin) Cập nhật khóa học', () => {
  const COURSE_ID = '07d35870-514a-4eaf-a7b0-b0d2b2bba032' // Course ID of the course created in the previous test

  beforeEach(() => {
    cy.loginAdmin()
    cy.visit(`/admin/course/${COURSE_ID}/edit?active=0`)
  })

  // context('[Tên khoá học] textbox', () => {
  //   beforeEach(() => {
  //     cy.get('bidv-input[formcontrolname="title"] input').clear()
  //   })

  //   it('UDKH02: Kiểm tra hiển thị placeholder trường [Tên khoá học]', () => {
  //     cy.get('bidv-input[formcontrolname="title"]')
  //       .find('label')
  //       .should('contain.text', 'Nhập tên khóa học')
  //   })

  //   it('UDKH03: Kiểm tra khi bỏ trống trường [Tên khoá học] textbox', () => {
  //     cy.get('button').contains('Cập nhật').click()
  //     cy.get('bidv-error[formcontrolname="title"]').should(
  //       'contain.text',
  //       'Trường này là bắt buộc',
  //     )
  //   })

  //   it('UDKH04: Kiểm tra khi nhập khoảng trắng vào [Tên khoá học]', () => {
  //     cy.get('bidv-input[formcontrolname="title"]').type(' ')
  //     cy.get('button').contains('Cập nhật').click()
  //     cy.get('bidv-error[formcontrolname="title"]').should(
  //       'contain.text',
  //       'Trường này là bắt buộc',
  //     )
  //   })

  //   it('UDKH05: Kiểm tra khi nhập số vào [Tên khoá học]', () => {
  //     cy.get('bidv-input[formcontrolname="title"]').type('123456')
  //     cy.get('button').contains('Cập nhật').click()
  //     cy.get('bidv-error[formcontrolname="title"]').should('be.empty')
  //   })

  //   it('UDKH06: Kiểm tra khi nhập kí tự đặc biệt vào [Tên khoá học]', () => {
  //     cy.get('bidv-input[formcontrolname="title"]').type('!@#$%^')
  //     cy.get('button').contains('Cập nhật').click()
  //     cy.get('bidv-error[formcontrolname="title"]').should('be.empty')
  //   })

  //   it('UDKH07: Kiểm tra khi nhập 1 kí tự vào [Tên khoá học]', () => {
  //     cy.get('bidv-input[formcontrolname="title"]').type('A')
  //     cy.get('button').contains('Cập nhật').click()
  //     cy.get('bidv-error[formcontrolname="title"]').should('be.empty')
  //   })

  //   it('UDKH08: Kiểm tra khi nhập 200 kí tự vào [Tên khoá học]', () => {
  //     cy.get('bidv-input[formcontrolname="title"]').type(
  //       'The EEA includes the EU countries plus Iceland, Liechtenstein and Norway. The European Economic AreaThe EEA includes the EU countries plus Iceland, Liechtenstein and Norway. The European Economic Area',
  //     )
  //     cy.get('button').contains('Cập nhật').click()
  //     cy.get('bidv-error[formcontrolname="title"]').should('be.empty')
  //   })

  //   it('UDKH09: Kiểm tra khi nhập 201 kí tự vào [Tên khoá học]', () => {
  //     cy.get('bidv-input[formcontrolname="title"]').type(
  //       'The EEA includes the EU countries plus Iceland, Liechtenstein and Norway. The European Economic Area1The EEA includes the EU countries plus Iceland, Liechtenstein and Norway. The European Economic Area',
  //     )
  //     cy.get('button').contains('Cập nhật').click()
  //     cy.get('bidv-error[formcontrolname="title"]').should(
  //       'contain.text',
  //       'Độ dài tối đa — 200',
  //     )
  //   })
  // })

  // context('[Giá tiền] textbox', () => {
  //   beforeEach(() => {
  //     cy.get('bidv-input[formcontrolname="price"] input[type="number"]').clear()
  //   })

  //   it('UDKH10: Kiểm tra hiển thị placeholder trường [Giá tiền]', () => {
  //     cy.get('bidv-input[formcontrolname="price"]')
  //       .find('label')
  //       .should('contain.text', 'Nhập giá tiền (VNĐ)')
  //   })

  //   it('UDKH11: Kiểm tra khi bỏ trống trường [Giá tiền]', () => {
  //     cy.get('button').contains('Cập nhật').click()
  //     cy.get('bidv-error[formcontrolname="price"]').should(
  //       'contain.text',
  //       'Trường này là bắt buộc',
  //     )
  //   })

  //   it('UDKH12: Kiểm tra khi nhập khoảng trắng vào [Giá tiền]', () => {
  //     cy.get('bidv-input[formcontrolname="price"]').type(' ')
  //     cy.get('button').contains('Cập nhật').click()
  //     cy.get('bidv-error[formcontrolname="price"]').should(
  //       'contain.text',
  //       'Trường này là bắt buộc',
  //     )
  //   })

  //   it('UDKH13: Kiểm tra khi nhập số vào [Giá tiền] textbox', () => {
  //     cy.get('bidv-input[formcontrolname="price"]').type('123456789')
  //     cy.get('button').contains('Cập nhật').click()
  //     cy.get('bidv-error[formcontrolname="price"]').should('be.empty')
  //   })

  //   it('UDKH14: Kiểm tra khi nhâp giá trị 15000 vào [Giá tiền]', () => {
  //     cy.get('bidv-input[formcontrolname="price"]').type('15000')
  //     cy.get('button').contains('Cập nhật').click()
  //     cy.get('bidv-error[formcontrolname="price"]').should('be.empty')
  //   })

  //   it('UDKH15: Kiểm tra khi nhâp giá trị 15001 vào [Giá tiền]', () => {
  //     cy.get('bidv-input[formcontrolname="price"]').type('15001')
  //     cy.get('button').contains('Cập nhật').click()
  //     cy.get('bidv-error[formcontrolname="price"]').should('be.empty')
  //   })

  //   it('UDKH16: Kiểm tra khi nhập giá trị 14999 vào [Giá tiền]', () => {
  //     cy.get('bidv-input[formcontrolname="price"]').type('14999')
  //     cy.get('button').contains('Cập nhật').click()
  //     cy.get('bidv-error[formcontrolname="price"]').should(
  //       'contain.text',
  //       'Giá trị tối thiểu — 15000',
  //     )
  //   })
  // })

  // context('[URL video] textbox', () => {
  //   beforeEach(() => {
  //     cy.get('bidv-input[formcontrolname="videoUrl"] input').clear()
  //   })

  //   it('UDKH17: Kiểm tra hiển thị placeholder trường [URL video]', () => {
  //     cy.get('bidv-input[formcontrolname="videoUrl"]').should(
  //       'contain.text',
  //       'Nhập URL video khóa học',
  //     )
  //   })

  //   it('UDKH18: Kiểm tra khi bỏ trống trường [URL video]', () => {
  //     cy.get('button').contains('Cập nhật').click()
  //     cy.get('bidv-error[formcontrolname="videoUrl"]').should('be.empty')
  //   })

  //   it('UDKH19: Kiểm tra khi nhập khoảng trắng vào [URL video]', () => {
  //     cy.get('bidv-input[formcontrolname="videoUrl"]').type(' ')
  //     cy.get('button').contains('Cập nhật').click()
  //     cy.get('bidv-error[formcontrolname="videoUrl"]').should('be.empty')
  //   })

  //   it('UDKH20: Kiểm tra khi nhập vào [URL video] textbox đúng định dạng youtube', () => {
  //     cy.get('bidv-input[formcontrolname="videoUrl"]').type(
  //       'https://youtu.be/Nq-RaQu130Q?list=RDMM12gmxhEFeBo',
  //     )
  //     cy.get('button').contains('Cập nhật').click()
  //     cy.get('bidv-error[formcontrolname="videoUrl"]').should('be.empty')
  //   })

  //   it('UDKH21: Kiểm tra khi nhập vào [URL video] textbox sai định dạng youtube', () => {
  //     cy.get('bidv-input[formcontrolname="videoUrl"]').type('adcvb ')
  //     cy.get('button').contains('Cập nhật').click()
  //     cy.get('bidv-error[formcontrolname="videoUrl"]').should(
  //       'contain.text',
  //       'URL không đúng định dạng YouTube',
  //     )
  //   })
  // })

  // context('[Ảnh thumbnail] Uploader', () => {
  //   it('UDKH22: Kiểm tra hiển thị placeholder trường [Ảnh thumbnail]', () => {
  //     cy.get('app-single-file-upload').should(
  //       'contain.text',
  //       'Kéo/thả hoặc chọn tài liệu từ máy tính',
  //     )
  //   })

  //   it('UDKH23: Kiểm tra cho phép tải ảnh lên [Ảnh thumbnail]', () => {
  //     cy.get('app-single-file-upload')
  //       .find('input[type="file"]')
  //       .selectFile('cypress/fixtures/assets/images/less_than_5mb.jpg')
  //     cy.get('app-single-file-upload').should(
  //       'contain.text',
  //       'less_than_5mb.jpg',
  //     )
  //   })

  //   it('UDKH24: Kiểm tra khi chọn ảnh có kích thước < 5MB [Ảnh thumbnail]', () => {
  //     cy.get('app-single-file-upload')
  //       .find('input[type="file"]')
  //       .selectFile('cypress/fixtures/assets/images/less_than_5mb.jpg')
  //     cy.get('app-single-file-upload bidv-error').should('be.empty')
  //   })

  //   it('UDKH25: Kiểm tra khi chọn ảnh có kích thước = 5MB [Ảnh thumbnail]', () => {
  //     cy.get('app-single-file-upload')
  //       .find('input[type="file"]')
  //       .selectFile('cypress/fixtures/assets/images/5mb.jpg')

  //     cy.wait(1000)

  //     cy.get('app-single-file-upload bidv-error').should(
  //       'contain.text',
  //       'Vui lòng upload file có dung lượng tối đa 5MB',
  //     )
  //   })
  // })

  context('[Mô tả] edit', () => {
    beforeEach(() => {
      cy.get('app-editor bidv-editor').find('[contenteditable="true"]').clear()
    })

    it('UDKH26: Kiểm tra hiển thị placeholder trường [Mô tả]', () => {
      cy.get('app-editor').should('contain.text', 'Mô tả')
    })

    it('UDKH27: Kiểm tra khi bỏ trống trường [Mô tả]', () => {
      cy.get('button').contains('Cập nhật').click()
      cy.get('app-editor bidv-error').should('not.exist')
    })

    it('UDKH28: Kiểm tra khi nhập khoảng trắng vào [Mô tả]', () => {
      cy.get('app-editor bidv-editor')
        .find('[contenteditable="true"]')
        .type(' ')
      cy.get('button').contains('Cập nhật').click()
      cy.get('app-editor bidv-error').should('not.exist')
    })

    it('UDKH29: Kiểm tra khi nhập số vào [Mô tả]', () => {
      cy.get('app-editor bidv-editor').find('[contenteditable="true"]').type('123456')
      cy.get('button').contains('Cập nhật').click()
      cy.get('app-editor bidv-error').should('not.exist')
    })

    it('UDKH30: Kiểm tra khi nhập kí tự đặc biệt vào [Mô tả]', () => {
      cy.get('app-editor bidv-editor').find('[contenteditable="true"]').type('!@#$%^')
      cy.get('button').contains('Cập nhật').click()
      cy.get('app-editor bidv-error').should('not.exist')
    })
  })

  it('UDKH31: Kiểm tra có thể update thông tin thành công', () => {
    // Clear all fields before filling them again
    cy.get('bidv-input[formcontrolname="title"] input').clear()
    cy.get('bidv-input[formcontrolname="price"] input[type="number"]').clear()
    cy.get('bidv-input[formcontrolname="videoUrl"] input').clear()
    cy.get('app-editor bidv-editor').find('[contenteditable="true"]').clear()

    // Fill in the fields with valid data
    cy.fixture('/courses/update-course.json').then((data) => {
      const validCourse = data.validCourse
      cy.get('app-editor bidv-editor').find('[contenteditable="true"]').clear()
      cy.get('bidv-input[formcontrolname="title"]').type(validCourse.title)

      cy.get('bidv-input[formcontrolname="price"]').type(validCourse.price)

      cy.get('bidv-input[formcontrolname="videoUrl"]').type(
        validCourse.videoUrl,
      )

      cy.get('app-single-file-upload').find('input[type="file"]').selectFile('cypress/fixtures/assets/images/less_than_5mb.jpg')

      cy.get('app-editor bidv-editor').find('[contenteditable="true"]').type(validCourse.description)

      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-dialogs').find('button').contains('Xác nhận').click()

      cy.get('bidv-notification').should(
        'contain.text',
        'Cập nhật khóa học thành công',
      )

      cy.wait(1000)

      cy.url().should('include', '/admin/course')
    })
  })
})
