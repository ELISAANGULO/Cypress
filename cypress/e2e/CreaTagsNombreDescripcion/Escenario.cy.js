//Crear tags con nombre y descripcion
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
        cy.contains('Tags').click({force: true})
        cy.wait(2000)
        cy.get('a[class="ember-view gh-btn gh-btn-primary"]').contains('span','New tag').click()
        cy.wait(1000)
        let j=generateRandomString(5)
        cy.get('input[name=name]').type(j)
        cy.wait(1000)
        cy.get('textarea[name="description"]').type(generateRandomString(24)+generateRandomString(24)+generateRandomString(24)+generateRandomString(24)+generateRandomString(24)+generateRandomString(24))
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').contains('span','Save').click()
        cy.wait(2000)
        cy.contains('Tags').click({force: true})
        cy.wait(2000)
        cy.get('a[title="Edit tag"]').contains('h3',j).click()
        cy.reload()
        cy.wait(2000)
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon"]').contains('span','Delete tag').click()
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').contains('span','Delete').click()
    })
})