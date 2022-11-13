import CreacionRandom from "./creacionRandom";
const random = new CreacionRandom()
class PublicarPost {
    publicarPost() {
        cy.wait(5000)
        for(let i=0; i< 10; i++){
            cy.contains('Posts').click()
            cy.wait(3000)
            cy.contains('New post').click()
            cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type(random.generateRandomString(5)+' '+random.generateRandomString(5))
            cy.wait(3000)
            cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').should('have.value','')

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
    }
}
export default PublicarPost