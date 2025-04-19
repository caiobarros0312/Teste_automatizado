describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Caio');
    cy.get('input[name="email"]').type('teste@teste123.com');
    cy.get('input[name="password"]').type('Testesenha1');
    cy.get('input[name="confirm_password"]').type('Testesenha1');
    cy.contains('button', 'Cadastrar').click();
  })
})