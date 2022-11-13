import CreacionRandom from "./creacionRandom";
const random = new CreacionRandom()
class IngresoPage {
    ingresoPage(){
        cy.wait(1000)
        cy.contains('a','Pages').click()
        for(let i=0; i< 10; i++){
            cy.wait(1000)
            cy.get('a[class="ember-view gh-btn gh-btn-primary view-actions-top-row"]').contains('span','New page').click()  
            cy.get('button[class="gh-editor-feature-image-unsplash"]').click()
            cy.get('a[class="gh-unsplash-button"]').contains('Insert image').click()
            cy.wait(1000)
            cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').should('have.value','')
            cy.wait(1000)
            cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').should('have.value','')
            cy.wait(1000)
            cy.get('a[class="ember-view gh-btn-editor gh-editor-back-button"]').contains('span','Pages').click()
            cy.wait(1000)
        }
        cy.get('a[class="ember-view permalink gh-list-data gh-post-list-title"]').contains('h3','(Untitled)').click()
        cy.wait(1000)
        cy.get('a[class="ember-view gh-btn-editor gh-editor-back-button"]').contains('span','Pages').click()
        cy.wait(1000)
    }

}
export default IngresoPage