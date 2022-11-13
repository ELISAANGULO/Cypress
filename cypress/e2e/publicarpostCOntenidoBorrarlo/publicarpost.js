import CreacionRandom from "./creacionRandom";
const random = new CreacionRandom()
class PublicarPost {
    publicarPost() {
        cy.wait(5000)
        for(let i=0; i< 5; i++){
            cy.wait(1000)
            cy.contains('Posts').click({force: true})
            cy.wait(3000)
            cy.contains('New post').click()
            let content = random.generateRandomString(16)+' '+random.generateRandomString(16)
            cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').type(content)
            cy.wait(1000)
            cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').find('div[class="koenig-editor__editor __mobiledoc-editor"]',{ timeout: 10000 }).contains('p',content).should('not.be.empty')
            cy.wait(1000)
            cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').click()
            cy.wait(1000)
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
            /* cy.get('button[class="gh-btn gh-btn-red"]').contains('span','Leave').click() */
            cy.get('a[title="Published"]').contains('span','Published').click()
            cy.wait(2000)
            cy.get('a[class="ember-view permalink gh-list-data gh-post-list-title"]').contains('h3','(Untitled)').click()
            cy.wait(1000)
            cy.get('a[class="ember-view gh-post-list-cta edit"]').contains('span','Edit post').click()
            cy.wait(1000)
            cy.get('button[title="Settings"]').click()
            cy.get('button[class="gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button"]').contains('span','Delete post').click()
            cy.wait(1000)
            cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').contains('span','Delete').click()
            cy.wait(1000)
        }
    }
}
export default PublicarPost