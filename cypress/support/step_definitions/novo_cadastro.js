import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import NovoCadastro from "../../pages/novo_cadastro";

const cadastro = new NovoCadastro();

// ========================
// Acessar página
// ========================
Given('que eu estou na página de registro', () => {
  cadastro.acessar_novo_cadastro();
});

// ========================
// Abrir modal Sign Up
// ========================
When('eu clico no botão "Sign up"', () => {
  cadastro.abrir_modal_sign_up();
});

// ========================
// Preencher formulário
// ========================
When('preencho o formulário de registro:', (dataTable) => {
  const dados = dataTable.hashes()[0];
  cadastro.preencher_usuario_sign_up(dados.usuario);
  cadastro.preencher_senha_sign_up(dados.senha);
});

// ========================
// Clicar no botão registrar
// ========================
When('eu clico no botão de registrar', () => {
  cy.window().then((win) => {
    cy.stub(win, 'alert').as('alerta');
  });

  cy.intercept('POST', '**/signup').as('signup');
  cy.get('button[onclick="register()"]').click();
  cy.wait('@signup');
});

// ========================
// Validações - ALERT()
// ========================
Then('eu devo ver a mensagem de sucesso {string}', (msg) => {
  cy.get('@alerta').should('have.been.calledWith', msg);
});

Then('eu devo ver a mensagem de erro {string}', (msg) => {
  cy.get('@alerta').should('have.been.calledWith', msg);
});

