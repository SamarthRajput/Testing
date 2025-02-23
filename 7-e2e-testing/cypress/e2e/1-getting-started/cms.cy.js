<reference type="cypress" />

describe('Testing app', () => {
    // Before each test visit app.100xdevs.com 
    beforeEach(() => {
      cy.visit('https://app.100xdevs.com')
    }) 
    // in the first test we check is it able to login 
    it('is able to log in', () => {
      cy.contains('Login').should('exist')
      cy.contains('Login').click()
      cy.contains('Signin to your Account').should('exist', { timeout: 10000 })
        // whenever you want to type in something, change content or something, you use cy.get()  
      cy.get('#email').type('harkirat.iitr@gmail.com');
  
      // Fill in the password field
      cy.get('#password').type('123random');
        // get me the 4th button from the top 
      cy.get('button').eq(4).click()
  
      cy.contains('View Content').should("exist", {timeout: 10000})
    })
  
})
  