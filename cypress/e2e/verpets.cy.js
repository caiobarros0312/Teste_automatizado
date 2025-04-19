describe('Ver pets disponiveis', () => {
  it('Deve exibir os pets disponiveis', () => {
    cy.visit('https://homolog-zews.zurich.com.br/DirectSales/cotador/v2');
    cy.get('#onetrust-accept-btn-handler').click();
    cy.get(':nth-child(1) > .device-label > .device-brand').click();
    cy.get('.models-devices-span').click();
    cy.get('.options > :nth-child(1)').click();
    cy.get('[for="1021"]').click();
    cy.get('#Name').type('Teste');
    cy.get('#Phone').type('99999999999');
    cy.get('#email').type('teste@teste.com');
    cy.get('#AcceptTerms').click();
    cy.get('#next').click();

  })
})