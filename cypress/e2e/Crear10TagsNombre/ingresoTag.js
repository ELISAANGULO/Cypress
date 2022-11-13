import CreacionRandom from "./creacionRandom";
const random = new CreacionRandom()
let a = ''
class IngresoTag {
    ingresoTag() {
        cy.wait(1000)
        for(let i=0; i< 9; i++){
            cy.contains('Tags').click({force: true})
            cy.wait(2000)
            cy.get('a[class="ember-view gh-btn gh-btn-primary"]').contains('span','New tag').click()
            let content=random.generateRandomString(8)
            for(let u= 0; u<content.length;u++){
                if(u > 0){
                    a= a+ content[u]
                }
            }
            cy.wait(1000)
            cy.get('input[name="name"]').type(a)
            cy.wait(1000)
            cy.get('input[name="name"]').should('have.value',a)
            
            cy.wait(1000)

            cy.wait(1000)
            cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').contains('span','Save').click()
            cy.wait(1000)
        }
    }
}
export default IngresoTag