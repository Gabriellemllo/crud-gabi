# crud
 CRUD feito com meus alunos.

// Inicializa um novo projeto Node.js
npm init -y

// Instala o express, um framework para Node.js. lidar com solicitações HTTP e criar rotas.
npm i express

// Instala o mysql2, um módulo do Node.js para conexão com MySQL
npm i mysql2

// Instala o nodemon, uma ferramenta que reinicia automaticamente a aplicação do node quando detecta alterações de arquivo no diretório
npm i nodemon

// Instala o cors, uma maneira de permitir que um site acesse recursos de outro site, mesmo que estejam em domínios diferentes. Isso é útil quando você tem, por exemplo, um site que precisa acessar uma API que está em um domínio diferente
npm i cors

// Adiciona um script 'dev' ao package.json que inicia o servidor com o nodemon
"dev": "nodemon src/server.js"
