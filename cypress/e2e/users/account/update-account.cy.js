describe('(User) Quản lý tài khoản',() => {
    const ACCOUNT_ID = 'c85b9cf0-b8e5-469a-ac0a-70d8aa300a1f'
    beforeEach(() => {
        cy.loginAdmin()
        cy.visit('/user/account')
    })
    context('Check UI',() => {
    it('UDPF05: Kiểm tra title [Họ và tên] textbox',() => {
        cy.get('label').contains('Họ và tên').should('be.visible')
    })
    it('UDPF06: Kiểm tra placeholder [Họ và tên] textbox', () => {
        cy.get('bidv-input[formcontrolname="fullName"] input')
        .should('have.attr', 'placeholder', 'Trần Hồng Thái') 
    })
    it('UDPF07: Kiểm tra title [Email] textbox ',() => {
        cy.get('label').contains('Email').should('be.visible')
    })
    it('UDPF08: Kiểm tra title [Số điện thoại] textbox ',() => {
        cy.get('label').contains('Số điện thoại').should('be.visible')
    })
    it('UDPF09: Kiểm tra place holder [Số điện thoại] textbox ',() => {
        cy.get('bidv-input[formcontrolname = "phoneNumber"] input')
        .should('have.attr','placeholder','Nhập số điện thoại')
    })
    it('UDPF010: Kiểm tra title [Ngày sinh] datetimepicker',() => {
        cy.get('label').contains('Ngày sinh').should('be.visible')
    })
    it('UDPF011: Kiểm tra placeholder [Ngày sinh] datetimepicker', () => {
        cy.get('bidv-input-date[formcontrolname="dob"] input')
        .clear()
        .blur(); 
        cy.get('bidv-input-date[formcontrolname="dob"] label')
        .should('contain.text', 'Chọn ngày');
    });

    it('UDPF12: Kiểm tra khi để trống trường [Họ và tên] textbox ',() => {
        cy.get('bidv-input[formcontrolname = "fullName"] input[placeholder ="Trần Hồng Thái"]').clear().blur()
        // cy.get('button').contains('Cập nhật').click()
        cy.get('bidv-error[formcontrolname="fullName"]').should('contain.text', 'Trường này là bắt buộc')
    })
    it('UDPF13: Kiểm tra khi nhập khoảng trắng vào [Họ và tên] textbox ',() => {
        cy.get('bidv-input[formcontrolname="fullName"] input[placeholder = "Trần Hồng Thái"]').clear().type(" ")
        cy.get('button').contains('Cập nhật').click()
        cy.get('bidv-error[formcontrolname="phoneNumber"]').should('contain.text', 'Trường này là bắt buộc')
    })
    it('UDPF14: Kiểm tra khi nhập số vào [Họ và tên] textbox ',() => {
        cy.get('bidv-input[formcontrolname="fullName"] input[placeholder = "Trần Hồng Thái"]').clear().type('123456')
        cy.get('button').contains('Cập nhật').click()
        cy.get('bidv-error[formcontrolname="fullName"]').should('be.empty')
    })
    it('UDPF15: Kiểm tra khi nhập kí tự đặc biệt  vào [Họ và tên] textbox ',() => {
        cy.get('bidv-input[formcontrolname="fullName"] input[placeholder = "Trần Hồng Thái"]').clear().type('!@#$%')
        cy.get('button').contains('Cập nhật').click()
        cy.get('bidv-error[formcontrolname="fullName"]').should('be.empty')
    })
    it('UDPF16: Kiểm tra khi nhập 3 kí tự vào [Họ và tên] textbox',() => {
        cy.get('bidv-input[formcontrolname="fullName"] input[placeholder = "Trần Hồng Thái"]').clear().type('abc')
        cy.get('button').contains('Cập nhật').click()
        cy.get('bidv-error[formcontrolname="fullName"]').should('be.empty')
    })
    it('UDPF17: Kiểm tra khi nhập 100 kí tự vào [Họ và tên] textbox',() => {
        cy.get('bidv-input[formcontrolname="fullName"] input[placeholder = "Trần Hồng Thái"]').clear()
        const name = 'a'.repeat(100)
        cy.get('bidv-input[formcontrolname="fullName"] input[placeholder = "Trần Hồng Thái"]').type(name)
        cy.get('button').contains('Cập nhật').click()
        cy.get('bidv-error[formcontrolname="fullName"]').should('be.empty')
    })
    it('UDPF18: Kiểm tra khi nhập 2 kí tự vào [Họ và tên] textbox',() => {
        cy.get('bidv-input[formcontrolname="fullName"] input[placeholder = "Trần Hồng Thái"]').clear().type('ab')
        cy.get('button').contains('Cập nhật').click()
        cy.get('bidv-error[formcontrolname="fullName"]').should('contain.text', 'Độ dài tối thiểu — 3')        
    })
    it('UDPF19: Kiểm tra khi nhập 101 kí tự vào [Họ và tên] textbox',() => {
        cy.get('bidv-input[formcontrolname="fullName"] input[placeholder = "Trần Hồng Thái"]').clear()
        const name = 'a'.repeat(101)
        cy.get('bidv-input[formcontrolname="fullName"] input[placeholder = "Trần Hồng Thái"]').type(name)
        cy.get('button').contains('Cập nhật').click()
        cy.get('bidv-error[formcontrolname="fullName"]').should('contain.text','Độ dài tối đa — 100')
    })
    it('UDPF20: Kiểm tra trạng thái [Email] textbox ',() => {
        cy.get('bidv-primitive-textfield input:disabled').should('exist')
    })
     it('UDPF21: Kiểm tra khi để trống trường [Số điện thoại] textbox  ',() => {
         cy.get('bidv-input[formcontrolname="phoneNumber"] input[placeholder="Nhập số điện thoại"]').clear().blur()
        cy.get('bidv-error[formcontrolname="phoneNumber"]').should('be.empty')
    })
     it('UDPF22: Kiểm tra khi nhập khoảng trắng vào [Số điện thoại] textbox ',() => {
        cy.get('bidv-input[formcontrolname="phoneNumber"] input[placeholder="Nhập số điện thoại"]').clear().type(" ")
        cy.get('button').contains('Cập nhật').click()
        cy.get('bidv-error[formcontrolname="phoneNumber"]').should('contain.text','Số điện thoại phải có 10 chữ số')
    })
     it('UDPF23: Kiểm tra khi nhập số vào Số điện thoại] textbox ',() => {
        cy.get('bidv-input[formcontrolname="phoneNumber"] input[placeholder="Nhập số điện thoại"]')
        .clear().type('9123456789').blur()
        cy.get('bidv-error[formcontrolname="phoneNumber"]').should('be.empty')
    })
     it('UDPF24: Kiểm tra khi nhập kí tự chữ vào [Số điện thoại] textbox ',() => {
        cy.get('bidv-input[formcontrolname="phoneNumber"] input[placeholder="Nhập số điện thoại"]')
        .clear().type('acbd').blur()
        cy.get('bidv-error[formcontrolname="phoneNumber"]').should('contain.text','Số điện thoại phải có 10 chữ số')
    })
     it('UDPF25: Kiểm tra khi nhập 10 kí tự vào [Số điện thoại] textbox ',() => {
        cy.get('bidv-input[formcontrolname="phoneNumber"] input[placeholder="Nhập số điện thoại"]')
        .clear().type('0123456789')
        cy.get('button').contains('Cập nhật').click()
        cy.get('bidv-error[formcontrolname="phoneNumber"]').should('be.empty')
    })
     it('UDPF25: Kiểm tra khi nhập 10 kí tự vào [Số điện thoại] textbox ',() => {
        cy.get('bidv-input[formcontrolname="phoneNumber"] input[placeholder="Nhập số điện thoại"]')
        .clear().type('0123456789')
        cy.get('bidv-error[formcontrolname="phoneNumber"]').should('be.empty')
    })
     it('UDPF26: Kiểm tra khi nhập 9 kí tự vào [Số điện thoại] textbox  ',() => {
       cy.get('bidv-input[formcontrolname="phoneNumber"] input[placeholder="Nhập số điện thoại"]')
        .clear().type('012345678').blur()
        cy.get('bidv-error[formcontrolname="phoneNumber"]').should('contain.text','Số điện thoại phải có 10 chữ số')
    })
     it('UDPF27: Kiểm tra khi nhập 11 kí tự vào [Số điện thoại] textbox  ',() => {
        cy.get('bidv-input[formcontrolname="phoneNumber"] input[placeholder="Nhập số điện thoại"]')
        .clear().type('01234567890').blur()
        cy.get('bidv-error[formcontrolname="phoneNumber"]').should('contain.text','Số điện thoại phải có 10 chữ số')
    })
     it('UDPF28: Kiểm tra khi để trống trường [Ngày sinh] textbox ',() => {
        cy.get('bidv-input-date[formcontrolname="dob"] input')
        .clear().blur()
        cy.get('bidv-error[formcontrolname="dob"]').should('be.empty')
    })
     it('UDPF29: Kiểm tra khi nhập khoảng trắng vào [Ngày sinh] textbox ',() => {
        cy.get('bidv-input[formcontrolname="phoneNumber"] input[placeholder="Nhập số điện thoại"]')
        .clear().type('0123456789')
        cy.get('bidv-error[formcontrolname="phoneNumber"]').should('be.empty')
    })
      it('UDPF32: Kiểm tra khi tải lên ảnh có định dạng png',() => {
        cy.get('input[type="file"]').selectFile('cypress/fixtures/assets/images/Check3.png')
        cy.get('button').contains('Cập nhật').click()
        cy.get('bidv-notification').should('contain.text','Cập nhật thông tin thành công',)
    })
      it('UDPF33: Kiểm tra khi tải lên ảnh có định dạng jpg ',() => {
        cy.get('input[type="file"]').selectFile('cypress/fixtures/assets/images/Check1.jpg')
        cy.get('button').contains('Cập nhật').click()
        cy.get('bidv-notification').should('contain.text','Cập nhật thông tin thành công',)
    })
      it('UDPF34: Kiểm tra khi tải lên ảnh có định dạng jpeg ',() => {
        cy.get('input[type="file"]').selectFile('cypress/fixtures/assets/images/Check1.jpg')
        cy.get('button').contains('Cập nhật').click()
        cy.get('bidv-notification').should('contain.text','Cập nhật thông tin thành công',)
    })
      it('UDPF35: Kiểm tra khi tải lên ảnh có định dạng gif ',() => {
        cy.get('input[type="file"]').selectFile('cypress/fixtures/assets/images/Check2.gif')
        cy.get('button').contains('Cập nhật').click()
        cy.get('bidv-notification').should('contain.text','Only images are allowed. Accepted extensions are png, jpg, jpeg',)
    })
        it('UDPF: Cập nhật lại tên tài khoản',() => {
        cy.get('bidv-input[formcontrolname="fullName"] input[placeholder = "Trần Hồng Thái"]').clear()
        cy.get('bidv-input[formcontrolname="fullName"] input[placeholder = "Trần Hồng Thái"]').type("Bùi Thanh Trúc")
        cy.get('button').contains('Cập nhật').click()
    })
    })
})
