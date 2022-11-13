//Creacion de 10 posts sin titulo pero con contenido
const email = Cypress.env('email')
const password = Cypress.env('password')

const  generateRandomString = (num) => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1= ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result1;
}
describe('Testing basic Ghost', () => {
    context('Given I access the search engine page', () => {
        beforeEach(()=>{
        cy.visit('/')
            cy.wait(1000)
        });
        context('When I write and login in the page', () => {
            beforeEach(()=>{
                cy.get('form').within(() => {
                    cy.get('input[name="identification"]').type(email)
                    cy.get('input[name="password"]').type(password)
                    /* cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').contains('span','Sign in').click() */
                });
            });
            it('Then It not be empty ', () => {
        
                cy.get('input[name="identification"]').should('have.value',email)
                cy.wait(2000)
                cy.get('input[name="password"]').should('have.value',password)
                cy.wait(2000)
                /* cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').contains('span','Sign in').click() */
            })
        })
        context('When I write post without title', () => {
            beforeEach(()=>{
                cy.get('form').within(() => {
                    cy.get('input[name="identification"]').type(email)
                    cy.get('input[name="password"]').type(password)
                    cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').contains('span','Sign in').click()
                });
            });
            it('Then Title should be empty',()=>{
                //Nothing
                cy.wait(2000)
                cy.contains('Posts').click({force: true})
                cy.wait(1000)
                for(let i=0; i< 9; i++){
                    cy.contains('New post').click()
                    cy.wait(1000)
                    let content=generateRandomString(24)+generateRandomString(24)+generateRandomString(24)+generateRandomString(24)+generateRandomString(24)+generateRandomString(24)+generateRandomString(24)+generateRandomString(24)
                    cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').type(content)
                    cy.wait(3000)
                    cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').should('have.value','')
                    cy.wait(6000)
                    cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').find('div[class="koenig-editor__editor __mobiledoc-editor"]',{ timeout: 10000 }).contains('p',content).should('not.be.empty')
                    cy.wait(4000)
                    cy.get('a[class="ember-view gh-btn-editor gh-editor-back-button"]').contains('span','Posts').click()
                    cy.wait(5000)
                    /* cy.get('button[class="gh-btn gh-btn-red"]').contains('span','Leave').click()
                    cy.wait(5000) */
                }
            })
        })
    })
})