class Cart {

    get = {

        cartTitle : ()=>cy.get('.col-lg-8 h2'),
        cartTable : ()=>cy.get('.success'),
        storeCart : ()=> cy.get('#cartur'),
        addCartButton : ()=> cy.get('.btn'),
        storeCategoryLaptops : ()=> cy.get('.list-group-item'),
        storeItem : ()=> cy.get('.hrefch'),
        
    }

    clickItem(){
        this.get.storeItem().contains('Sony vaio i5').click()
    }

    clickAddCart(){
        this.get.addCartButton().contains("Add to cart").click()
    }

    clickCart(){
        this.get.storeCart().click()
    }

    clickCategory(){
        this.get.storeCategoryLaptops().contains('Laptops').click()
    }

    validatePurchase(name, price){
        this.get.cartTitle().should('contain',"Products"),
        this.get.cartTable().should('contain', name),
        this.get.cartTable().should('contain', price)
    }
}




export const cart = new Cart ;