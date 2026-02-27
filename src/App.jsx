import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import React, { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [] //pega o item do local storage, se for vazio guarda lista vazia
  );


  //useEffect é um hook que executa efeitos colaterais
  //neste caso, sempre que atualizar o state de task = atualizar o local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)) //converte task (lista de objetos) em json
  }, [tasks])



  //PARA CHAMAR API E PEGAR TEREFAS
  /*
  useEffect(() => {
    const fetchTasks = async () => {
      //chamar api
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
        method: 'GET'
      });
      //pegar dados que ela retorna
      const data = await response.json();
      console.log(data);

      //armazenar/persistir os dados
      setTasks(data)
    };
    fetchTasks();

  }, []); //array vazio = executa apenas uma vez, quando o componente for montado

  */


  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //precisa atualizar esta tarefa
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted }; //retorna tudo da task e o inverso de isCompleted
      }
      //não precisa atualizar
      return task;
    });
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: tasks.length + 1, //qtd de tarefas atual +1, para o id ser unico
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]); //... significa que vai manter tudo que tem em tasks, mais o que vem depois da virgula
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl tex-slate-100 text-center font-bold text-white">
          Gerenciador de Tarefas
        </h1>

        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />

        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
