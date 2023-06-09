const THIRTY_SEC = 30000

Cypress.Commands.add('createUser', (firstName, lastName, email, password, cpf, birth, gender, phone) => {
    cy.get('input[name="firstName"]', { timeout : THIRTY_SEC }).type(firstName)
    cy.get('input[name="lastName"]').type(lastName)
    cy.get('input[name="email"]').type(email)
    cy.get('#password-field').type(password)
    cy.get('#confirmPassword-field').type(password)
    cy.get('input[name="cpf"]').type(cpf)
    cy.get('input[name="dateOfBirth"]').type(birth)
    cy.get('input[value="'+gender+'"]').click()
    cy.get('input[name="homePhone"]').type(phone)
    cy.get('#receiveNewsLetter').click()
    cy.get('#acceptedterms').click()
    cy.get('#infContOptIn').click()
    cy.get('button[type="submit"]').click()
})