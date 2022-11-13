import CreacionRandom from "./creacionRandom";
const random = new CreacionRandom()
class IngresoPost {
    ingresoPost() {
        cy.wait(2000)
        cy.contains('Posts').click({force: true})
        cy.wait(4000)
        for(let i=0; i< 19; i++){
            cy.contains('New post').click({force: true})
            cy.wait(3000)
            let content=random.generateRandomString(7)+random.generateRandomString(6)
            cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type(content)
            cy.wait(1000)
            cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').find('p').click({force:true})
            cy.wait(1000)
            cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').should('have.value','')
            cy.wait(1000)
            cy.get('a[class="ember-view gh-btn-editor gh-editor-back-button"]').contains('span','Posts').click()
            cy.wait(5000)
            cy.get('button[class="gh-btn gh-btn-red"]').contains('span','Leave').click()
            cy.wait(5000)
        }
    }
}
export default IngresoPost