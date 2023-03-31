import { faker } from "@faker-js/faker"
/// <reference types = "cypress" />

const options = { env : { snapshotOnly: true }}

describe('Create User Natura', options, () => {
    beforeEach(() => {
        cy.visit('https://www.natura.com.br/')
        cy.viewport(1280, 880)
        cy.get('button[id*="accept"]', { timeout : 10000 }).click()
        cy.get('div[class*="Toolbar"] > div[class*="nat"] > button').click()
        cy.get('p[class*="root"] > a[class*="root"]').click()
    })

    it('Create user', () => {
        const user = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email()
        }
        cy.get('input[name="firstName"]', { timeout : 10000 }).type(user.firstName)
        cy.get('input[name="lastName"]').type(user.lastName)
        cy.get('input[name="email"]').type(user.email)

    })

})