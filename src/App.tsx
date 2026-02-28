import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import React, { useEffect, useState } from "react";

interface Task {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}


const App = () => {
  const [tasks, setTasks] = useState<Task[]>(
    JSON.parse(localStorage.getItem("tasks") || "[]") //pega o item do local storage, se for vazio guarda lista vazia
  );


  //useEffect é um hook que executa efeitos colaterais
  //neste caso, sempre que atualizar o state de task = atualizar o local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)) //converte task (lista de objetos) em json
  }, [tasks])



  function onTaskClick(taskId: number): void {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted }; //retorna tudo da task e o inverso de isCompleted
      }
      return task;
    });
    setTasks(newTasks);
  }


  let nextId = tasks.length + 1; //id da próxima tarefa, para garantir que seja unico

  function onAddTaskSubmit(title: string, description: string): void {
    const newTask: Task = {
      id: nextId,
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]); //... significa que vai manter tudo que tem em tasks, mais o que vem depois da virgula
  }

  function onDeleteTaskClick(taskId: number): void {
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
