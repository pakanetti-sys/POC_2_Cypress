import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import RealizarLogin from '../../pages/realizar_login';

const login = RealizarLogin;

Given('que eu estou na página principal e clico em "Log in"', () => {
  cy.visit('https://www.demoblaze.com/index.html');
  // Limpa qualquer alert anterior
  cy.window().then((win) => {
    delete win.alert.calls; // Reset
    cy.stub(win, 'alert').as('alerta');
  });
  cy.get('a#login2').click();
});

When('preencho o formulário de login:', (dataTable) => {
  const dados = dataTable.hashes()[0];
  // Limpa campos antes
  cy.get('input#loginusername').clear();
  cy.get('input#loginpassword').clear();
  login.preencher_usuario_login(dados.usuario);
  login.preencher_senha_login(dados.senha);
});

When('eu clico no botão de entrar', () => {
  cy.get('button[onclick="logIn()"]').click({ force: true });
});

Then('eu devo ver a mensagem de boas-vindas {string}', () => {
  // DemoBlaze login sucesso = apenas botão logout visível
  cy.get('a#logout2').should('be.visible');
});




