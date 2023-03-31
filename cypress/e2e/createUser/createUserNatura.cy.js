import { faker } from "@faker-js/faker"
import { generate } from "gerador-validador-cpf"

/// <reference types = "cypress" />

const options = { env : { snapshotOnly: true }}

describe('Create User Natura', options, () => {
    beforeEach(() => {
        cy.visit('/cadastre-se')
        cy.viewport(1280, 880)
        cy.get('button[id*="accept"]', { timeout : 10000 }).click()
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
        cy.get('input[name="firstName"]', { timeout : 10000 }).type(user.firstName)
        cy.get('input[name="lastName"]').type(user.lastName)
        cy.get('input[name="email"]').type(user.email)
        cy.get('#password-field').type(user.password)
        cy.get('#confirmPassword-field').type(user.password)
        cy.get('input[name="cpf"]').type(user.cpf)
        cy.get('input[name="dateOfBirth"]').type(user.birth)
        cy.get('input[value="male"]').click()
        cy.get('input[name="homePhone"]').type(user.phone)
        cy.get('#acceptedterms').click()
        cy.get('button[type="submit"]').click()
        cy.url().should('to.be.equal', 'https://www.natura.com.br/')
        cy.get('i[class*="navigation-menu"]').click()
        cy.get('div[class*="root"] > h6').should('have.text', 'Olá, ' + user.firstName)
    })

})