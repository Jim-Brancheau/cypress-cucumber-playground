class LoginPage {
    enterUserName(userName: string) {
        cy.findByPlaceholderText('Enter your username').type(userName);
    }

    enterPassword(userName: string) {
        cy.findByPlaceholderText('Enter your password').type(userName);
    }

    clickSignIn() {
        cy.findByText('Sign in').click();
    }
}

export default LoginPage
