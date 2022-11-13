//Escenario de 50 paginas
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
        cy.contains('a','Pages').click()
        cy.wait(1000)
        for(let i=0; i< 51; i++){
            cy.wait(1000)
            cy.get('a[class="ember-view gh-btn gh-btn-primary view-actions-top-row"]').contains('span','New page').click()
            cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type(generateRandomString(5)+' '+generateRandomString(8))
            cy.wait(2000)
            cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').find('p').click({force:true})
            cy.wait(6000)
            cy.get('a[class="ember-view gh-btn-editor gh-editor-back-button"]').contains('span','Pages').click()
            cy.wait(7000)
            cy.get('button').contains('span','Leave').click()
            cy.wait(1000)
        }
    })
})