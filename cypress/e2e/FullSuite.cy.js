// This test should run a complete workthrough of the Destifty web application, up until the point we need to input User fields

describe('Full destify suite', () => {
    it('full run of app', () =>{
        cy.visit('https://www.app.destify.com/sales-lead#Destination')
        cy.get("[data-testid='button-next']").click()
        cy.url().should('eq', 'https://www.app.destify.com/sales-lead#Country')

        cy.get('[data-testid="card-button-select-1"]').click()
        cy.get('[data-testid="button-next"]').click()
        cy.url().should('eq', 'https://www.app.destify.com/sales-lead#City')

        cy.get('[data-testid="card-button-select-0"]').click()
        cy.get('[data-testid="button-next"]').click()
        cy.url().should('eq', 'https://www.app.destify.com/sales-lead#Resort')

        cy.get('[data-testid="card-button-select-0"]').click()
        cy.get('[data-testid="button-next"]').click()
        cy.url().should('eq', 'https://www.app.destify.com/sales-lead#Venue')

        cy.get('[data-testid="card-button-select-0"]').click()
        cy.get('[data-testid="button-next"]').click()
        cy.url().should('eq', 'https://www.app.destify.com/sales-lead#Package')

        cy.get('[data-testid="card-button-select-3"]').click()
        cy.get('[data-testid="button-next"]').click()
        cy.url().should('eq', 'https://www.app.destify.com/sales-lead#Date')

        cy.get('[data-testid="step-date-input-date"]').click()
        cy.get('[aria-label="Jul 7, 2023"]').click()
        cy.get('[data-testid="step-date-button-ok"]').click()
        cy.get('[data-testid="step-alt-date-input-date"]').click()
        cy.get('[aria-label="Jul 8, 2023"]').click()
        cy.get('[data-testid="step-alt-date-button-ok"]').click()
        cy.get('[data-testid="button-next"]').click()
        cy.url().should('eq', 'https://www.app.destify.com/sales-lead#Confirmation')

        cy.get('[data-testid="button-next"]').click()

    })
})