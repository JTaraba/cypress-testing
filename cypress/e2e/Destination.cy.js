// Using Cypress to write a test suite for Destify landing page

// #id, .class [attribute='value'], .class[attribute='value']

describe('landing page test', () => {
    it('title pass', () => {
        cy.visit('https://www.app.destify.com/sales-lead#Destination')
        cy.title().should('eq', 'Destify Guest')
    })

    it('destify - redirect to sign up page', () =>{
        cy.visit('https://www.app.destify.com/sales-lead#Destination')
        cy.get("[href='/sign-up']").click()
        cy.url().should('eq', 'https://www.app.destify.com/sign-up')
    })

    it('lets begin - redirect to Country page', () =>{
        cy.visit('https://www.app.destify.com/sales-lead#Destination')
        cy.get("[data-testid='button-next']").click()
        cy.url().should('eq', 'https://www.app.destify.com/sales-lead#Country')
    })

    it('', () =>{
        cy.visit('https://www.app.destify.com/sales-lead#Destination')
        cy.get('.css-1y3ojfh > .MuiBox-root').click()
        cy.url().should('eq', 'https://www.app.destify.com/log-in')
        cy.get('[data-testid="page-title-button-back"]').click()
    })
    
})