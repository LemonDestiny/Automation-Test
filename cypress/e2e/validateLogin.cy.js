const {index} = require('../support/pages/demoBlaze/index');
const {login} = require('../support/pages/demoBlaze/login');
const {username,password} = Cypress.env('demoBlaze');


describe('user login',()=>{

    beforeEach(()=>{
        cy.visit("https://www.demoblaze.com/index.html");
        cy.url().should('contain',"demoblaze.com");
        index.validatePage();
    })


    it('validate login and Log out succesfully', ()=>{
        index.clickLogin();
        login.loginUser(username,password);
        index.validateUser(username);
        index.clickLogout();
        index.validateLogin();

    })
}
)