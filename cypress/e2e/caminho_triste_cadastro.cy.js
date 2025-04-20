describe('Tela cadastro', () => {
    beforeEach(()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="register-button"]').click();
    })

    it('Cadastro com campos vazios', () => {
        cy.get('[data-test="submit-button"]').click();
        cy.contains('É necessário informar um endereço de email').should('be.visible');
        cy.contains('Crie uma senha').should('be.visible');
        cy.contains('Repita a senha criada acima').should('be.visible');
    })

    it('Realizar cadastro incorreto', () => {
        cy.get('[data-test="input-name"]').type('1');
        cy.get('[data-test="input-email"]').type('teste');
        cy.get('[data-test="input-password"]').type('senha');
        cy.get('[data-test="input-confirm-password"]').type('senha2');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('Por favor, verifique o email digitado').should('be.visible');
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
        cy.contains('As senhas não batem').should('be.visible');
    })

    it('Realizar cadastro correto', () => {
        cy.get('[data-test="input-name"]').type('teste tesstilson');
        cy.get('[data-test="input-email"]').type('teste12@teste123.com');
        cy.get('[data-test="input-password"]').type('Senha123456789');
        cy.get('[data-test="input-confirm-password"]').type('Senha123456789');
        cy.get('[data-test="submit-button"]').click();
        cy.url().should('eq', 'https://adopet-frontend-cypress.vercel.app/login') // Verifica se a URl apareceu
        
    })

  })