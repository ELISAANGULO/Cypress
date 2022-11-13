import CreacionRandom from "./creacionRandom";
const random = new CreacionRandom()
class IngresoPost {
    ingresoPost() {
        cy.wait(2000)
        cy.contains('Posts').click({force: true})
        for(let i=0; i< 9; i++){
            cy.wait(2000)
            cy.contains('New post').click()
            cy.wait(1000)
            let content=random.generateRandomString(24)+random.generateRandomString(24)+random.generateRandomString(24)+random.generateRandomString(24)+random.generateRandomString(24)+random.generateRandomString(24)+random.generateRandomString(24)+random.generateRandomString(24)
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
    }
}
export default IngresoPost