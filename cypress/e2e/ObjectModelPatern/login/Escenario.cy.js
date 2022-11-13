import LoginPage from "./login";
const email = Cypress.env('email')
const password = Cypress.env('password')

describe('Testing basic Ghost', () => {
    it("Login with valid credentials", function () {
        const login = new LoginPage();
        login.navigate();
        login.enterEmail(email);
        login.enterPassword(password);
        cy.get('input[name="identification"]').should('have.value',email)
        cy.wait(2000)
        cy.get('input[name="password"]').should('have.value',password)
        cy.wait(2000)
        login.submit();
    })

})