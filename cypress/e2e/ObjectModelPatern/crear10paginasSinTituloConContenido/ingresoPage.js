import CreacionRandom from "./creacionRandom";
const random = new CreacionRandom()
class IngresoPage {
    ingresoPage(){
        cy.wait(5000)
        cy.contains('a','Pages').click()
        for(let i=0; i< 11; i++){
            cy.wait(1000)
            cy.get('a[class="ember-view gh-btn gh-btn-primary view-actions-top-row"]').contains('span','New page').click()
            cy.wait(2000)
            let content=random.generateRandomString(10)+' '+random.generateRandomString(10)+' '+random.generateRandomString(10)+' '+random.generateRandomString(15)
            cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').type(content)
            cy.wait(3000)
            cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').should('have.value','')
            cy.wait(6000)
            cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').find('div[class="koenig-editor__editor __mobiledoc-editor"]',{ timeout: 1000 }).contains('p',content).should('not.be.empty')               
            cy.wait(2000)
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