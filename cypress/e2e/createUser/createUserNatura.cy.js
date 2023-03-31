import { faker } from "@faker-js/faker"
import { generate } from "gerador-validador-cpf"

/// <reference types = "cypress" />

const options = { env : { snapshotOnly: true }}

describe('Create User Natura', options, () => {
    const TEN_SEC = 10000

    beforeEach(() => {
        cy.visit('/cadastre-se')
        cy.viewport(1280, 880)
        cy.get('button[id*="accept"]', { timeout : TEN_SEC }).click()
    })

    it('Create user', () => {
        const user = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password() + '@',
            cpf: generate(),
            birth: faker.date.birthdate().toLocaleDateString('en-GB'),
            phone: faker.phone.number()
        }

        cy.createUserNatura(user.firstName, user.lastName, user.email, user.password, user.cpf, user.birth, user.phone)
        cy.url({ timeout : TEN_SEC }).should('to.be.equal', 'https://www.natura.com.br/')
        cy.get('i[class*="navigation-menu"]').click()
        cy.get('div[class*="root"] > h6', { timeout : TEN_SEC }).should('have.text', 'Olá, ' + user.firstName)
    })

})