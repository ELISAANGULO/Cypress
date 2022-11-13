//Creacion de 20 posts
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
    beforeEach(()=>{
       cy.visit('/')
        cy.wait(1000)
    });
    it('Escenario1',()=>{
        //Nothing
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type(email)
            cy.get('input[name="password"]').type(password)
            cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').contains('span','Sign in').click()
        });
        cy.wait(1000)
        cy.contains('Posts').click({force: true})
        cy.wait(1000)
        for(let i=0; i< 19; i++){
            cy.contains('New post').click()
            cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type(generateRandomString(7)+generateRandomString(6))
            cy.wait(1000)
            cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').find('p').click({force:true})
            cy.wait(1000)
            cy.get('a[class="ember-view gh-btn-editor gh-editor-back-button"]').contains('span','Posts').click()
            cy.wait(5000)
            cy.get('button[class="gh-btn gh-btn-red"]').contains('span','Leave').click()
            cy.wait(5000)
        }
    })
})