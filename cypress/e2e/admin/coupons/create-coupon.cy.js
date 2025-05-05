const { formatDate, formatTime } = require('../../../utils/format-date')

describe('(Admin) Tạo mới mã giảm giá', () => {
  beforeEach(() => {
    cy.loginAdmin()
    cy.visit('/admin/coupon/create')
  })

  // context('Check UI', () => {
  //   it('CCP01: [Loại giảm giá] selectbox - Kiểm tra tiêu đề', () => {
  //     cy.get('label').contains('Loại giảm giá').should('be.visible')
  //   })

  //   it('CCP02: [Loại giảm giá] selectbox - Kiểm tra placeholder', () => {
  //     cy.get('bidv-select[formcontrolname="type"]')
  //       .find('label')
  //       .should('contain.text', 'Chọn loại giảm giá')
  //   })

  //   it('CCP03: [Mã giảm giá] - Kiểm tra tiêu đề', () => {
  //     cy.get('label').contains('Mã giảm giá').should('be.visible')
  //   })

  //   it('CCP04: [Mã giảm giá] - Kiểm tra placeholder', () => {
  //     cy.get('bidv-input[formcontrolname="code"]')
  //       .find('label')
  //       .should('contain.text', 'Nhập mã giảm giá')
  //   })

  //   it('CCP05: [Phần trăm giảm giá] - Kiểm tra tiêu đề', () => {
  //     cy.get('label').contains('Phần trăm giảm giá').should('be.visible')
  //   })

  //   it('CCP06: [Phần trăm giảm giá] - Kiểm tra placeholder', () => {
  //     cy.get('bidv-input[formcontrolname="percentOff"]')
  //       .find('label')
  //       .should('contain.text', 'Nhập phần trăm giảm giá')
  //   })

  //   it('CCP07: [Số tiền giảm giá] - Kiểm tra tiêu đề', () => {
  //     cy.get('label').contains('Số tiền giảm giá').should('be.visible')
  //   })

  //   it('CCP08: [Số tiền giảm giá] - Kiểm tra placeholder', () => {
  //     cy.get('bidv-input[formcontrolname="amountOff"]')
  //       .find('label')
  //       .should('contain.text', 'Nhập số tiền giảm giá')
  //   })

  //   it('CCP09: [Số lần áp dụng tối đa] - Kiểm tra tiêu đề', () => {
  //     cy.get('label').contains('Số lần áp dụng tối đa').should('be.visible')
  //   })

  //   it('CCP10: [Số lần áp dụng tối đa] - Kiểm tra placeholder', () => {
  //     cy.get('bidv-input[formcontrolname="maxRedeem"]')
  //       .find('label')
  //       .should('contain.text', 'Nhập số lần áp dụng tối đa')
  //   })

  //   it('CCP11: [Ngày hết hạn] - Kiểm tra tiêu đề', () => {
  //     cy.get('label').contains('Ngày hết hạn').should('be.visible')
  //   })

  //   it('CCP12: [Ngày hết hạn] - Kiểm tra placeholder', () => {
  //     cy.get('bidv-input-date-time[formcontrolname="expiredAt"]')
  //       .find('label')
  //       .should('contain.text', 'Chọn ngày hết hạn')
  //   })
  // })

  context('Check validation', () => {
    // it('CCP13: [Loại giảm giá] selectbox - Kiểm tra khi bỏ trống [Loại giảm giá] selectbox', () => {
    //   cy.get('button').contains('Tạo mới').click()
    //   cy.get('bidv-error[formcontrolname="type"]').should(
    //     'contain.text',
    //     'Trường này không được để trống',
    //   )
    // })

    // it('CCP14: [Loại giảm giá] selectbox - Kiểm tra khi chọn loại giảm giá = "giảm theo phần trăm"', () => {
    //   cy.get('bidv-select[formcontrolname="type"]').click()
    //   cy.get('bidv-data-list').contains('Giảm theo phần trăm').click()
    //   cy.get('button').contains('Tạo mới').click()
    //   cy.get('bidv-error[formcontrolname="type"]').should('be.empty')
    // })

    // it('CCP15: [Loại giảm giá] selectbox - Kiểm tra ô [Số tiền giảm giá VND] khi chọn loại giảm giá = "giảm theo phần trăm"', () => {
    //   cy.get('bidv-select[formcontrolname="type"]').click()
    //   cy.get('bidv-data-list').contains('Giảm theo phần trăm').click()

    //   cy.get('bidv-input[formcontrolname="amountOff"]')
    //     .find('input')
    //     .should('be.disabled')
    // })

    // it('CCP16: [Loại giảm giá] selectbox - Kiểm tra khi chon giảm giá = "giảm theo số tiền"', () => {
    //   cy.get('bidv-select[formcontrolname="type"]').click()
    //   cy.get('bidv-data-list').contains('Giảm theo số tiền').click()
    //   cy.get('button').contains('Tạo mới').click()
    //   cy.get('bidv-error[formcontrolname="type"]').should('be.empty')
    // })

    // it('CCP17: [Loại giảm giá] selectbox - Kiểm tra ô [Phần trăm giảm giá %] khi chọn loại giảm giá = "giảm theo số tiền"', () => {
    //   cy.get('bidv-select[formcontrolname="type"]').click()
    //   cy.get('bidv-data-list').contains('Giảm theo số tiền').click()

    //   cy.get('bidv-input[formcontrolname="percentOff"]')
    //     .find('input')
    //     .should('be.disabled')
    // })

    // it('CCP18: [Mã giảm giá] - Kiểm tra khi bỏ trống [Mã giảm giá]', () => {
    //   cy.get('button').contains('Tạo mới').click()
    //   cy.get('bidv-error[formcontrolname="code"]').should(
    //     'contain.text',
    //     'Trường này không được để trống',
    //   )
    // })

    // it('CCP19: [Mã giảm giá] - Kiểm tra khi nhập khoảng trắng vào [Mã giảm giá]', () => {
    //   cy.get('bidv-input[formcontrolname="code"]').type(' ')
    //   cy.get('button').contains('Tạo mới').click()
    //   cy.get('bidv-error[formcontrolname="code"]').should(
    //     'contain.text',
    //     'Trường này không được để trống',
    //   )
    // })

    // it('CCP20: [Mã giảm giá] - Kiểm tra khi nhập số vào [Mã giảm gía]', () => {
    //   cy.get('bidv-input[formcontrolname="code"]').type('12345678')
    //   cy.get('button').contains('Tạo mới').click()
    //   cy.get('bidv-error[formcontrolname="code"]').should('be.empty')
    // })

    // it('CCP21: [Mã giảm giá] - Kiểm tra khi nhập kí tự đặc biệt vào [Mã giảm giá]', () => {
    //   cy.get('bidv-input[formcontrolname="code"]').type('!@#$%^&*(')
    //   cy.get('button').contains('Tạo mới').click()
    //   cy.get('bidv-error[formcontrolname="code"]').should('be.empty')
    // })

    // it('CCP22: [Phần trăm giảm giá] - Kiểm tra khi bỏ trống [Phần trăm giảm giá ]', () => {
    //   cy.get('bidv-select[formcontrolname="type"]').click()
    //   cy.get('bidv-data-list').contains('Giảm theo phần trăm').click()

    //   cy.get('button').contains('Tạo mới').click()
    //   cy.get('bidv-error[formcontrolname="percentOff"]').should(
    //     'contain.text',
    //     'Trường này không được để trống',
    //   )
    // })

    // it('CCP23: [Phần trăm giảm giá] - Kiểm tra khi phần trăm mã giảm giá = 0', () => {
    //   cy.get('bidv-input[formcontrolname="percentOff"]').type('0')
    //   cy.get('button').contains('Tạo mới').click()
    //   cy.get('bidv-error[formcontrolname="percentOff"]').should('be.empty')
    // })

    // it('CCP24: [Phần trăm giảm giá] - Kiểm tra khi phần trăm mã giảm giá = 1', () => {
    //   cy.get('bidv-input[formcontrolname="percentOff"]').type('1')
    //   cy.get('button').contains('Tạo mới').click()
    //   cy.get('bidv-error[formcontrolname="percentOff"]').should('be.empty')
    // })

    // it('CCP25: [Phần trăm giảm giá] - Kiểm tra phần trăm mã giảm giá = 100', () => {
    //   cy.get('bidv-input[formcontrolname="percentOff"]').type('100')
    //   cy.get('button').contains('Tạo mới').click()
    //   cy.get('bidv-error[formcontrolname="percentOff"]').should('be.empty')
    // })

    // it('CCP26: [Phần trăm giảm giá] - Kiểm tra phần trăm mã giảm giá = 101', () => {
    //   cy.get('bidv-input[formcontrolname="percentOff"]').type('101')
    //   cy.get('button').contains('Tạo mới').click()
    //   cy.get('bidv-error[formcontrolname="percentOff"]').should(
    //     'contain.text',
    //     'Giá trị tối đa — 100',
    //   )
    // })

    // it('CCP27: [Phần trăm giảm giá] - Kiểm tra khi chọn phần trăm mã giảm giá < 0', () => {
    //   cy.get('bidv-input[formcontrolname="percentOff"]').type('-1')
    //   cy.get('button').contains('Tạo mới').click()
    //   cy.get('bidv-error[formcontrolname="percentOff"]').should(
    //     'contain.text',
    //     'Giá trị tối thiểu — 0',
    //   )
    // })

    // it('CCP28: [Số tiền giảm giá] - Kiểm tra khi bỏ trống [Số tiền giảm giá]', () => {
    //   cy.get('bidv-select[formcontrolname="type"]').click()
    //   cy.get('bidv-data-list').contains('Giảm theo số tiền').click()

    //   cy.get('button').contains('Tạo mới').click()
    //   cy.get('bidv-error[formcontrolname="amountOff"]').should(
    //     'contain.text',
    //     'Trường này không được để trống',
    //   )
    // })

    // it('CCP30: [Số tiền giảm giá] - Kiểm tra khi nhập số tiền giảm giá = 0', () => {
    //   cy.get('bidv-input[formcontrolname="amountOff"]').type('0')
    //   cy.get('button').contains('Tạo mới').click()
    //   cy.get('bidv-error[formcontrolname="amountOff"]').should('be.empty')
    // })

    // it('CCP31: [Số tiền giảm giá] - Kiểm tra khi nhâp số tiền giảm giá = 1', () => {
    //   cy.get('bidv-input[formcontrolname="amountOff"]').type('1')
    //   cy.get('button').contains('Tạo mới').click()
    //   cy.get('bidv-error[formcontrolname="amountOff"]').should('be.empty')
    // })

    // it('CCP32: [Số tiền giảm giá] - Kiểm tra khi nhập kí tự vào [Số tiền giảm giá]', () => {
    //   cy.get('bidv-input[formcontrolname="amountOff"]').type('-4')
    //   cy.get('button').contains('Tạo mới').click()
    //   cy.get('bidv-error[formcontrolname="amountOff"]').should(
    //     'contain.text',
    //     'Giá trị tối thiểu — 0',
    //   )
    // })

    // it('CCP33: [Số lần áp dụng tối đa] - Kiểm tra khi bỏ trống', () => {
    //   cy.get('button').contains('Tạo mới').click()
    //   cy.get('bidv-error[formcontrolname="maxRedeem"]').should('be.empty')
    // })

    // it('CCP35: [Số lần áp dụng tối đa] - Kiểm tra khi nhập số vào [Số lần áp dụng tối đa]', () => {
    //   cy.get('bidv-input[formcontrolname="maxRedeem"]').type('123')
    //   cy.get('button').contains('Tạo mới').click()
    //   cy.get('bidv-error[formcontrolname="maxRedeem"]').should('be.empty')
    // })

    it('CCP37: [Ngày hết hạn] - Kiểm tra khi bỏ trống [Ngày hết hạn ]', () => {
      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="expiredAt"]').should('be.empty')
    })

    it('CCP40: [Ngày hết hạn] - Kiểm tra khi chọn ngày hết hạn = hiện tại', () => {
      const currentDate = new Date()
      const formattedDate = formatDate(currentDate)
      const formattedTime = formatTime(currentDate)

      cy.get('bidv-input-date-time[formcontrolname="expiredAt"]').type(
        `${formattedDate} ${formattedTime}`,
      )

      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="expiredAt"]').should('be.empty')
    })

    it('CCP41: [Ngày hết hạn] - Kiểm tra khi chọn ngày hết hạn > hiện tại', () => {
      const currentDate = new Date()
      const futureDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000) // Ngày mai
      const formattedDate = formatDate(futureDate)
      const formattedTime = formatTime(futureDate)

      cy.get('bidv-input-date-time[formcontrolname="expiredAt"]').type(
        `${formattedDate} ${formattedTime}`,
      )

      cy.get('button').contains('Tạo mới').click()
      cy.get('bidv-error[formcontrolname="expiredAt"]').should('be.empty')
    })
  })
})
