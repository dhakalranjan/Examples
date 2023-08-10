import homePage from "../pages/amazonTesting";

const amazonHome = new homePage();

describe('Amazon Home Page', () => {
    it.only('Select Random Value From DropDown', () => {

        amazonHome.viewPort();

        amazonHome.visit();

        const selectSelector = 'select'; //variable define
        cy.get(selectSelector).find('option').then(($value) => {

                length = $value.length // to get the lenght of the child present in the dropdown

                let randomSelect= Math.floor(Math.random() * length)+1; //it will create the random dropdown value and stored in randomSelect, that later will be selected.
                
                amazonHome.selectDropdown(); //this will call the class and select the random value
            
                cy.get('@listSelect').select(randomSelect,{force: true}) // this will click the random dropdown value generated from the randomSelect     
        })   
         
        amazonHome.searchButton().click();     //It will click the search Icon
    });
});
