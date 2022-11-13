import LoginPage from "../Creacion50page/login";
import IngresoPage from "./ingresoPage";

const email = Cypress.env('email')
const password = Cypress.env('password')
describe('Testing basic Ghost', () => {
    context('Given I access the search engine page', () => {
        beforeEach(()=>{
            const login = new LoginPage();
            login.navigate();
        })
        context('When I write and login in the page', () => {
            beforeEach(()=>{
                const login = new LoginPage();
                login.enterEmail(email);
                login.enterPassword(password);
            });
            it('Then It not be empty ', () => {
        
                cy.get('input[name="identification"]').should('have.value',email)
                cy.wait(2000)
                cy.get('input[name="password"]').should('have.value',password)
                cy.wait(2000)
                /* cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').contains('span','Sign in').click() */
            })
        })
        context('When I write to post', () => {
            beforeEach(()=>{
                const login = new LoginPage();
                login.enterEmail(email);
                login.enterPassword(password);
                login.submit();
            });
            it("Then title should be empty and content not should be empty", function () {
                const ingreso = new IngresoPage();
                ingreso.ingresoPage();
            })
        })
    })
})