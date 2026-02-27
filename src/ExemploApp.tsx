import { useState } from "react";

const App: React.FC = () => {

  //JSX - Sintaxe que mistura JavaScript com HTML para facilitar a criação de componentes visuais

  //State (Estado) - Gerenciamento de dados dinâmicos dentro do componente

  //qual a diferença entre state e variável comum?  State é reativo, ou seja, quando o valor do state muda, o componente re-renderiza 
  // automaticamente para refletir as mudanças na interface do usuário. Já uma variável comum 
  // não tem essa capacidade de reatividade, e mudanças em seu valor não causam re-renderização do componente.
  //quando muda o estado, o componente re-renderiza automaticamente as mudanças na interface do usuário


  //props - Mecanismo para passar dados entre componentes (de pai para filho)
  //Permite que componentes filhos recebam dados e comportamentos do componente pai

  const [message, setMessage] = useState<string>("Olá Mundo"); //Hook useState para criar um estado chamado message com valor inicial "Ola Mundo"
  //message é o valor atual do estado, e setMessage é a função usada para atualizar esse valor.


  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => {
        setMessage("Olá, fui clicado!");
      }}>
        Mudar Mensagem</button>

    </div>
  )
}

export default App;