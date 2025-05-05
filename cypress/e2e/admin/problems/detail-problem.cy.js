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
      cy.get('bidv-badge').contains('Chưa kích hoạt').should('be.visible')
      cy.get('button').contains('Kích hoạt bài tập').click()
      cy.get('button').contains('Xác nhận').click()
      cy.get('bidv-badge').contains('Đã kích hoạt').should('be.visible')
    })

    it('CTBG18: Kiểm tra hiển thị', () => {
      cy.get('button').contains('Xóa bài tập').should('be.visible')
    })

    it('CTBG19: Kiểm tra khi click', () => {
      cy.get('button').contains('Xóa bài tập').click()
      cy.get('button').contains('Xác nhận').click()
      cy.get('bidv-notification').should(
        'contain.text',
        'Xóa bài tập thành công',
      )
      cy.url().should('include', '/admin/problem')
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
})
