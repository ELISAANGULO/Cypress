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
        let j=random.generateRandomString(5)
        for(let u= 0; u<j.length;u++){
            if(u > 0){
                a= a+ j[u]
            }
        }
        cy.get('input[name=name]').type(j)
        cy.get('input[name=name]').should('have.value',a)
        cy.wait(1000)
        cy.get('textarea[name="description"]').type(random.generateRandomString(24)+random.generateRandomString(24)+random.generateRandomString(24)+random.generateRandomString(24)+random.generateRandomString(24)+random.generateRandomString(24))
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').contains('span','Save').click()
        cy.wait(2000)
        cy.contains('Tags').click({force: true})
        cy.wait(2000)
        cy.get('a[title="Edit tag"]').contains('h3',j).click()
        cy.reload()
        cy.wait(2000)
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon"]').contains('span','Delete tag').click()
        cy.wait(1000)
        cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').contains('span','Delete').click()
    }
}
export default IngresoTag