import realizar_login from '../elements/realizar_login';

class RealizarLogin {

  preencher_usuario_login(usuario) {
    cy.get('input#loginusername').clear().type(usuario);
  }

  preencher_senha_login(senha) {
    cy.get('input#loginpassword').clear().type(senha);
  }
}

// ✅ CORRETO: Exporta INSTÂNCIA, não classe
export default new RealizarLogin();
