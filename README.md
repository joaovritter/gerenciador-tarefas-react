# ⚛️ React

## 🚀 O que é React?

React é uma biblioteca JavaScript focada na construção de interfaces de usuário (UI) de forma declarativa, eficiente e baseada em componentes reutilizáveis.
Ele é amplamente utilizado para desenvolver **Single Page Applications (SPA)**, onde a navegação acontece sem recarregar a página inteira, proporcionando uma experiência mais rápida e fluida ao usuário.

Em vez de manipular o DOM diretamente, o React utiliza um **modelo declarativo** e um **Virtual DOM**, atualizando apenas as partes necessárias da interface quando os dados mudam.

---

## 📚 Conceitos Fundamentais do React

### **Componentes**

São a base de qualquer aplicação React.
Componentes são blocos reutilizáveis de código que retornam elementos JSX e representam partes da interface.

```jsx
function Botao() {
  return <button>Clique aqui</button>;
}
```

---

### **JSX**

JSX é uma sintaxe que permite escrever estruturas semelhantes a HTML dentro do JavaScript.
Ele facilita a leitura e a organização da UI dentro dos componentes.

```jsx
const elemento = <h1>Olá, Mundo!</h1>;
```

### **TSX (TypeScript + JSX)**

TSX é JSX com tipagem estática do TypeScript.
Com TSX, além da UI, também tipamos `props`, `state`, eventos e funções, aumentando previsibilidade do código e reduzindo erros em tempo de desenvolvimento.

Exemplo simples:

```tsx
type BotaoProps = {
  texto: string;
};

function Botao({ texto }: BotaoProps) {
  return <button>{texto}</button>;
}
```

Comparação rápida:

- **JSX**: mais simples para começar e prototipar
- **TSX**: adiciona segurança de tipos e melhor manutenção em projetos que crescem

---

### **Renderização Condicional**

Permite exibir elementos com base em condições lógicas.

```jsx
{
  isVisivel && <p>Elemento visível</p>;
}
```

---

### **Listas e Keys**

Listas são renderizadas geralmente com `.map()`.
Cada item precisa de uma **key única** para que o React identifique mudanças corretamente.

```jsx
{
  tarefas.map((tarefa) => <li key={tarefa.id}>{tarefa.nome}</li>);
}
```

---

## 🧠 Sobre Este Repositório

Este repositório foi criado para **estudos de React**, com foco em:

- Praticar conceitos fundamentais da biblioteca
- Estruturar projetos pequenos para aprendizado progressivo
- Testar organização de componentes e páginas
- Consolidar conhecimentos em SPA com React

Existe também um arquivo separado chamado **`conceitosTecnicos`**, onde são documentadas funções, padrões e aprendizados específicos adquiridos durante os estudos.

---

## 📋 Sobre o Projeto Atual

O projeto incluído neste repositório é um **Gerenciador de Tarefas** simples, desenvolvido para praticar conceitos básicos do React.

### Funcionalidades

- ➕ Adicionar tarefas por formulário
- 📝 Visualizar lista de tarefas
- 📑 Detalhar tarefas
- ✅ Marcar como concluída
- ❌ Excluir tarefas

---

### Estrutura do Projeto

```
src/
├── components/
│   ├── AddTasks.tsx
│   ├── Input.tsx
│   └── Tasks.tsx
├── pages/
│   └── TaskPage.tsx
├── App.tsx
├── ExemploApp.tsx
└── main.tsx
```

---

### Tecnologias Utilizadas

- React
- TypeScript (TSX)
- Vite
- Tailwind CSS
- ESLint

---

## 🛠️ Como Rodar o Projeto

```bash
npm install
npm run dev
npm run build
```

O projeto será iniciado em:

```
http://localhost:5173
```

com atualização automática em desenvolvimento (HMR).
