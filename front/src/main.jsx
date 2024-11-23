// Importa o StrictMode do React para ativar verificações adicionais durante o desenvolvimento.
import { StrictMode } from 'react'
// Importa o método createRoot do ReactDOM para criar a raiz da aplicação.
import { createRoot } from 'react-dom/client'
// Importa o componente principal da aplicação, que contém toda a lógica e os componentes filhos.
import App from './App.jsx'
// Importa o arquivo de estilos globais .
import './index.css'

// Seleciona o elemento HTML com o id 'root' e renderiza o componente App dentro dele.
createRoot(document.getElementById('root')).render(
  // Envolve o componente principal App no StrictMode para detectar problemas e boas práticas.
  <StrictMode>
    <App />
  </StrictMode>,
)