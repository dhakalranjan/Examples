import loginPage from '../pages/facebookLogin'
const pageObject = new loginPage();
const tests = require('../fixtures/facebookData.json')




beforeEach(function() {
  // executes this test each time "it" block runs
    pageObject.visit();

})
describe('POM Test', () => {

          it('Verify that the Facebook login page will be shown', () => {

            //this will get the button attribute and if the login page is loaded or shown ,it will print the result output in cypress log
            pageObject.submit.then($element => {
              if ($element.attr('type') === 'submit') {
                cy.log("Facebook Login Page is Successfully Shown")
              } else {
                cy.log("Error on showing Facebook Login Page")
              } 
            });
        });

        tests.forEach(test => {
          it(test.name, () => {
            
              // To minimize the "it" block what i did is, I create a Page Object Model and Pass that model with the json array (facebookData.json), so that we dont have to create new "it" block every time,
              // we just need to create a new object in json so that it will be easier and effecient.

                    pageObject.username.type(test.username) 

                    pageObject.password.type(test.password)

                    cy.log("The Test Type is :" + test.testType)

                    pageObject.submit.click();

                    pageObject.successText.should('have.text',test.expectedMessage);


          })
        })

})