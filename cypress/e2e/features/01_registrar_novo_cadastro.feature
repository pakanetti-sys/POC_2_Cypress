#language: pt

Funcionalidade: Registrar novo cadastro

  Como um usuário do sistema
  Eu quero registrar um novo cadastro
  Para que eu possa acessar os serviços oferecidos

Contexto:
  Dado que eu estou na página de registro

Esquema do Cenário: Registrar um novo cadastro com sucesso
    Quando eu clico no botão "Sign up"
    E preencho o formulário de registro:
      | usuario   | senha     |
      | <usuario> | <senha>   |
    E eu clico no botão de registrar
    Então eu devo ver a mensagem de sucesso "<mensagem_sucesso>"

Exemplos: Cadastro de usuários
| usuario    | senha          | mensagem_sucesso      |
| Joao523$    | Senha123!      | Sign up successful.   |
| Maria523$   | MinhaSenha@1   | Sign up successful.   |
| Alex523$    | OutraSenha#2   | Sign up successful.   |

Esquema do Cenário: Tentar registrar um cadastro com usuário já existente
    Quando eu clico no botão "Sign up"
    E preencho o formulário de registro:
      | usuario   | senha     |
      | <usuario> | <senha>   |
    E eu clico no botão de registrar
    Então eu devo ver a mensagem de erro "<mensagem_erro>"

Exemplos: Cadastro de usuários
| usuario    | senha          | mensagem_erro                |
| Joao523$    | Senha123!      | This user already exist.     |
| Maria523$   | MinhaSenha@1   | This user already exist.     |
| Alex523$    | OutraSenha#2   | This user already exist.     |