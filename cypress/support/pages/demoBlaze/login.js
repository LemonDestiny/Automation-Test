class Login {
    
    get = {
        usernameInput : ()=> cy.get('#loginusername'),
        passwordInput : ()=> cy.get('#loginpassword'),
        loginButton : ()=> cy.get('[class="btn btn-primary"]'),
    }


    loginUser(user, password){
        this.get.usernameInput().type(user);
        this.get.passwordInput().type(password);
        this.get.loginButton().contains('Log in').click();
    }

}

export const login = new Login ;