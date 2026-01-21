const {index} = require('../support/pages/demoBlaze/index');
const {login} = require('../support/pages/demoBlaze/login');
const {cart} = require('../support/pages/demoBlaze/cart');
const {username,password} = Cypress.env('demoBlaze');


describe('Buyout Simulation',()=>{

    beforeEach(()=>{
        cy.visit("https://www.demoblaze.com/index.html");
        cy.url().should('contain',"demoblaze.com");
        cy.loginPorUI("lemonDestiny", "1234");
        index.validatePage();
    })


    it('Full simulation of a buyout', ()=>{
        index.validateUser(username);
        cart.clickCategory();
        cart.clickItem();
        cart.clickAddCart();
        cart.clickCart();
        cy.fixture('products').then((data) => {
          cart.validatePurchase(data.productName,data.productPrice);
        })
    })
}
)
