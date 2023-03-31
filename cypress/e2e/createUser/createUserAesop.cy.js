import { faker } from "@faker-js/faker"
import { generate } from "gerador-validador-cpf"

/// <reference types = "cypress" />

const options = { env : { snapshotOnly: true }}

describe('Create User Aesop', options, () => {
    const TEN_SEC = 10000

    beforeEach(() => {
        cy.visit('https://www.aesop.com.br/cadastre-se')
        cy.viewport(1280, 880)
        cy.get('button[id*="accept"]', { timeout : TEN_SEC }).click()
    })

    it('Create user', () => {
        const user = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password(15) + '@',
            cpf: generate(),
            birth: faker.date.birthdate().toLocaleDateString('en-GB'),
            gender: 'female',
            phone: faker.phone.number()
        }

        cy.createUserAesop(user.firstName, user.lastName, user.email, user.password, user.cpf, user.birth, user.gender, user.phone)
        cy.url({ timeout : TEN_SEC }).should('to.be.equal', 'https://www.aesop.com.br/')
        cy.get('i[class*="navigation-menu"]').click()
        cy.get('div[class*="root"] > h6', { timeout : TEN_SEC }).should('have.text', 'Olá, ' + user.firstName)
    })

})