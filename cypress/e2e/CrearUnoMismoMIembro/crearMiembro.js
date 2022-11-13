import CreacionRandom from "./creacionRandom";
const random = new CreacionRandom()
class CrearMiembro {
    crearMiembro(){
        cy.wait(1000)
        cy.contains('Members').click({force: true})
        cy.wait(2000)
        cy.get('button[class="gh-btn gh-btn-green"]').contains('span','Add yourself as a member to test').click()
        cy.wait(1000)
    }
}
export default CrearMiembro