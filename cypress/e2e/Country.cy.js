// These tests should cover the Country route

describe('testing Country route', () => {
    it('traverse the Country page', () => {
        cy.visit('https://www.app.destify.com/sales-lead#Destination')
        cy.get("[data-testid='button-next']").click()
        cy.url().should('eq', 'https://www.app.destify.com/sales-lead#Country')

        //check picture carousel
        cy.get(':nth-child(1) > .sc-dlMDgC > .carousel-root > .carousel > .control-dots > [value="1"]').click()
        cy.get(':nth-child(1) > .sc-dlMDgC > .carousel-root > .carousel > .control-dots > [value="2"]').click()
        cy.get(':nth-child(1) > .sc-dlMDgC > .carousel-root > .carousel > [data-testid="carousel-button-next"]').click()
        
        //Check picture enlarged
        cy.get(':nth-child(1) > .sc-dlMDgC > .previewOpener').click()
        cy.get('.sc-hBMUJo')
        cy.get('[data-testid="app-modal-button-close"]').click()

        //Check the description of the countries
        cy.get('[data-testid="card-button-see-more-0"]').click()
        cy.get('[data-testid="see-more-modal-button-close"]').click()

        //Validate drop down
        cy.get('.MuiSelect-select').click()
        cy.get('[data-value="10"]').click()
        cy.get('.css-ht92vs > .MuiBox-root')

        cy.get('[data-value="1"]').click()
        cy.get(':nth-child(1) > .sc-dlMDgC > .carousel-root > .carousel > .slider-wrapper > .slider > .selected > .css-ht92vs > .MuiBox-root')
        cy.get(':nth-child(2) > .sc-dlMDgC > .carousel-root > .carousel > .slider-wrapper > .slider > .slide > .css-ht92vs > .MuiBox-root')
    })
})