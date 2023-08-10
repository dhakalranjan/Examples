export default class homePage{
    visit(){
        cy.visit("/") //Visit the base URL that has been added in cypress.config file
    }
    viewPort(string){
       
       
        return cy.viewport(window.screen.width, window.screen.height); //use to maximize the window according to your resolution
        
    }
    selectDropdown(text){
        return cy.get("select").as('listSelect'); //It will select the dropdown value
        
    }
    searchButton(string){
        return cy.get('#nav-search-submit-button').as('btn')
    }
}
