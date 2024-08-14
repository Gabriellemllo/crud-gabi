const connection = require('./connection')


const getAllItems = async () => {
    try {
        const[query] = await connection.execute('SELECT * FROM teste_node.book')
        return query
    } catch (error) {
        throw new Error(`Erro ao buscar itens: ${error.message}`)
    }
}

async function insertItem(title, author){
    try{
        const insertQuery = "INSERT INTO book (title, author) VALUES (?, ?)"
        const values = [title, author]

        const[result] = await connection.execute(insertQuery, values)
        return result
    } catch(error){
        throw new Error(`Erro ao inserir item: ${error.message}` )
    }
}

// Atualizar
const updateItem = async (id, title, author) => {
    try {
        const updateQuery = "UPDATE book SET title = ?, author = ? WHERE id = ?";
        const values = [title, author, id];
        const [result] = await connection.execute(updateQuery, values);
        return result;
    } catch (error) {
        throw new Error(`Erro ao atualizar item: ${error.message}`);
    }
};

// Para deletar
const deleteItem = async (id) => {
    try {
        const deleteQuery = "DELETE FROM book WHERE id = ?";
        const values = [id];
        const [result] = await connection.execute(deleteQuery, values);
        return result;
    } catch (error) {
        throw new Error(`Erro ao excluir item: ${error.message}`);
    }
};


module.exports = { getAllItems, insertItem, updateItem, deleteItem };