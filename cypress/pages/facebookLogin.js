export default class loginPage{

    get visit()
    {
       return cy.visit('https://www.facebook.com/');
    }
    get username()
    {
        return cy.get('input[id="email"]');
    }
 
    get password()
    {
        return cy.get('input[id="pass"]')
    }
 
    get submit()
    {
        return cy.get('[data-testid="royal_login_button"]');
    }
 
   get successText()
    {
        return cy.get('h3');
    }
 
    get errorText()
    {
        return cy.get('span');
    }
 
 }
 
