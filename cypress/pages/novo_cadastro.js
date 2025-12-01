import novo_cadastro_elements from '../elements/novo_cadastro_elements';

class NovoCadastro {
  constructor() {
    this.el = new novo_cadastro_elements();
  }

  acessar_novo_cadastro() {
    cy.visit('https://www.demoblaze.com/index.html', { failOnStatusCode: false });
  }

  abrir_modal_sign_up() {
    cy.get(this.el.botao_sign_up).click();
    cy.get(this.el.modal_sign_up).should('be.visible');
  }

  preencher_usuario_sign_up(usuario) {
    cy.get(this.el.campo_usuario_sign_up).clear()
      .should('be.visible')
      .click()
      .focus()
      .clear()
      .type(usuario, { delay: 40 })
      .should('have.value', usuario);
  }

  preencher_senha_sign_up(senha) {
    cy.get(this.el.campo_senha_sign_up).clear().type(senha);
  }

  confirmar_sign_up() {
    cy.get(this.el.botao_confirmar_sign_up).click();
  }
}

export default NovoCadastro;
