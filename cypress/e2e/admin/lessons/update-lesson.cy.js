describe('(Admin) update lesson',()=>{
    const LESSON_ID = 'be91b55a-b5bb-4d9a-84db-68b97eb37aa2'
    beforeEach(()=>{
        cy.loginAdmin()
        cy.visit(`/admin/lecture/${LESSON_ID}/edit`)
    })
    describe('Check UI',() => {
    it('UDBG02 Kiểm tra tiêu đề [Tiêu đề bài giảng] texbox ',() => {
        cy.get('label').contains('Tiêu đề bài giảng').should('be.visible')
    })
    it('UDBG03 Kiểm tra placeholder [Tiêu đề bài giảng] texbox  ',() => {
        cy.get('bidv-input[formcontrolname ="title"] input').clear()
        cy.get('bidv-input[formcontrolname ="title"]').find('label').should('contain.text','Nhập tiêu đề')
    })
    it('UDBG04  Kiểm tra tiêu đề [Số thứ tự] texbox  ',() => {
        cy.get('label').contains('Số thứ tự').should('be.visible')
    })
    it('UDBG05 Kiểm tra placeholder [Số thứ tự] texbox ',() => {
        cy.get('bidv-input[formcontrolname = "no"] input[type = "number"]').clear()
        cy.get('bidv-input[formcontrolname = "no"]').find('label').should('contain.text','Nhập số thứ tự')
    })
    it('UDBG06 Kiểm tra tiêu đề [URL Video] textbox ',() => {
        cy.get('label').contains('URL Video').should('be.visible')
    })
    it('UDBG07 Kiểm tra placeholder [URL Video] textbox ',() => {
        cy.get('bidv-input[formcontrolname ="videoUrl"] input').clear()
        cy.get('bidv-input[formcontrolname ="videoUrl"]').should('contain.text','Nhập URL video Youtube')
    })
    it('UDBG08 Kiểm tra tiêu đề [Nội dung] textbox ',() => {
        cy.get('app-editor').should('contain.text', 'Nội dung')
    })
    it('UDBG09 tra placeholder [Nội dung] textbox ',() => {
        cy.get('app-editor').should('contain.text', 'Nội dung')
    })
    })
    describe('Check validation',() => {
        it('UDBG010: Kiểm tra khi bỏ trống [Tiêu đề bài giảng] textbox',() => {
            cy.get('bidv-input[formcontrolname="title"] input').clear()
            cy.get('button').contains('Cập nhật').click()
            cy.get('bidv-error[formcontrolname="title"]').should('contain.text','Trường này không được để trống',
      )
        })
        it('UDBG11: Kiểm tra khi nhập khoảng trắng vào [Tiêu đề bài giảng] textbox',() => {
            cy.get('bidv-input[formcontrolname="title"] input').clear().type(' ')
            cy.get('button').contains('Cập nhật').click()
            cy.get('bidv-error[formcontrolname="title"]').should('contain.text','Trường này không được để trống')
        })
        it('UDBG12:Kiểm tra khi nhập vào [Tiêu đề bài giảng] textbox chuỗi có độ dài bằng 1',() => {
            cy.get('bidv-input[formcontrolname="title"] input').clear()
            cy.get('bidv-input[formcontrolname="title"]').type('a')
            cy.get('button').contains('Cập nhật').click()
            cy.get('bidv-error[formcontrolname="title"]').should('be.empty')
        })
        it('UDBG13: Kiểm tra khi nhập vào [Tiêu đề bài giảng] textbox chuỗi có độ dài bằng 300',() => {
            const inputTitle = 'a'.repeat(300)
            cy.get('bidv-input[formcontrolname="title"] input').clear().type(inputTitle)
            cy.get('button').contains('Cập nhật').click()
            cy.get('bidv-error[formcontrolname="title"]').should('be.empty')
        })
        it('UDBG14: Kiểm tra khi nhập vào [Tiêu đề bài giảng] textbox chuỗi có độ dài bằng 301',() => {
            const chars = 'a'.repeat(301)
            cy.get('bidv-input[formcontrolname="title"] input').clear().type(chars)
            cy.get('button').contains('Cập nhật').click()
            cy.get('bidv-error[formcontrolname="title"]').should('contain.text',' Độ dài tối đa — 300 ')
        })
        it('UDBG15: Kiểm tra khi nhâpj số vào [Tiêu đề bài giảng] textbox',() => {
            cy.get('bidv-input[formcontrolname="title"] input').clear().type('123456789')
            cy.get('button').contains('Cập nhật').click()
            cy.get('bidv-error[formcontrolname="title"]').should('be.empty')
        })
        it('UDBG16: Kiểm tra khi nhập kí tự đặc biệt vào [Tiêu đề bài giảng] textbox ',() => {
            cy.get('bidv-input[formcontrolname="title"] input').clear().type('!@#$%^&*')
            cy.get('button').contains('Cập nhật').click()
            cy.get('bidv-error[formcontrolname="title"]').should('be.empty')
        })
        it('UDBG17: Kiểm tra khi bỏ trống [Số thứ tự] textbox',() => {
            cy.get('bidv-input[formcontrolname="no"] input[type="number"]').clear()
            cy.get('button').contains('Cập nhật').click()
            cy.get('bidv-error[formcontrolname="no"]').should('contain.text','Trường này không được để trống')
        })
        it('UDBG19: Kiểm tra khi nhập số vào [Số thứ tự] textbox',() => {
            cy.get('bidv-input[formcontrolname="no"] input[type="number"]').clear().type(123)
            cy.get('button').contains('Cập nhật').click()
            cy.get('bidv-error[formcontrolname="no"]').should('be.empty')
        })
        it('UDBG20: Kiểm tra khi nhập kí tự chữ vào [Số thứ tự] textbox',() => {
             cy.get('bidv-input[formcontrolname="no"]').type('abc').should('have.value', '');   
        })
        it('UDBG21: Kiểm tra khi bỏ trống [URL video] textbox',() => {
            cy.get('bidv-input[formcontrolname="videoUrl"] input').clear()
            cy.get('button').contains('Cập nhật').click()
            cy.get('bidv-error[formcontrolname="videoUrl"]').should('contain.text','Trường này không được để trống')
        })
        it('UDBG22: Kiểm tra khi nhập khoảng trắng vào [URL video] textbox',() => {
            cy.get('bidv-input[formcontrolname="videoUrl"] input').clear().type(' ')
            cy.get('button').contains('Cập nhật').click()
            cy.get('bidv-error[formcontrolname="videoUrl"]').should('contain.text','Giá trị không hợp lệ')
        })
        it('UDBG23: Kiểm tra khi nhập vào [URL video] textbox đúng định dạng url (youtube)',() => {
            cy.get('bidv-input[formcontrolname="videoUrl"] input').clear().type('https://youtu.be/WS05AU6YYm4?list=PL33lvabfss1xagFyyQPRcppjFKMQ7lvJM')
            cy.get('button').contains('Cập nhật').click()
            cy.get('bidv-error[formcontrolname="videoUrl"]').should('be.empty')
        })
        it('UDBG24: Kiểm tra khi nhập vào [URL video] textbox đúng định dạng url (nhưng không phải yourtube)',() => {
            cy.get('bidv-input[formcontrolname="videoUrl"] input').clear().type('https://hehe/WS05AU6YYm4?list=PL33lvabfss1xagFyyQPRcppjFKMQ7lvJM')
            cy.get('button').contains('Cập nhật').click()
            cy.get('bidv-error[formcontrolname="videoUrl"]').should('contain.text','Giá trị không hợp lệ')
        })
        it('UDBG25: Kiểm tra khi nhập vào [URL video] textbox sai định dạng url  ',() => {
            cy.get('bidv-input[formcontrolname="videoUrl"] input').clear().type('https://hehe/WS05AU6YYm4?list=PL33lvabfss1xagFyyQPRcppjFKMQ7lvJM')
            cy.get('button').contains('Cập nhật').click()
            cy.get('bidv-error[formcontrolname="videoUrl"]').should('contain.text','Giá trị không hợp lệ')
        })
        it('UDBG26: Kiểm tra khi bỏ trống [Nội dung] textbox',() => {
            cy.get('bidv-input[formcontrolname="videoUrl"] input').clear().type('https://hehe/WS05AU6YYm4?list=PL33lvabfss1xagFyyQPRcppjFKMQ7lvJM')
            cy.get('button').contains('Cập nhật').click()
            cy.get('bidv-error[formcontrolname="videoUrl"]').should('contain.text','Giá trị không hợp lệ')
        })
        it('UDBG27: Kiểm tra khi nhập khoảng trắng vào [Nội dung] textbox',() => {
            cy.get('bidv-input[formcontrolname="videoUrl"] input').clear().type('https://hehe/WS05AU6YYm4?list=PL33lvabfss1xagFyyQPRcppjFKMQ7lvJM')
            cy.get('button').contains('Cập nhật').click()
            cy.get('bidv-error[formcontrolname="videoUrl"]').should('contain.text','Giá trị không hợp lệ')
        })
        it('UDBG28: Kiểm tra khi nhập số vào [Nội dung] textbox',() => {
            cy.get('bidv-input[formcontrolname="videoUrl"] input').clear().type('https://hehe/WS05AU6YYm4?list=PL33lvabfss1xagFyyQPRcppjFKMQ7lvJM')
            cy.get('button').contains('Cập nhật').click()
            cy.get('bidv-error[formcontrolname="videoUrl"]').should('contain.text','Giá trị không hợp lệ')
        })
        it('UDBG29: Kiểm tra khi nhập kí tự đặc biệt vào [Nội dung] textbox',() => {
            cy.get('bidv-input[formcontrolname="videoUrl"] input').clear().type('https://hehe/WS05AU6YYm4?list=PL33lvabfss1xagFyyQPRcppjFKMQ7lvJM')
            cy.get('button').contains('Cập nhật').click()
            cy.get('bidv-error[formcontrolname="videoUrl"]').should('contain.text','Giá trị không hợp lệ')
        })
        it('UDBG30: Xác minh có thể huỷ việc cập nhật bài giảng',() => {
            cy.get('button').contains('Hủy').click()
            cy.url().should('include',`/admin/lecture/${LESSON_ID}`)
        })
        it('UDBG33: Kiểm tra khi ncập nhật bài giảng có no đã tồn tại',() => {
            cy.get('bidv-input[formcontrolname="no"] input[type="number"]').clear().type('1')
            cy.get('button').contains('Cập nhật').click()
            cy.get('bidv-notification').should('contain.text','no has existed already')
        })
    })

})