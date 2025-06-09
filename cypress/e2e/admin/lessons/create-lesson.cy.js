describe('(Admin) Tạo mới bài giảng',()=>{
    const COURSE_ID = '3130031e-67f1-4a53-b28f-50f39efceed5'
    beforeEach(() => {
        cy.loginAdmin()
        cy.visit(`/admin/lecture/create?courseId=${COURSE_ID}`)
      })
    context('Check UI',()=>{
        it('CBG01: Kiểm tra hiển thị tiêu đề trường [Tiêu đề bài giảng]',()=>{
            cy.get('label').contains('Tiêu đề bài giảng').should('be.visible')
        })
        it('CBG02: Kiểm tra placeholder [Tiêu đề bài giảng] texbox ',()=>{
            cy.get('bidv-input[formcontrolname ="title"]').find('label').should('contain.text','Nhập tiêu đề')
        })
        it('CBG03: Kiểm tra tiêu đề [Số thứ tự] texbox  ',()=>{
            cy.get('label').contains('Số thứ tự').should('be.visible')
        })
        // it('CBG04: Kiểm tra placeholder [Số thứ tự] textbox', () => {
        //     cy.get('bidv-input[formcontrolname ="no"]').type('1')
        //     cy.get('bidv-input[formcontrolname ="no"] input(type = "number")').clear()
        //     cy.get('bidv-input[formcontrolname ="no"]').find('label').should('contain.text','Nhập số thứ tự')
        // });

        it('CBG05:  Kiểm tra tiêu đề [[URL Video] textbox ',()=>{
            cy.get('label').contains('URL video').should('be.visible')
        })
        it('CBG06: Kiểm tra placeholder [[URL Video] textbox',()=>{
            cy.get('bidv-input[formcontrolname ="videoUrl"]').find('label').should('contain.text','Nhập URL video Youtube')
        })
        it('CBG07: Kiểm tra placeholder [Nội dung] textbox ',()=>{
            // cy.get('div.content').find('bidv-editor').should('have.text', 'Nội dung').and('be.visible');
            cy.get('app-editor').should('contain.text', 'Nội dung')
        })
    })    
    context('Check Validation',()=>{
        it('CBG08: Kiểm tra khi bỏ trống [Tiêu đề bài giảng] textbox',()=>{
            cy.get('button').contains('Tạo mới').click()
            cy.get('bidv-error[formcontrolname="title"]').should('contain.text','Trường này không được để trống')
        })
        it('CBG09: Kiểm tra khi nhập khoảng trắng vào [Tiêu đề bài giảng] textbox ',()=>{
            cy.get('bidv-input[formcontrolname="title"]').type(' ')
            cy.get('button').contains('Tạo mới').click()
            cy.get('bidv-error[formcontrolname="title"]').should('contain.text','Trường này không được để trống',)
        })
        it('CBG010: Kiểm tra khi nhập vào [Tiêu đề bài giảng] textbox chuỗi có độ dài bằng 1',()=>{
            cy.get('bidv-input[formcontrolname="title"]').type('T')
            cy.get('button').contains('Tạo mới').click()
            cy.get('bidv-error[formcontrolname="title"]').should('be.empty')
        })
        it('CBG11: Kiểm tra khi nhập vào [Tiêu đề bài giảng] textbox chuỗi có độ dài bằng 300', () => {
            const inputTitle = 'a'.repeat(300)
            cy.get('bidv-input[formcontrolname="title"]').type(inputTitle)
            cy.get('button').contains('Tạo mới').click()
            cy.get('bidv-error[formcontrolname="title"]').should('be.empty')
        });

        it('CBG12: Kiểm tra khi nhập vào [Tiêu đề bài giảng] textbox chuỗi có độ dài bằng 301',()=>{
            const chars = 'a'.repeat(301)
            cy.get('bidv-input[formcontrolname="title"]').type(chars)
            cy.get('button').contains('Tạo mới').click()
            cy.get('bidv-error[formcontrolname="title"]').should('contain.text','Độ dài tối đa — 300',
        )
        })
        it('CBG13: Kiểm tra khi nhâpj số vào [Tiêu đề bài giảng] textbox',()=>{
            cy.get('bidv-input[formcontrolname="title"]').type(12345)
            cy.get('button').contains('Tạo mới').click()
            cy.get('bidv-error[formcontrolname="title"]').should('be.empty')
        })
        it('CBG014: Kiểm tra khi nhập kí tự đặc biệt vào [Tiêu đề bài giảng] textbox ',()=>{
            cy.get('bidv-input[formcontrolname="title"]').type('@#$%^&*()_+{}:"<>?[];\'\\,./`~',)
            cy.get('button').contains('Tạo mới').click()
            cy.get('bidv-error[formcontrolname="title"]').should('be.empty')
        })
        it('CBG015: Kiểm tra khi bỏ trống [Số thứ tự] textbox',()=>{
            cy.get('bidv-input[formcontrolname="no"] input[type="number"]').type('1').clear()
            cy.get('button').contains('Tạo mới').click()
            cy.get('bidv-error[formcontrolname="no"]').should('contain.text','Trường này không được để trống')
        })
        it('CBG016: Kiểm tra khi nhập số vào [Số thứ tự] textbox',()=>{
            cy.get('bidv-input[formcontrolname="title"]').type(123)
            cy.get('button').contains('Tạo mới').click()
            cy.get('bidv-error[formcontrolname="no"]').should('be.empty')
        })
        it('CBG017: Kiểm tra khi nhập kí tự chữ vào [Số thứ tự] textbox', () => {
            cy.get('bidv-input[formcontrolname="no"]').type('abc').should('have.value', '');               
        });
        it('CBG018: Kiểm tra khi bỏ trống [URL video] textbox',()=>{
            cy.get('button').contains('Tạo mới').click()
            cy.get('bidv-error[formcontrolname="videoUrl"]').should('contain.text','Trường này không được để trống')
        })
        it('CBG019: Kiểm tra khi nhập khoảng trắng vào [URL video] textbox',()=>{
            cy.get('bidv-input[formcontrolname="videoUrl"]').type(' ')
            cy.get('button').contains('Tạo mới').click()
            cy.get('bidv-error[formcontrolname="videoUrl"]').should('contain.text','Giá trị không hợp lệ',)
        })
        it('CBG020: Kiểm tra khi nhập vào [URL video] textbox đúng định dạng url  (youtube)',()=>{
            cy.get('bidv-input[formcontrolname="videoUrl"]').type('https://youtu.be/oSb2kwd5prI')
            cy.get('button').contains('Tạo mới').click()
            cy.get('bidv-error[formcontrolname="videoUrl"]').should('be.empty')
        })
        it('CBG021: Kiểm tra khi nhập vào [URL video] textbox đúng định dạng url  (youtube)',()=>{
            cy.get('bidv-input[formcontrolname="videoUrl"]').type('https://youtu.be/oSb2kwd5prI')
            cy.get('button').contains('Tạo mới').click()
            cy.get('bidv-error[formcontrolname="videoUrl"]').should('be.empty')
        })
        it('CBG022: Kiểm tra khi nhập vào [URL video] textbox sai định dạng url  ',()=>{
            cy.get('bidv-input[formcontrolname="videoUrl"]').type('abc')
            cy.get('button').contains('Tạo mới').click()
            cy.get('bidv-error[formcontrolname="videoUrl"]').should('contain.text','Giá trị không hợp lệ',)
        })
        it('CBG023: Kiểm tra khi bỏ trống [Nội dung] textbox',()=>{
            cy.get('button').contains('Tạo mới').click()
            cy.get('app-editor bidv-error').should('not.exist')
        })
        it('CBG024: Kiểm tra khi nhập khoảng trắng vào [Nội dung] textbox',()=>{
            cy.get('app-editor').find('[contenteditable="true"]').type(' ')
            cy.get('button').contains('Tạo mới').click()
            cy.get('app-editor bidv-error').should('not.exist')
        })
        it('CBG025: Kiểm tra khi nhập số vào [Nội dung] textbox',()=>{
            cy.get('app-editor').find('[contenteditable="true"]').type(12345678)
            cy.get('button').contains('Tạo mới').click()
            cy.get('app-editor bidv-error').should('not.exist')
        })
        it('CBG026: Kiểm tra khi nhập kí tự đặc biệt vào [Nội dung] textbox',()=>{
            cy.get('app-editor').find('[contenteditable="true"]').type('!@#$%^&*()_+')
            cy.get('button').contains('Tạo mới').click()
            cy.get('app-editor bidv-error').should('not.exist')
        })
        it('CBG027: Xác minh có thể huỷ việc tạo mới ',()=>{
            cy.get('button').contains(' Hủy ').click()
            cy.wait(1000)
            cy.url().should('include', 'admin/lecture')
        })
        it('CBG030: Xác minh tạo mới khoá học thất bại khi tạo mới khoá học có no đã tồn tại  ',()=>{
             cy.get('bidv-input[formcontrolname="title"]').type('Test auto')
             cy.get('bidv-input[formcontrolname="no"]').type(1)
             cy.get('bidv-input[formcontrolname="videoUrl"]').type('https://youtu.be/KjIuWrRn5Ds')
             cy.get('app-editor').find('[contenteditable="true"]').type('Khoá học C++')
             cy.get('button').contains('Tạo mới').click()
             cy.get('bidv-notification').should('contain.text','Number order lesson already exists')
        })

    }) 
})