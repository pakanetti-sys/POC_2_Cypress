#language: pt
Funcionalidade: Realizar login

  Como um usuário cadastrado
  Eu quero realizar o login no sistema
  Para que eu possa acessar minha conta e os serviços oferecidos

Contexto:
  Dado que eu estou na página principal e clico em "Log in"

Esquema do Cenário: Realizar login com sucesso
  Quando preencho o formulário de login:
    | usuario | senha | mensagem_boas_vindas |
    | <usuario> | <senha> | <mensagem_boas_vindas> |
  Quando eu clico no botão de entrar
  Então eu devo ver a mensagem de boas-vindas "<mensagem_boas_vindas>"

Exemplos: Login de usuários
| usuario | senha |
| joao10hbns2 | Senha123! |
| maria523k02 | MinhaSenha@1 |
| alex7hsj72 | OutraSenha#2 |