/// <reference types="cypress" />

describe('Simple Test Case', () => {
    beforeEach(() => {
        cy.visit('https://staging-sally.kbfinansia.com/auth/login')
    })

    context('Login Function', () => {
        it('MDM-TC-9287: valid username & password', () => {
            cy.get('#username').type('dhandyjoenathan')
            cy.get('#password').type('201017Dj*#*#')
            cy.get('.kt-login__actions > .kt-form').click()

            // cy.get('.kt-header__topbar-wrapper > .kt-hidden-').click()
            // cy.get('.kt-notification__custom > .btn').click()
            // cy.get('.swal2-confirm').click()

            // cy.get('.kt-login__title').should('have.text', 'LOGIN')
        })

        it('invalid username & password', () => {
            cy.get('#username').type('qweqwe')
            cy.get('#password').type('qweqwe')
            cy.get('.kt-login__actions > .kt-form').click()

            cy.get('.alert-text')
                .should('be.visible')
                .should('have.text', 'Mohon masukan Password yang sesuai (Minimal 8 karakter)')
        })

        it('username & password is null', () => {
            cy.get('.kt-login__actions > .kt-form').click()

            cy.get(':nth-child(2) > .alert-text')
                .should('be.visible')
                .should('have.text', 'Password tidak boleh kosong')

            cy.get(':nth-child(3) > .alert-text')
                .should('be.visible')
                .should('have.text', 'Username tidak boleh kosong')
        })
    })
})
