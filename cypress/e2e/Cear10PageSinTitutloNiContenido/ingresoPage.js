import CreacionRandom from "./creacionRandom";
const random = new CreacionRandom()
class IngresoPage {
    ingresoPage(){
        cy.contains('a','Pages').click()
        for(let i= 0; i< 10; i++){
            cy.wait(1000)
            cy.get('a[class="ember-view gh-btn gh-btn-primary view-actions-top-row"]').contains('span','New page').click()
            cy.wait(2000)
            let COnten=random.generateRandomString(10)+' '+random.generateRandomString(10)+' '+random.generateRandomString(10)+' '+random.generateRandomString(15)
            cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').type(COnten).clear()
            cy.wait(3000)
            cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').should('not.have.value',COnten)
            cy.wait(3000)
            cy.get('a[class="ember-view gh-btn-editor gh-editor-back-button"]').contains('span','Pages').click()
            cy.wait(2000) 
        }
        cy.get('a[class="ember-view permalink gh-list-data gh-post-list-title"]').contains('h3','(Untitled)').click()
        cy.wait(2000)
        cy.get('a[class="ember-view gh-btn-editor gh-editor-back-button"]').contains('span','Pages').click()
        cy.wait(2000)
    }

}
export default IngresoPage