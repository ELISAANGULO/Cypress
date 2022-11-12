// Escenario Crea 5 miembtro solo con email y no suscrito a newsletter
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
        for(let i=0; i< 5; i++){
            cy.contains('Members').click({force: true})
            cy.wait(2000)
            cy.get('a[class="ember-view gh-btn gh-btn-primary"]').contains('span','New member').click()
            cy.wait(1000)
            cy.get('input[name="email"]').type(generateRandomString(4)+'@'+'gmail'+'.com')
            cy.wait(1000)
            cy.get('span[class="input-toggle-component"]').click()
            cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').contains('span','Save').click()
            cy.wait(2000)
        }
        
    })
})