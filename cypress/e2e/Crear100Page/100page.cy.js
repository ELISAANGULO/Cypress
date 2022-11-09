describe('Testing basic Ghost', () => {
    beforeEach(()=>{
       cy.visit('/')
        cy.wait(1000)
    });
    it('Escenario1',()=>{
        //Nothing
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('i.oliva@uniandes.edu.co')
            cy.get('input[name="password"]').type('u]}{N]eN8=OvMXVHJF9y')
            cy.get('button[id="ember7"]').click()
        });
        cy.wait(7000)
        cy.contains('Posts').click()
        cy.wait(3000)
        cy.contains('New post').click()
        cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').type('Nuevo Post')
        cy.wait(2000)
        cy.get('article[class="koenig-editor w-100 flex-grow relative center mb0 mt0 ember-view"]').find('p').click({force:true})
        cy.wait(2000)
        cy.get('a[class="ember-view gh-btn-editor gh-editor-back-button"]').contains('span','Posts').click()
        cy.wait(1000)
    })
})