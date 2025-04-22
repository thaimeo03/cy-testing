describe('Tạo mới khóa học', () => {
  beforeEach(() => {
    cy.adminLogin()
    cy.visit('/admin/course/create')
  })

  context('[Tên khoá học] textbox', () => {
    it('Kiểm tra hiển thị placeholder trường [Tên khoá học]', () => {
      cy.get('bidv-input[formcontrolname="title"]')
        .find('label')
        .invoke('text')
        .then((text) => {
          expect(text).to.include('Nhập tên khóa học')
        })
    })

    it('Kiểm tra khi bỏ trống trường [Tên khoá học]', () => {
      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="title"]')
        .invoke('text')
        .then((text) => {
          expect(text).to.include('Trường này là bắt buộc')
        })
    })

    it('Kiểm tra khi nhập khoảng trắng vào [Tên khoá học]', () => {
      cy.get('bidv-input[formcontrolname="title"]').type(' ')
      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="title"]')
        .invoke('text')
        .then((text) => {
          expect(text).to.include('Trường này là bắt buộc')
        })
    })

    it('Kiểm tra khi nhập số vào [Tên khoá học]', () => {
      cy.get('bidv-input[formcontrolname="title"]').type('123456')
      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="title"]')
        .invoke('text')
        .then((text) => {
          expect(text).not.include('Trường này là bắt buộc')
        })
    })

    it('Kiểm tra khi nhập kí tự đặc biệt vào [Tên khoá học]', () => {
      cy.get('bidv-input[formcontrolname="title"]').type('!@#$%^')
      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="title"]')
        .invoke('text')
        .then((text) => {
          expect(text).not.include('Trường này là bắt buộc')
        })
    })

    it('Kiểm tra khi nhập 1 kí tự vào [Tên khoá học]', () => {
      cy.get('bidv-input[formcontrolname="title"]').type('A')
      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="title"]')
        .invoke('text')
        .then((text) => {
          expect(text).not.include('Trường này là bắt buộc')
        })
    })

    it('Kiểm tra khi nhập 200 kí tự vào [Tên khoá học]', () => {
      cy.get('bidv-input[formcontrolname="title"]').type(
        'The EEA includes the EU countries plus Iceland, Liechtenstein and Norway. The European Economic AreaThe EEA includes the EU countries plus Iceland, Liechtenstein and Norway. The European Economic Area',
      )
      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="title"]')
        .invoke('text')
        .then((text) => {
          expect(text).not.include('Trường này là bắt buộc')
        })
    })

    it('Kiểm tra khi nhập 201 kí tự vào [Tên khoá học]', () => {
      cy.get('bidv-input[formcontrolname="title"]').type(
        'The EEA includes the EU countries plus Iceland, Liechtenstein and Norway. The European Economic Area1The EEA includes the EU countries plus Iceland, Liechtenstein and Norway. The European Economic Area',
      )
      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="title"]')
        .invoke('text')
        .then((text) => {
          expect(text).to.include('Độ dài tối đa — 200')
        })
    })
  })

  context('[Giá tiền] textbox', () => {
    it('Kiểm tra hiển thị placeholder trường [Giá tiền]', () => {
      cy.get('bidv-input[formcontrolname="price"]')
        .find('label')
        .invoke('text')
        .then((text) => {
          expect(text).to.include('Nhập giá tiền (VNĐ)')
        })
    })

    it('Kiểm tra khi bỏ trống trường [Giá tiền]', () => {
      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="price"]')
        .invoke('text')
        .then((text) => {
          expect(text).to.include('Trường này là bắt buộc')
        })
    })

    it('Kiểm tra khi nhập khoảng trắng vào [Giá tiền]', () => {
      cy.get('bidv-input[formcontrolname="price"]').type(' ')
      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="price"]')
        .invoke('text')
        .then((text) => {
          expect(text).to.include('Trường này là bắt buộc')
        })
    })

    it('Kiểm tra khi nhâp giá trị 15000 vào [Giá tiền]', () => {
      cy.get('bidv-input[formcontrolname="price"]').type('15000')
      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="price"]')
        .invoke('text')
        .then((text) => {
          expect(text).not.include('Giá trị tối thiểu — 15000')
        })
    })

    it('Kiểm tra khi nhâp giá trị 15001 vào [Giá tiền]', () => {
      cy.get('bidv-input[formcontrolname="price"]').type('15001')
      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="price"]')
        .invoke('text')
        .then((text) => {
          expect(text).not.include('Giá trị tối thiểu — 15000')
        })
    })

    it('Kiểm tra khi nhập giá trị 14999 vào [Giá tiền]', () => {
      cy.get('bidv-input[formcontrolname="price"]').type('14999')
      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="price"]')
        .invoke('text')
        .then((text) => {
          expect(text).to.include('Giá trị tối thiểu — 15000')
        })
    })
  })
})
