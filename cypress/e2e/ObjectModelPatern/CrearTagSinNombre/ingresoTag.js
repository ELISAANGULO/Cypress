import CreacionRandom from "./creacionRandom";
const random = new CreacionRandom()
let a = ''
class IngresoTag {
    ingresoTag() {
        cy.wait(1000)
        cy.contains('Tags').click({force: true})
        cy.wait(2000)
        cy.get('a[class="ember-view gh-btn gh-btn-primary"]').contains('span','New tag').click()
        cy.wait(1000)
        cy.get('input[name="name"]').should('have.value','')
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').contains('span','Save').click()
        cy.wait(1000)
                
    }
}
export default IngresoTag