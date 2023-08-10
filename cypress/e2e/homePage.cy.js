import Practise from "../pages/Practise"; 

const practisePage = new Practise(); 

describe('Testing Username', () => {
  it('should type username', () => {
    practisePage.visit();
    practisePage.userName("9860208955");
    practisePage.password('208955')
    practisePage.userName('123456')
  });
})