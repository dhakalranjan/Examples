import homePage from "../pages/amazonTesting";

const amazonHome = new homePage();

describe('Amazon Home Page', () => {
    it.only('Select Random Value From DropDown', () => {

        amazonHome.viewPort();

        amazonHome.visit();

        const selectSelector = 'select'; 
        cy.get(selectSelector).find('option').then(($value) => {

                // to get the lenght of the child present in the dropdown
                length = $value.length 

                //it will create the random dropdown value and stored in randomSelect, that later will be selected.
                let randomSelect= Math.floor(Math.random() * length)+1; 
                

                //this will call the class and select the random value
                amazonHome.selectDropdown(); 

                // this will click the random dropdown value generated from the randomSelect     
                cy.get('@listSelect').select(randomSelect,{force: true}) 
        })   
             //It will click the search Icon
        amazonHome.searchButton().click(); 
    });
});
