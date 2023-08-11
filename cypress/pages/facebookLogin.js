export default class loginPage{

    visit(string)
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
        return cy.get('div[class="fcb"]');
    }
 
    get errorText()
    {
        return cy.get('errorMessages');
    }
 
 }
 
