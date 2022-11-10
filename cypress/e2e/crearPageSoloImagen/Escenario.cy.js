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
    it('Escenario',()=>{
        //Nothing
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type(email)
            cy.get('input[name="password"]').type(password)
            cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').contains('span','Sign in').click()
        });
        cy.wait(1000)
        cy.contains('a','Pages').click()
        for(let i=0; i< 10; i++){
            cy.wait(1000)
            cy.get('a[class="ember-view gh-btn gh-btn-primary view-actions-top-row"]').contains('span','New page').click()  
            cy.get('button[class="gh-editor-feature-image-unsplash"]').click()
            cy.get('a[class="gh-unsplash-button"]').contains('Insert image').click()
            cy.wait(1000)
            cy.get('a[class="ember-view gh-btn-editor gh-editor-back-button"]').contains('span','Pages').click()
            cy.wait(1000)
        }
        cy.get('a[class="ember-view permalink gh-list-data gh-post-list-title"]').contains('h3','(Untitled)').click()
        cy.wait(1000)
        cy.get('a[class="ember-view gh-btn-editor gh-editor-back-button"]').contains('span','Pages').click()
        cy.wait(1000)
    })
})