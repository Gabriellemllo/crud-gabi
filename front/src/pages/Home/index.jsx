import { useState, useEffect } from "react";
import api from "../../api";
// linkar o css.
import "./styles.css";

function Home() {
    //Estado para guardar o título do livro
    const [title, setTitle] = useState('');
    // Estado para guardar o autor do livro
    const [author, setAuthor] = useState('');
    // // Estado para guardar a lista de livros
    const [books, setBooks] = useState([]);
    // Para controlar a edição de um item
    const [editing, setEditing] = useState(null); 

    useEffect(() => {
        // Busca os livros ao montar o componente
        fetchBooks(); 
    }, []);

    // Função para buscar livros
    const fetchBooks = async () => {
        // o If & Else de uma Api ( previnir erro)
        try {
            const response = await api.get('/');
            setBooks(response.data);
        } catch (error) {
            console.error(`Error ao buscar dados: ${error}`);
        }
    };

    // Função para enviar novos dados ao banco
    async function handleSubmit(e) {
        e.preventDefault();

        try {
            if (editing) {
                // Atualiza um item existente

                await api.put(`updateItem/${editing.id}`, {
                    title,
                    author,
                });
                // Limpa a edição após atualizar
                setEditing(null); 
            } else {
                // Adiciona um novo item
                await api.post('/insertItem', {
                    title,
                    author,
                });
            }

            setTitle('');
            setAuthor('');
            fetchBooks(); // Atualiza a lista de livros

        } catch (error) {
            console.error('Erro ao inserir/atualizar dados: ', error);
        }
    }

    // Função para iniciar a edição de um item
    const handleEdit = (book) => {
        setTitle(book.title);
        setAuthor(book.author);
        setEditing(book); // Define o item que está sendo editado
    };

    // Função para excluir um item
    const handleDelete = async (id) => {
        try {
            await api.delete(`/deleteItem/${id}`);
            // Atualiza a lista de livros após exclusão
            fetchBooks(); 
        } catch (error) {
            console.error('Erro ao excluir dados: ', error);
        }
    };

    return (
        <div>
            <h1>{editing ? 'Editar Item' : 'Inserir Novo Item'}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título: </label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Autor: </label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <button type="submit">{editing ? 'Atualizar' : 'Inserir'}</button>
                {editing && <button type="button" onClick={() => setEditing(null)}>Cancelar</button>}
            </form>

            <h1>Tabela de Livros</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            //Exibe o ID do livro
                            <td>{book.id}</td>
                            // Exibe o título do livro
                            <td>{book.title}</td>
                            // Exibe o autor do livro
                            <td>{book.author}</td>
                            <td>
                                // Botão para ativar o modo de edição
                                <button onClick={() => handleEdit(book)}>Editar</button>
                                <button onClick={() => handleDelete(book.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

//Exporta o componente para ser usado em outras partes da aplicação
export default Home;
