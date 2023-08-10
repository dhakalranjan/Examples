export default class Practise{
    visit(){
        cy.visit("/")
    }
    userName(number){
       
       
        return cy.get('#username').type(number);
        
    }
    password(text){
        return cy.get('#passowrd').type(text)
    }
}
