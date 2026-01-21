class Index {


    get = {
        storeTitle : ()=>cy.get('#nava'),
        storeLogo : ()=>cy.get('#nava').find('img'),
        storeLogin : ()=>cy.get('#login2'),
        storeLogout : ()=>cy.get('#logout2'),
        storeCarrousel : ()=> cy.get('.carousel-inner'),
        storeNav : ()=> cy.get('#navbarExample'),
        userName : ()=> cy.get('#nameofuser'),
    }

    clickLogin(){
        this.get.storeLogin().click()
    }

    clickLogout(){
        this.get.storeLogout().click()
    }
    
    validatePage(){
        this.get.storeTitle().should('contain',"PRODUCT STORE"),
        this.get.storeLogo().should('be.visible'),
        this.get.storeCarrousel().should('be.visible'),
        this.get.storeNav().should('be.visible')
    }

    validateUser(name){
        this.get.userName().should('contain', name)
    }
    validateLogin(){
        this.get.storeLogin().should('contain', "Log in")
    }


}

export const index = new Index ;