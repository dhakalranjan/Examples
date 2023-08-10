import loginPage from '../pages/facebookLogin'
const loginObj = new loginPage();
describe('POM Test', () => {

 beforeEach(function() {
   // executes prior each test within it block
   cy.visit('www.facebook.com');

})

 it('Verify Login Successful With Correct Credentials', () => {
   
   loginObj.username.type('johndoe1998@yopmail.com')
   loginObj.password.type('Test@assessment')
   loginObj.submit.click();
 
//    loginObj.successText.should('have.text','Login Successfully');
 })
})