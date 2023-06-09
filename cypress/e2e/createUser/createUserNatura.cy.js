/// <reference types = "cypress" />

import { faker } from "@faker-js/faker"
import { generate } from "gerador-validador-cpf"

const options = { env : { snapshotOnly: true }}

describe('Create User Natura', options, () => {
    const THIRTY_SEC = 30000
    const baseURL = 'https://www.natura.com.br/'

    beforeEach(() => {
        cy.visit(baseURL + 'cadastre-se')
        cy.viewport(1280, 880)
        cy.get('button[id*="accept"]', { timeout : THIRTY_SEC }).click()
    })

    it('Create user', () => {
        const user = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password(15) + '0@',
            cpf: generate(),
            birth: faker.date.birthdate().toLocaleDateString('en-GB'),
            gender: 'male',
            phone: faker.phone.number()
        }

        cy.createUser(user.firstName, user.lastName, user.email, user.password, user.cpf, user.birth, user.gender, user.phone)
        cy.url({ timeout : THIRTY_SEC }).should('to.be.equal', baseURL)
        cy.get('i[class*="navigation-menu"]').click()
        cy.get('div[class*="root"] > h6', { timeout : THIRTY_SEC }).should('have.text', 'Olá, ' + user.firstName)
    })

})