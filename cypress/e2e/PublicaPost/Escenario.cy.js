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
            it('Escenario',()=>{
                //Nothing
                cy.get('form').within(() => {
                    cy.get('input[name="identification"]').type(email)
                    cy.get('input[name="password"]').type(password)
                    cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').contains('span','Sign in').click()
                });
                cy.wait(5000)
                for(let i=0; i< 10; i++){
                    cy.contains('Posts').click()
                    cy.wait(3000)
                    cy.contains('New post').click()
                    cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type(generateRandomString(5)+' '+generateRandomString(5))

                    it('Then Not be empty ', () => {
                        cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').should('notbe.empty')
                    })

                    cy.wait(2000)
                    cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').click()
                    cy.wait(2000)
                    cy.get('button[class="gh-btn gh-btn-editor darkgrey gh-publish-trigger"]').contains('span','Publish').click()
                    cy.wait(1000)
                    cy.get('button[class="gh-btn gh-btn-black gh-btn-large"]').contains('span','Continue, final review').click()
                    cy.wait(1000)
                    cy.get('button[class="gh-btn gh-btn-large gh-btn-pulse ember-view"]').contains('span','Publish post, right now').click()
                    cy.wait(1000)
                    cy.get('button[class="gh-btn-editor gh-publish-back-button"]').contains('span',' Editor').click()
                    cy.wait(1000)
                    cy.get('a[class="ember-view gh-btn-editor gh-editor-back-button"]').contains('span','Posts').click()
                    cy.wait(1000) 
                    cy.get('button[class="gh-btn gh-btn-red"]').contains('span','Leave').click()
                    cy.get('a[title="Published"]').contains('span','Published').click()
                    cy.wait(1000) 
                }
            })
        })
    })
})