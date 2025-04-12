// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('registration', () => {
    cy.get('#customer_menu_top > li > a').should('have.text','Login or register').click();
    cy.get('#accountFrm > fieldset > .btn').should('be.visible').click()
    cy.get('#AccountFrm_firstname').type('mariam')
    cy.get('#AccountFrm_lastname').type('kharazishvili')
    cy.get('#AccountFrm_email').type('markharishv@gmail.com')
    cy.get('#AccountFrm_telephone').type('551303020')
    cy.get('#AccountFrm_address_1').type('tsereteli avenue')
    cy.get('#AccountFrm_city').type('tbilisi')
    cy.get('#AccountFrm_zone_id').select('3515')
    cy.get('#AccountFrm_postcode').type('3761283')
    cy.get('#AccountFrm_country_id').select('United Kingdom')
    cy.get('#AccountFrm_loginname').type('mariam_kharazishvili211')
    cy.get('#AccountFrm_password').type('pasword123321!')
    cy.get('#AccountFrm_confirm').type('pasword123321!')
    cy.get('#AccountFrm_newsletter1').click()
    cy.get('#AccountFrm_agree').click()
    cy.get('.col-md-2 > .btn').click()
    cy.get('.mb40 > .btn').click
    cy.contains('Your Account Has Been Created!').should('be.visible')
    
    

 })
 Cypress.Commands.add('login', (loginName, password) => {
   cy.log()
   cy.get('#customer_menu_top > li > a').should('have.text','Login or register').click();
    cy.get('#loginFrm_loginname').type(loginName)
    cy.get('#loginFrm_password').type(password)
    cy.get('#loginFrm > fieldset > .btn').click()
    cy.contains('Welcome back').should('be.visible')





  })

