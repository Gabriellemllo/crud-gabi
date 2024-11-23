// Basicamente isso que é o que foi ensinado  de Banco de dados .

//"Const" é usada para declarar uma variável que tem um valor fixo, ou seja, uma constante de leitura.
// importando a variavel "connection"  require chama o caminho (./connection).
const connection = require('./connection')

// função getAllItems async
const getAllItems = async () => {
    try {
        // query é o campo de codigo do Mysql , Executa uma consulta SQL para buscar todos os registros da tabela 'book'.
        // essa Função na LOgica e no sentido do Crud seria ( Ler )- Read pois está inserindo dados . 
        const[query] = await connection.execute('SELECT * FROM teste_node.book')
        //
        return query
        // O else , mensagem de erro caso não funcione.
    } catch (error) {
        throw new Error(`Erro ao buscar itens: ${error.message}`)
    }
}
// async é uma função assicrona 
// Função async é um  tipo de função indepedente 
// E o await para pausar a execução e esperar que uma promise seja resolvida antes de continuar. - ( await sempre usado numa função async).
// O try & Cath é  como se fosse um if & Else.
// Parametro ( Title, author).
// essa Função na LOgica e no sentido do Crud seria ( Criar )- Create pois está inserindo dados . 
async function insertItem(title, author){
    try{
        // 
        const insertQuery = "INSERT INTO book (title, author) VALUES (?, ?)"
        const values = [title, author]
        // 
        const[result] = await connection.execute(insertQuery, values)
        return result
        // O else , mensagem de erro caso não funcione.
    } catch(error){
        throw new Error(`Erro ao inserir item: ${error.message}` )
    }
}

// essa Função na LOgica e no sentido do Crud seria ( Atualizar )-  UPDATE pois está inserindo dados . 
const updateItem = async (id, title, author) => {
    try {
        const updateQuery = "UPDATE book SET title = ?, author = ? WHERE id = ?";
        const values = [title, author, id];

        const [result] = await connection.execute(updateQuery, values);
        return result;
        // O else , mensagem de erro caso não funcione.
    } catch (error) {
        throw new Error(`Erro ao atualizar item: ${error.message}`);
    }
};


// essa Função na LOgica e no sentido do Crud seria ( Deletar )- Delete pois está inserindo dados . 

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

// Basicamente uma função para cada botão do CRUD , mas com a liguação ao banco de dados no MySql.
// Exporta as funções para que possam ser usadas em outros arquivos do projeto.
module.exports = { getAllItems, insertItem, updateItem, deleteItem };