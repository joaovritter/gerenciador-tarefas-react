# ⚛️ Estudos e Práticas em React

Este repositório reúne **anotações, conceitos fundamentais e exemplos práticos** desenvolvidos durante o estudo de React. O objetivo é consolidar o aprendizado, organizar os principais fundamentos da biblioteca e servir como material de consulta para evolução no desenvolvimento frontend.

---

## 🌱 O que é React

React é uma **biblioteca JavaScript para construção de interfaces de usuário**, baseada em componentes reutilizáveis e atualização eficiente da interface.

* Criado para construir interfaces modernas e dinâmicas
* Muito utilizado no desenvolvimento de aplicações web
* Baseado em componentes independentes
* Atualiza apenas partes necessárias da tela

---

## 🧭 SPA (Single Page Application)

* React é amplamente utilizado para criar **SPAs (Single Page Applications)**.
* Em uma SPA, a navegação acontece sem recarregar toda a página.
* Apenas o conteúdo necessário é atualizado dinamicamente.
* Isso proporciona maior fluidez e melhor experiência ao usuário.

---

## 🌐 React insere conteúdo no HTML

* O React renderiza os componentes dentro de um elemento raiz do HTML.
* Ele controla a interface através do **Virtual DOM**.
* Sempre que há mudança de estado, o React atualiza apenas o necessário na página.

---

## 🧩 JSX

* JSX é uma sintaxe que permite escrever **HTML dentro do JavaScript**.
* Facilita a criação de componentes visuais.
* O JSX é transformado em JavaScript puro durante a compilação.

## 🔷 TSX (TypeScript + JSX)

* TSX é a sintaxe usada quando combinamos React com TypeScript.
* A estrutura visual continua parecida com JSX, mas com tipagem estática.
* Permite tipar `props`, `state`, parâmetros de função e eventos.
* Ajuda a evitar erros comuns antes da execução do código.

Exemplo simples

```tsx
type SaudacaoProps = {
  nome: string;
};

function Saudacao({ nome }: SaudacaoProps) {
  return <h1>Olá, {nome}</h1>;
}
```

Comparação rápida:

* **JSX**: foco em simplicidade e velocidade inicial
* **TSX**: foco em segurança, manutenção e escalabilidade

Ambos seguem a mesma ideia de componentes e reatividade; a principal diferença é que TSX adiciona tipos.

### Regra importante

* Um componente JSX **só retorna um elemento raiz**.
* Caso necessário, pode-se usar `div`, `section` ou `<> </>` (Fragment).

---

## 🔄 States

State representa dados internos do componente.

Quando o state muda, o componente é renderizado novamente.

Permite interfaces dinâmicas e interativas.

Exemplo simples

```jsx
import { useState } from "react";

function Contador() {
  const [numero, setNumero] = useState(0);

  return (
    <button onClick={() => setNumero(numero + 1)}>
      {numero}
    </button>
  );
}
```

---

## 🪝 Hooks

* Hooks são funções especiais do React.
* Permitem usar recursos como **estado e ciclo de vida** em componentes funcionais.
* Tornam o código mais simples e reutilizável.

---

## 🎨 Tailwind CSS

* Tailwind é um **framework utilitário de CSS**.
* Permite estilizar diretamente no JSX usando classes prontas.
* Facilita padronização visual e rapidez no desenvolvimento.

---

## ⚡ Conceito de Reatividade

* React trabalha com **reatividade**.
* A interface responde automaticamente às mudanças de dados.
* Sempre que state ou props mudam, o React atualiza a tela.

---

## 📥 Props

Props são propriedades passadas de um componente pai para um componente filho.

Permitem reutilização e comunicação entre componentes.

São somente leitura dentro do componente que recebe.

Exemplo simples

```jsx
function Saudacao({ nome }) {
  return <h1>Olá, {nome}</h1>;
}

function App() {
  return <Saudacao nome="João" />;
}
```

Exemplo tipado em TSX

```tsx
type SaudacaoProps = {
  nome: string;
};

function Saudacao({ nome }: SaudacaoProps) {
  return <h1>Olá, {nome}</h1>;
}

function App() {
  return <Saudacao nome="João" />;
}
```

---

## 🔀 Props x Context

Props passam dados diretamente entre componentes.

Context permite compartilhar dados globais entre vários componentes.

Evita a necessidade de passar props manualmente por muitos níveis.

Exemplo simples com Context

```jsx
import { createContext, useContext } from "react";

const TemaContext = createContext("claro");

function Botao() {
  const tema = useContext(TemaContext);
  return <button>{tema}</button>;
}
```

---

## 🧵 Prop Drilling

* Prop drilling ocorre quando props precisam atravessar muitos componentes intermediários.
* Pode deixar o código difícil de manter.
* Geralmente resolvido com **Context API** ou outras soluções de estado global.

---

## 🪝 useEffect

* É um hook que executa **efeitos colaterais** em componentes.
* Ideal para **sincronizar o componente com sistemas externos** (como uma API).
* Execução: roda **após a renderização**.
* O **array de dependências** controla quando o efeito roda (ao montar, atualizar ou desmontar).

### Comportamentos do array de dependências

* `[]` (array vazio): Executa apenas uma vez, ao montar o componente (*componentDidMount*).
* `[variavel]`: Executa quando a variável muda (*componentDidUpdate*).
* **Sem array**: Executa em toda renderização.
* **Função de retorno**: Executa quando o componente é removido (*componentWillUnmount*).

### Exemplo simples

```jsx
import { useEffect, useState } from 'react';

function Exemplo() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log('Componente renderizado ou contador mudou');

    return () => {
      console.log('Componente será desmontado');
    };
  }, [contador]);

  return (
    <button onClick={() => setContador(contador + 1)}>
      {contador}
    </button>
  );
}
```

---

## 🧭 React Router (createBrowserRouter, RouterProvider)

O React Router é utilizado para gerenciar rotas e navegação em aplicações React, permitindo criar SPAs com múltiplas páginas sem recarregar o navegador.

* createBrowserRouter é usado para definir as rotas da aplicação.
* Nele configuramos caminhos (path) e quais componentes serão renderizados.
* RouterProvider é responsável por fornecer as rotas para toda a aplicação.
* Ele envolve a aplicação principal e ativa o sistema de navegação.

Exemplo simples

```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Sobre from "./Sobre";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/sobre", element: <Sobre /> }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

🚀 useNavigate

useNavigate é um hook do React Router usado para navegar entre rotas por código, sem precisar de links visuais.

* Permite redirecionar o usuário após ações (login, cadastro, envio de formulário).
* Funciona como uma navegação programática.
* Pode enviar o usuário para outra página ou voltar no histórico.

Exemplo simples

```jsx
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function entrar() {
    navigate("/dashboard");
  }

  return <button onClick={entrar}>Entrar</button>;
}
```

📂 Objetivo do Repositório

Consolidar conceitos fundamentais do React

Servir como base para exercícios práticos

Registrar evolução no aprendizado frontend

Manter um material organizado para revisões futuras
