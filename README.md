# React + Vite

## 🚀 O que é React?

React é uma biblioteca JavaScript para criar interfaces de usuário (UI) de forma dinâmica e eficiente. Desenvolvida pelo Facebook, ela permite construir aplicações web interativas com componentes reutilizáveis que se atualizam automaticamente quando os dados mudam.

## 📚 Conceitos Fundamentais do React

### **Componentes**

A base do React. São blocos de código reutilizáveis que retornam elementos JSX. Podem ser funções ou classes.

```jsx
function Botao() {
  return <button>Clique aqui</button>;
}
```

### **JSX**

Sintaxe que permite escrever HTML dentro de JavaScript. Torna o código mais legível e intuitivo.

```jsx
const elemento = <h1>Olá, Mundo!</h1>;
```

### **Props (Properties)**

São argumentos passados para componentes, permitindo compartilhar dados entre eles. Props são imutáveis.

```jsx
function Saudacao({ nome }) {
  return <h1>Olá, {nome}!</h1>;
}
```

### **State (Estado)**

Dados que podem mudar durante a vida útil do componente. Quando o estado muda, o componente re-renderiza automaticamente.

```jsx
const [contador, setContador] = useState(0);
```

### **Hooks**

Funções que permitem usar recursos do React em componentes funcionais:

- `useState`: Gerencia estado
- `useEffect`: Executa efeitos colaterais
- `useContext`: Acessa contexto global
- `useRef`: Cria referências mutáveis

### **Renderização Condicional**

Mostrar ou ocultar elementos com base em condições.

```jsx
{
  isVisivel && <p>Elemento visível</p>;
}
```

### **Listas e Keys**

Renderizar listas de elementos com a função `.map()`. Sempre usar `key` única para cada item.

```jsx
{
  tarefas.map((tarefa) => <li key={tarefa.id}>{tarefa.nome}</li>);
}
```

## 📋 Sobre Este Projeto

Este é um projeto de **Gerenciador de Tarefas** desenvolvido com React e Vite.

### Funcionalidades:

- ➕ **Adicionar tarefas** com um formulário simples
- 📝 **Visualizar lista** de tarefas
- ✅ **Marcar como concluída** (funcionalidade a desenvolver)
- ❌ **Deletar tarefas** (funcionalidade a desenvolver)

### Estrutura do Projeto:

```
src/
├── components/
│   ├── AddTasks.jsx      (Formulário para adicionar tarefas)
│   └── Tasks.jsx         (Exibição da lista de tarefas)
├── pages/
│   └── TaskPage.jsx      (Página principal)
├── assets/
│   └── App.jsx           (Componente principal)
└── main.jsx              (Ponto de entrada)
```

### Tecnologias Utilizadas:

- **React**: Biblioteca UI
- **Vite**: Bundler e servidor de desenvolvimento rápido
- **Tailwind CSS**: Framework de estilização utilitária
- **ESLint**: Análise de código

## 🛠️ Como Rodar o Projeto

```bash
npm install          # Instalar dependências
npm run dev          # Iniciar servidor de desenvolvimento
npm run build        # Fazer build para produção
```

O projeto rodará em `http://localhost:5173` com HMR (Hot Module Replacement) habilitado para desenvolvimento rápido.
