//Escenario Crear 10 Paginas sin Titulo ni contenido
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
let i = 1
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
        context('When I write to post', () => {
            beforeEach(()=>{
                cy.get('form').within(() => {
                    cy.get('input[name="identification"]').type(email)
                    cy.get('input[name="password"]').type(password)
                    cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').contains('span','Sign in').click()
                });
            });
            it('Then post not be have title ', () => {
                cy.contains('a','Pages').click()
                for(i; i< 2; i++){
                    cy.wait(1000)
                    cy.get('a[class="ember-view gh-btn gh-btn-primary view-actions-top-row"]').contains('span','New page').click()
                    cy.wait(2000)
                    let COnten=generateRandomString(10)+' '+generateRandomString(10)+' '+generateRandomString(10)+' '+generateRandomString(15)
                    cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').type(COnten).clear()
                    cy.wait(3000)
                    cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').should('not.have.value',COnten)
                    cy.wait(3000)
                    cy.get('a[class="ember-view gh-btn-editor gh-editor-back-button"]').contains('span','Pages').click()
                    cy.wait(2000) 
                }
                cy.get('a[class="ember-view permalink gh-list-data gh-post-list-title"]').contains('h3','(Untitled)').click()
                cy.wait(2000)
                cy.get('a[class="ember-view gh-btn-editor gh-editor-back-button"]').contains('span','Pages').click()
                cy.wait(2000)
            })
                /* cy.wait(2000)
                 */

        })
    })
})