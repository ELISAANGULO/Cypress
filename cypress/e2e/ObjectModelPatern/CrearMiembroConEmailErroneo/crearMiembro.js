import CreacionRandom from "./creacionRandom";
const random = new CreacionRandom()
class CrearMiembro {
    crearMiembro(){
        cy.wait(1000)
        cy.contains('Members').click({force: true})
        cy.wait(2000)
        cy.get('a[class="ember-view gh-btn gh-btn-primary"]').contains('span','New member').click()
        cy.wait(1000)
        cy.get('input[name="email"]').type(random.generateRandomString(8))
        cy.get('input[name="email"]').should('not.have.value','@gmail.com')               
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').contains('span','Save').click()
        cy.wait(1000)
    }
}
export default CrearMiembro