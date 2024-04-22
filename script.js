() => { 
  cy.get('.container').should('have.length', 1); 
  cy.get('.row').within(() => { 
    cy.get('.col-lg-8').should('have.length', 1); 
    cy.get('.col-lg-4').should('have.length', 1); 
  }); 
}
