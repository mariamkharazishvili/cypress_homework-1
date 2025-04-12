describe('automationteststore tests', () => {
  const loginName = 'mariam_kharazishvili211';
    const password ='pasword123321!';
 

  beforeEach(() => {
    cy.visit('https://automationteststore.com')
    
    cy.login(loginName, password);
  });
 
  it('Edit account details', () => {
    cy.get('.fa.fa-edit.fa-fw').last().click()
    cy.get('#AccountFrm_firstname').clear().type('mari')
    cy.get('#AccountFrm_email').clear().type('kharaza@gmail.com')
    cy.get('#AccountFrm_telephone').clear().type('558202030')
    cy.get('.fa.fa-check').click()
    cy.contains('Success: Your account has been successfully updated.').should('be.visible')

    
  })

  it('change address', () => {
    cy.get('.fa.fa-book.fa-fw').last().click()
    cy.get('.btn.button.btn-primary').click()
    cy.get('#AddressFrm_city').clear().type('London')
    cy.get('#AddressFrm_address_1').clear().type('136 West Street')
    cy.get('.btn.btn-orange.pull-right.lock-on-click').click()
    cy.contains('Your address has been successfully updated').should('be.visible')
  
  })

  it('change password', (newPassword = 'pasword123') => {
    cy.get('.fa.fa-key.fa-fw').last().click()
    cy.get('#PasswordFrm_current_password').type(password)
    cy.get('#PasswordFrm_password').type(newPassword)
    cy.get('#PasswordFrm_confirm').type(newPassword)
    cy.get('.btn.btn-orange').first().click()
    cy.contains('Success: Your password has been successfully updated.').should('be.visible')

   

  })


})