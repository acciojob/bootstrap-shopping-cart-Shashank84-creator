() => { 
  cy.get('.block-heading').should('have.length', 1).and('have.css', 'text-align', 'center'); 
  cy.get('.container').should('have.length', 1); 
  cy.get('.container').find('.row').should('have.length', 1);
  cy.get('.row').find('.col-lg-8').should('have.length', 1); 
  cy.get('.row').find('.col-lg-4').should('have.length', 1); 
}
