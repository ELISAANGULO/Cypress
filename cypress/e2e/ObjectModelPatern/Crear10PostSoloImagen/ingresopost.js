import CreacionRandom from "./creacionRandom";
const random = new CreacionRandom()
class IngresoPost {
    ingresoPost() {
        cy.wait(1000)
        cy.contains('Posts').click({force: true})
        for(let i=0; i< 9; i++){
            cy.wait(2000)
            cy.contains('New post').click()
            cy.get('Button[class="gh-editor-feature-image-unsplash"]').click()
            cy.wait(1000)
            cy.get('a[class="gh-unsplash-photo"]').contains('Insert image').click()
            cy.wait(1000)
            cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').should('have.value','')
            cy.wait(1000)
            cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').should('have.value','')
            cy.wait(1000)
            /* cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').find('p').click({force:true})
            cy.wait(1000) */
            cy.get('a[class="ember-view gh-btn-editor gh-editor-back-button"]').contains('span','Posts').click()
            cy.wait(5000)
            /* cy.get('button[class="gh-btn gh-btn-red"]').contains('span','Leave').click()
            cy.wait(5000) */
        }
    }
}
export default IngresoPost