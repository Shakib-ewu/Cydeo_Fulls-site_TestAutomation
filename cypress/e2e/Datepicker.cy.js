describe('Date picker validation', () => {

     beforeEach('Navigate',()=>{
        cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('https://qa-practice.netlify.app/') 
      cy.get("#date-picker").click()
      cy.viewport(1280, 720)
    })
    it('Validating different kinds of date picker', () => {
        cy.get('#range-date-calendar').click()
        cy.get('.left > .calendar-table > .table-condensed > tbody > :nth-child(4) > [data-title="r3c4"]')


  })

    it.only('should select a date range', () => {
        cy.get('#range-date-calendar').click()
      cy.contains('[data-title="r0c6"]', '6').click(); 
      cy.contains('[data-title="r4c3"]', '31').click(); 
      cy.get('.start-date').should('have.text', '6');
      cy.get('.end-date').should('have.text', '3131');
      cy.get('.applyBtn').click();
      
    });
  });
  