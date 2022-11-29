describe('Sanofi', () => {
  it('exists', () => {
    cy.visit('https://www.sanofi.com/')

    cy.contains('Find out more').click()
  })
})
