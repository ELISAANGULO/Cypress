import CreacionRandom from "./creacionRandom";
const random = new CreacionRandom()
class CrearMiembro {
    crearMiembro(){
        for(let i=0; i< 5; i++){
            cy.wait(3000)
            cy.contains('Members').click({force: true})
            cy.wait(3000)
            cy.get('a[class="ember-view gh-btn gh-btn-primary"]').contains('span','New member').click()
            let content=random.generateRandomString(4)+'@'+'gmail'+'.com'
            cy.wait(1000)
            cy.get('input[name="email"]').type(content)
            cy.wait(1000)
            cy.get('input[name="email"]').should('have.value',content)
            cy.wait(1000)
            cy.get('span[class="input-toggle-component"]').click()
            cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').contains('span','Save').click()
            cy.wait(2000)
        }
    }
}
export default CrearMiembro