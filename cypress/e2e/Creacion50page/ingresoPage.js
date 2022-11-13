import CreacionRandom from "./creacionRandom";
const random = new CreacionRandom()
class IngresoPage {
    ingresoPage(){
        cy.wait(1000)
        cy.contains('a','Pages').click()
        cy.wait(1000)
        for(let i=0; i< 51; i++){
            cy.wait(1000)
            cy.get('a[class="ember-view gh-btn gh-btn-primary view-actions-top-row"]').contains('span','New page').click()
            cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type(random.generateRandomString(5)+' '+random.generateRandomString(8))          
            cy.wait(2000)
            cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').find('p').click({force:true})
            cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').should('have.value','')
            cy.wait(6000)
            cy.get('a[class="ember-view gh-btn-editor gh-editor-back-button"]').contains('span','Pages').click()
            cy.wait(7000)
            cy.get('button').contains('span','Leave').click()
            cy.wait(1000)
        }
    }

}
export default IngresoPage