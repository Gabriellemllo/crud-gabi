const express = require('express'); // Importa o Express para criar o servidor

const cors = require('cors'); // Importa o middleware para gerenciar permissões de origem cruzada (CORS)

const { getAllItems, insertItem, updateItem, deleteItem } = require('./allItems');
// Importa as funções para operações de banco de dados

const app = express(); // Inicializa o aplicativo Express
app.use(express.json()); // Middleware para processar requisições com JSON
app.use(cors()); // Ativa o CORS no servidor

const PORT = 3003; // Define a porta do servidor

// Inicia o servidor e exibe a mensagem no console
app.listen(PORT, () => {
    console.log(`Funcionando na porta ${PORT}`);
});

// Rota para obter todos os itens
app.get('/', async (req, res) => {
    try {
        const items = await getAllItems(); // Busca itens do banco
        res.status(200).json(items); // Retorna os itens com status 200
    } catch (error) {
        res.status(500).json({ error: error.message }); // Retorna erro com status 500
    }
});

// Rota para inserir um item
app.post('/insertItem', async (req, res) => {
    const { title, author } = req.body; // Obtém dados da requisição
    try {
        const result = await insertItem(title, author); // Insere item no banco
        res.status(201).json(result); // Retorna o resultado com status 201
    } catch (error) {
        res.status(500).json({ error: error.message }); // Retorna erro com status 500
    }
});

// Rota para atualizar um item
app.put('/updateItem/:id', async (req, res) => {
    const { id } = req.params; // Obtém ID da URL
    const { title, author } = req.body; // Obtém dados da requisição
    try {
        const result = await updateItem(id, title, author); // Atualiza item no banco
        res.status(200).json(result); // Retorna o resultado com status 200
    } catch (error) {
        res.status(500).json({ error: error.message }); // Retorna erro com status 500
    }
});

// Rota para excluir um item
app.delete('/deleteItem/:id', async (req, res) => {
    const { id } = req.params; // Obtém ID da URL
    try {
        const result = await deleteItem(id); // Remove item do banco
        res.status(200).json(result); // Retorna o resultado com status 200
    } catch (error) {
        res.status(500).json({ error: error.message }); // Retorna erro com status 500
    }
});