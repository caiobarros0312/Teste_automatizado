describe('Falha no login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })

    it('Deve exibir mensagem de erro', () => {
      cy.get('[data-test="input-loginEmail"]').type('teste');
      cy.get('[data-test="input-loginPassword"]').type('teste');
      cy.get('[data-test="submit-button"]').click();
      cy.contains('Por favor, verifique o email digitado').should('be.visible');
      cy.contains('Por favor, verifique o email digitado').should('be.visible');

    })
  })