class LoginPage {
    navigate() {
        cy.visit('/')
    }
    enterEmail(username) {
        cy.get('input[name="identification"]')
            .clear()
            .type(username);
        return this
    }
    enterPassword(pswd) {
        cy.get('input[name="password"]')
            .clear()
            .type(pswd)
        return this
    }
    submit() {
        cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').contains('span','Sign in').click()
    }
    
}
export default LoginPage