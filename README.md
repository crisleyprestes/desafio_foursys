# desafio_foursys

## Descrição

Este projeto se refere à automação de dois cenários de teste de criação de usuários nos sites [Natura](https://www.natura.com.br/) e [Aesop](https://www.aesop.com.br/) como parte do desafio técnico para o cargo de QA da empresa Foursys.

## Setup do Projeto

Para este projeto são necessários as seguintes aplicações/ferramentas:

- [Node.js (versão 18.5.0 ou superior)](https://nodejs.org/en)
- [Cypress (versão 12.9.0 ou superior](https://www.cypress.io/)
- [Faker.js](https://fakerjs.dev/)
- [Gerador-Validador-CPF](https://www.npmjs.com/package/gerador-validador-cpf)
- [Git (versão 2.39.1)](https://git-scm.com/downloads)
- [Google Chrome (versão 111.0.5563.111)](https://www.google.com/intl/pt-BR/chrome/)

## Configurando o Setup do Projeto

Este projeto foi implementado e executado no *_Windows_*, logo os passos abaixo foram executados para este sistema operacional.

### Node.js

- Baixe o [instalador](https://nodejs.org/dist/v18.15.0/node-v18.15.0-x64.msi) e execute-o. Após finalizar a instalação, execute no CMD o comando abaixo:
<pre>npm -v</pre>

- Deverá ser exibida a seguinte saída:
<pre>v18.15.0</pre>

### Cypress

- No CMD, navegue até o diretório raiz do projeto e execute o comando abaixo:
<pre>npm install cypress</pre>

- Aguarde a instalação ser finalizada. Exeucte o comando abaixo:
<pre>npx cypress --version</pre>

- Deverá ser exibida a seguinte saída:
<pre>Cypress package version: 12.9.0
Cypress binary version: 12.9.0
Electron version: 21.0.0
Bundled Node version:
16.16.0</pre>

### Faker.js

- Essa bilioteca é utilizada para gerar dados aleatórios utilizados no preenchimento do formulário de criação de usuário. 
- Para instalá-lo, execute o comando abaixo no diretório raiz do projeto:
<pre>npm install @faker-js/faker --save-dev</pre>

- Aguarde a instalação/configuração ser finalizada.

### Gerador-Validador-CPF

- Essa biblioteca é utilizada para gerar números de CPF válidos que serão utilizados no preenchimento do formulário de criação de usuário.
- Para instalá-lo, execute o comando abaixo no diretório raiz do projeto:
<pre>npm install gerador-validador-cpf --save-dev</pre>

### Git

- Execute o instalador do *_git_* e após finalizar a instalação, execute no CMD:
<pre>git -v</pre>

- Deverá ser exibida a seguinte saída:
<pre>git version 2.39.1.windows.1</pre>

## Clonando e Importando o Projeto

- No CMD, execute o comando *_git clone_*:
<pre>git clone https://github.com/crisleyprestes/desafio_foursys.git</pre>

- Aguarde o clone ser finalizado. Em seguida, o projeto pode ser importado para sua IDE de preferência.

## Executando os Testes

- No CMD, navegue até o diretório raiz do projeto e execute o comando:
<pre>npx cypress run</pre>

- Os testes serão executados em modo _headless_ e após a sua finalização será exibido a seguinte saída:
<pre>
  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √  createUserAesop.cy.js                    00:25        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  createUserNatura.cy.js                   00:31        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    √  All specs passed!                        00:57        2        2        -        -        -
    
    </pre>
    
- Caso opte por executar os testes usando a GUI do Cypress, execute o comando abaixo no diretório raiz do projeto:
<pre>npx cypress open</pre>


## Implementação do Código

- Os testes estão implementados nos arquivos:
  - **_e2e/createUser/createUserAesop.cy.js_**: Implementa o teste de criação de usuário no site https://www.aesop.com.br/.
  - **_e2e/createUser/createUserNatura.cy.js_**: Implementa o teste de criação de usuário no site https://www.natura.com.br/.

- No arquivo **_e2e/support/commands.js_**, está implementada a lógica do preenchimento do formulário de criação de usuário nos dois sites.
