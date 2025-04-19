describe('Verificar botões header', () => {
    it('Deve alternar entre telas', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.contains('a', 'Ir para Mensagens').click();
      
      cy.contains('a', 'Tela inicial').click();
    })
  })