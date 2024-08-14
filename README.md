Para deixar o texto com uma formatação mais adequada no `README.md`, você pode usar blocos de código no estilo Markdown. Vou formatar novamente para você:

```markdown
# Passos para Configuração do Projeto Node.js

## 1. Inicializar um novo projeto Node.js
```bash
npm init -y
```

## 2. Instalar o Express
Instala o Express, um framework para Node.js que lida com solicitações HTTP e cria rotas:
```bash
npm i express
```

## 3. Instalar o MySQL2
Instala o mysql2, um módulo do Node.js para conexão com MySQL:
```bash
npm i mysql2
```

## 4. Instalar o Nodemon
Instala o nodemon, uma ferramenta que reinicia automaticamente a aplicação do Node quando detecta alterações de arquivo no diretório:
```bash
npm i nodemon
```

## 5. Instalar o CORS
Instala o CORS, uma maneira de permitir que um site acesse recursos de outro site, mesmo que estejam em domínios diferentes. Isso é útil, por exemplo, quando você tem um site que precisa acessar uma API em um domínio diferente:
```bash
npm i cors
```

## 6. Adicionar um script 'dev' ao package.json
Adiciona um script 'dev' ao `package.json` que inicia o servidor com o nodemon:
```json
"scripts": {
  "dev": "nodemon src/server.js"
}
```
```

Essa versão está mais organizada, com os comandos em blocos de código separados e títulos para cada seção. Isso deve ajudar a melhorar a leitura no `README.md` do seu repositório.
