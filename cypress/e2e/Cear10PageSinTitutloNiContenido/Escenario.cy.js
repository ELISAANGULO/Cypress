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
            it('Login with the page',()=>{
                //Nothing
                cy.get('form').within(() => {
                    cy.get('input[name="identification"]').type(email)
                    cy.get('input[name="password"]').type(password)
                    it('Then Not be empty ', () => {
                        cy.get('input[name="identification"]').should('notbe.empty')
                    })
                    cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').contains('span','Sign in').click()
                });
                cy.wait(5000)
                cy.contains('a','Pages').click()
                for(i; i< 10; i++){
                    cy.wait(1000)
                    cy.get('a[class="ember-view gh-btn gh-btn-primary view-actions-top-row"]').contains('span','New page').click()
                    cy.wait(2000)
                    cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').type(generateRandomString(10)+' '+generateRandomString(10)+' '+generateRandomString(10)+' '+generateRandomString(15)).clear()
                    cy.wait(3000)

                    it('Then It not be empty ', () => {
                        cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').should('notbe.empty')
                    })

                    cy.wait(2000)
                    cy.get('a[class="ember-view gh-btn-editor gh-editor-back-button"]').contains('span','Pages').click()
                    cy.wait(2000) 
                }
                cy.get('a[class="ember-view permalink gh-list-data gh-post-list-title"]').contains('h3','(Untitled)').click()
                cy.wait(2000)
                cy.get('a[class="ember-view gh-btn-editor gh-editor-back-button"]').contains('span','Pages').click()
                cy.wait(2000)
            })
        })
    })
})