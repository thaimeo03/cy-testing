const { formatDate, formatTime } = require('../../../utils/format-date')

describe('(Admin) Cập nhật mã giảm giá', () => {
  const COUPON_ID = 'b4b13c5e-b145-42d5-a844-5d63f075c236'

  beforeEach(() => {
    cy.loginAdmin()
    cy.visit(`/admin/coupon/${COUPON_ID}/edit`)
  })

  context('Check UI', () => {
    it('UCP02: [Loại giảm giá] selectbox - Kiểm tra tiêu đề', () => {
      cy.get('label').contains('Loại giảm giá').should('be.visible')
    })

    it('UCP04: [Mã giảm giá] - Kiểm tra tiêu đề', () => {
      cy.get('label').contains('Mã giảm giá').should('be.visible')
    })

    it('UCP05: [Mã giảm giá] - Kiểm tra placeholder', () => {
      cy.get('bidv-input[formcontrolname="code"] input').clear()

      cy.get('bidv-input[formcontrolname="code"]')
        .find('label')
        .should('contain.text', 'Nhập mã giảm giá')
    })

    it('UCP06: [Phần trăm giảm giá] - Kiểm tra tiêu đề', () => {
      cy.get('label').contains('Phần trăm giảm giá').should('be.visible')
    })

    it('UCP07: [Phần trăm giảm giá] - Kiểm tra placeholder', () => {
      cy.get(
        'bidv-input[formcontrolname="percentOff"] input[type="number"]',
      ).clear()

      cy.get('bidv-input[formcontrolname="percentOff"]')
        .find('label')
        .should('contain.text', 'Nhập phần trăm giảm giá')
    })

    it('UCP08: [Số tiền giảm giá] - Kiểm tra tiêu đề', () => {
      cy.get('label').contains('Số tiền giảm giá').should('be.visible')
    })

    it('UCP09: [Số tiền giảm giá] - Kiểm tra placeholder', () => {
      cy.get(
        'bidv-input[formcontrolname="amountOff"] input[type="number"]',
      ).clear({ force: true })

      cy.get('bidv-input[formcontrolname="amountOff"]')
        .find('label')
        .should('contain.text', 'Nhập số tiền giảm giá')
    })

    it('UCP10: [Số lần áp dụng tối đa] - Kiểm tra tiêu đề', () => {
      cy.get('label').contains('Số lần áp dụng tối đa').should('be.visible')
    })

    it('UCP11: [Số lần áp dụng tối đa] - Kiểm tra placeholder', () => {
      cy.get(
        'bidv-input[formcontrolname="maxRedeem"] input[type="number"]',
      ).clear()

      cy.get('bidv-input[formcontrolname="maxRedeem"]')
        .find('label')
        .should('contain.text', 'Nhập số lần áp dụng tối đa')
    })

    it('UCP12: [Ngày hết hạn] - Kiểm tra tiêu đề', () => {
      cy.get('label').contains('Ngày hết hạn').should('be.visible')
    })

    it('UCP13: [Ngày hết hạn] - Kiểm tra placeholder', () => {
      cy.get('bidv-input-date-time[formcontrolname="expiredAt"] input')
        .clear()
        .blur()

      cy.get('bidv-input-date-time[formcontrolname="expiredAt"]')
        .find('label')
        .should('contain.text', 'Chọn ngày hết hạn')
    })
  })

  context('Check validation', () => {
    it('UCP15: [Loại giảm giá] selectbox - Kiểm tra khi chọn loại giảm giá = "giảm theo phần trăm"', () => {
      cy.get('bidv-select[formcontrolname="type"]').click()
      cy.get('bidv-data-list').contains('Giảm theo phần trăm').click()
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="type"]').should('be.empty')
    })

    it('UCP16: [Loại giảm giá] selectbox - Kiểm tra ô [Số tiền giảm giá VND] khi chọn loại giảm giá = "giảm theo phần trăm"', () => {
      cy.get('bidv-select[formcontrolname="type"]').click()
      cy.get('bidv-data-list').contains('Giảm theo phần trăm').click()

      cy.get('bidv-input[formcontrolname="amountOff"]')
        .find('input')
        .should('be.disabled')
    })

    it('UCP17: [Loại giảm giá] selectbox - Kiểm tra khi chon giảm giá = "giảm theo số tiền"', () => {
      cy.get('bidv-select[formcontrolname="type"]').click()
      cy.get('bidv-data-list').contains('Giảm theo số tiền').click()
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="type"]').should('be.empty')
    })

    it('UCP18: [Loại giảm giá] selectbox - Kiểm tra ô [Phần trăm giảm giá %] khi chọn loại giảm giá = "giảm theo số tiền"', () => {
      cy.get('bidv-select[formcontrolname="type"]').click()
      cy.get('bidv-data-list').contains('Giảm theo số tiền').click()

      cy.get('bidv-input[formcontrolname="percentOff"]')
        .find('input')
        .should('be.disabled')
    })

    it('UCP19: [Mã giảm giá] - Kiểm tra khi bỏ trống [Mã giảm giá]', () => {
      cy.get('bidv-input[formcontrolname="code"] input').clear()

      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="code"]').should(
        'contain.text',
        'Trường này không được để trống',
      )
    })

    it('UCP20: [Mã giảm giá] - Kiểm tra khi nhập khoảng trắng vào [Mã giảm giá]', () => {
      cy.get('bidv-input[formcontrolname="code"] input').clear()

      cy.get('bidv-input[formcontrolname="code"]').type(' ')
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="code"]').should(
        'contain.text',
        'Trường này không được để trống',
      )
    })

    it('UCP21: [Mã giảm giá] - Kiểm tra khi nhập số vào [Mã giảm gía]', () => {
      cy.get('bidv-input[formcontrolname="code"] input').clear()

      cy.get('bidv-input[formcontrolname="code"]').type('12345678')
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="code"]').should('be.empty')
    })

    it('UCP22: [Mã giảm giá] - Kiểm tra khi nhập kí tự đặc biệt vào [Mã giảm giá]', () => {
      cy.get('bidv-input[formcontrolname="code"] input').clear()

      cy.get('bidv-input[formcontrolname="code"]').type('!@#$%^&*(')
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="code"]').should('be.empty')
    })

    it('UCP23: [Phần trăm giảm giá] - Kiểm tra khi bỏ trống [Phần trăm giảm giá ]', () => {
      cy.get('bidv-select[formcontrolname="type"]').click()
      cy.get('bidv-data-list').contains('Giảm theo phần trăm').click()
      cy.get(
        'bidv-input[formcontrolname="percentOff"] input[type="number"]',
      ).clear()
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="percentOff"]').should(
        'contain.text',
        'Trường này không được để trống',
      )
    })

    it('UCP24: [Phần trăm giảm giá] - Kiểm tra khi phần trăm mã giảm giá = 0', () => {
      cy.get(
        'bidv-input[formcontrolname="percentOff"] input[type="number"]',
      ).clear()
      cy.get('bidv-input[formcontrolname="percentOff"]').type('0')
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="percentOff"]').should('be.empty')
    })

    it('UCP25: [Phần trăm giảm giá] - Kiểm tra khi phần trăm mã giảm giá = 1', () => {
      cy.get(
        'bidv-input[formcontrolname="percentOff"] input[type="number"]',
      ).clear()
      cy.get('bidv-input[formcontrolname="percentOff"]').type('1')
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="percentOff"]').should('be.empty')
    })

    it('UCP26: [Phần trăm giảm giá] - Kiểm tra phần trăm mã giảm giá = 100', () => {
      cy.get(
        'bidv-input[formcontrolname="percentOff"] input[type="number"]',
      ).clear()
      cy.get('bidv-input[formcontrolname="percentOff"]').type('100')
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="percentOff"]').should('be.empty')
    })

    it('UCP27: [Phần trăm giảm giá] - Kiểm tra phần trăm mã giảm giá = 101', () => {
      cy.get(
        'bidv-input[formcontrolname="percentOff"] input[type="number"]',
      ).clear()
      cy.get('bidv-input[formcontrolname="percentOff"]').type('101')
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="percentOff"]').should(
        'contain.text',
        'Giá trị tối đa — 100',
      )
    })

    it('UCP28: [Phần trăm giảm giá] - Kiểm tra khi chọn phần trăm mã giảm giá < 0', () => {
      cy.get(
        'bidv-input[formcontrolname="percentOff"] input[type="number"]',
      ).clear()
      cy.get('bidv-input[formcontrolname="percentOff"]').type('-1')
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="percentOff"]').should(
        'contain.text',
        'Giá trị tối thiểu — 0',
      )
    })

    it('UCP29: [Số tiền giảm giá] - Kiểm tra khi bỏ trống [Số tiền giảm giá]', () => {
      cy.get('bidv-select[formcontrolname="type"]').click()
      cy.get('bidv-data-list').contains('Giảm theo số tiền').click()
      cy.get(
        'bidv-input[formcontrolname="amountOff"] input[type="number"]',
      ).clear({ force: true })
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="amountOff"]').should(
        'contain.text',
        'Trường này không được để trống',
      )
    })

    it('UCP31: [Số tiền giảm giá] - Kiểm tra khi nhập số tiền giảm giá = 0', () => {
      cy.get('bidv-select[formcontrolname="type"]').click()
      cy.get('bidv-data-list').contains('Giảm theo số tiền').click()

      cy.get(
        'bidv-input[formcontrolname="amountOff"] input[type="number"]',
      ).clear({ force: true })
      cy.get('bidv-input[formcontrolname="amountOff"]').type('0')
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="amountOff"]').should('be.empty')
    })

    it('UCP32: [Số tiền giảm giá] - Kiểm tra khi nhâp số tiền giảm giá = 1', () => {
      cy.get('bidv-select[formcontrolname="type"]').click()
      cy.get('bidv-data-list').contains('Giảm theo số tiền').click()

      cy.get(
        'bidv-input[formcontrolname="amountOff"] input[type="number"]',
      ).clear({ force: true })
      cy.get('bidv-input[formcontrolname="amountOff"]').type('1')
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="amountOff"]').should('be.empty')
    })

    it('UCP33: [Số tiền giảm giá] - Kiểm tra khi nhập kí tự vào [Số tiền giảm giá]', () => {
      cy.get('bidv-select[formcontrolname="type"]').click()
      cy.get('bidv-data-list').contains('Giảm theo số tiền').click()

      cy.get(
        'bidv-input[formcontrolname="amountOff"] input[type="number"]',
      ).clear({ force: true })
      cy.get('bidv-input[formcontrolname="amountOff"]').type('-4')
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="amountOff"]').should(
        'contain.text',
        'Giá trị tối thiểu — 0',
      )
    })

    it('UCP34: [Số lần áp dụng tối đa] - Kiểm tra khi bỏ trống', () => {
      cy.get(
        'bidv-input[formcontrolname="maxRedeem"] input[type="number"]',
      ).clear()
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="maxRedeem"]').should('be.empty')
    })

    it('UCP35: [Số lần áp dụng tối đa] - Kiểm tra khi nhập số vào [Số lần áp dụng tối đa]', () => {
      cy.get(
        'bidv-input[formcontrolname="maxRedeem"] input[type="number"]',
      ).clear()
      cy.get('bidv-input[formcontrolname="maxRedeem"]').type('123')
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="maxRedeem"]').should('be.empty')
    })

    it('UCP38: [Ngày hết hạn] - Kiểm tra khi bỏ trống [Ngày hết hạn ]', () => {
      cy.get('bidv-input-date-time[formcontrolname="expiredAt"] input')
        .clear()
        .blur()
      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="expiredAt"]').should('be.empty')
    })

    it('UCP39: [Ngày hết hạn] - Kiểm tra khi chọn ngày hết hạn = hiện tại', () => {
      cy.get('bidv-input-date-time[formcontrolname="expiredAt"] input')
        .clear()
        .blur()
      const currentDate = new Date()
      const formattedDate = formatDate(currentDate)
      const formattedTime = formatTime(currentDate)

      cy.get('bidv-input-date-time[formcontrolname="expiredAt"]').type(
        `${formattedDate} ${formattedTime}`,
      )

      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="expiredAt"]').should('be.empty')
    })

    it('UCP40: [Ngày hết hạn] - Kiểm tra khi chọn ngày hết hạn > hiện tại', () => {
      cy.get('bidv-input-date-time[formcontrolname="expiredAt"] input')
        .clear()
        .blur()
      const currentDate = new Date()
      const futureDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000) // Ngày mai
      const formattedDate = formatDate(futureDate)
      const formattedTime = formatTime(futureDate)

      cy.get('bidv-input-date-time[formcontrolname="expiredAt"]').type(
        `${formattedDate} ${formattedTime}`,
      )

      cy.get('button').contains('Cập nhật').click()
      cy.get('bidv-error[formcontrolname="expiredAt"]').should('be.empty')
    })
  })

  context('Check logic', () => {
    it('UCP42: Xác minh có thể Cập nhật coupon thành công', () => {
      cy.fixture('/coupons/update-coupon').then((data) => {
        const validCoupon = data.validCoupon

        // Clear existing values
        cy.get('bidv-input[formcontrolname="code"] input').clear()
        cy.get(
          'bidv-input[formcontrolname="percentOff"] input[type="number"]',
        ).clear()
        cy.get(
          'bidv-input[formcontrolname="maxRedeem"] input[type="number"]',
        ).clear()
        cy.get('bidv-input-date-time[formcontrolname="expiredAt"] input')
          .clear()
          .blur()

        // Type
        cy.get('bidv-select[formcontrolname="type"]').click()
        cy.get('bidv-data-list').contains(validCoupon.type).click()

        // Code
        cy.get('bidv-input[formcontrolname="code"]').type(validCoupon.code)

        // Percent Off
        cy.get('bidv-input[formcontrolname="percentOff"]').type(
          validCoupon.percentOff,
        )

        // Max Redeem
        cy.get('bidv-input[formcontrolname="maxRedeem"]').type(
          validCoupon.maxRedeem,
        )

        // Expired At
        const currentDate = new Date()
        const futureDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000) // Ngày mai
        const formattedDate = formatDate(futureDate)
        const formattedTime = formatTime(futureDate)
        cy.get('bidv-input-date-time[formcontrolname="expiredAt"]').type(
          `${formattedDate} ${formattedTime}`,
        )

        // Submit
        cy.get('button').contains('Cập nhật').click()
        cy.get('bidv-notification').should(
          'contain.text',
          'Cập nhật mã giảm giá thành công',
        )
        cy.wait(1000)
        cy.url().should('include', '/admin/coupon')
      })
    })

    it('UCP43: Kiểm tra khi Cập nhật một coupon đã tồn tại', () => {
      cy.fixture('/coupons/update-coupon').then((data) => {
        const existingCoupon = data.existingCoupon

        // Clear existing values
        cy.get('bidv-input[formcontrolname="code"] input').clear()
        cy.get(
          'bidv-input[formcontrolname="percentOff"] input[type="number"]',
        ).clear()
        cy.get(
          'bidv-input[formcontrolname="maxRedeem"] input[type="number"]',
        ).clear()
        cy.get('bidv-input-date-time[formcontrolname="expiredAt"] input')
          .clear()
          .blur()

        // Type
        cy.get('bidv-select[formcontrolname="type"]').click()
        cy.get('bidv-data-list').contains(existingCoupon.type).click()

        // Code
        cy.get('bidv-input[formcontrolname="code"]').type(existingCoupon.code)

        // Percent Off
        cy.get('bidv-input[formcontrolname="percentOff"]').type(
          existingCoupon.percentOff,
        )

        // Max Redeem
        cy.get('bidv-input[formcontrolname="maxRedeem"]').type(
          existingCoupon.maxRedeem,
        )

        // Expired At
        const currentDate = new Date()
        const futureDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000) // Ngày mai
        const formattedDate = formatDate(futureDate)
        const formattedTime = formatTime(futureDate)
        cy.get('bidv-input-date-time[formcontrolname="expiredAt"]').type(
          `${formattedDate} ${formattedTime}`,
        )
        // Submit
        cy.get('button').contains('Cập nhật').click()
        cy.get('bidv-notification').should(
          'contain.text',
          'Coupon already exists',
        )
      })
    })

    it('UCP44: Xác minh có thể huỷ việc Cập nhật coupon', () => {
      cy.get('form button').contains(' Hủy ').click()

      cy.wait(1000)

      cy.url().should('include', '/admin/coupon')
    })
  })
})
