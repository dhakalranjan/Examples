
describe('homepage', () => {
    it.only('selecct', () => {
        cy.viewport(window.screen.width, window.screen.height);
        cy.visit('https://www.amazon.com/')
            

                       
                const selectSelector = 'select';
            
                cy.get(selectSelector).find('option').then(($value) => {

                    length = $value.length
                    
                     let randomSelect= Math.floor(Math.random() * length)+1;
                    

                    cy.get("select").as('listSelect')
                    cy.get('@listSelect').select(randomSelect,{force: true})



                    cy.get('#nav-search-submit-button').click()
                })
                
                
             



        
    });
});
