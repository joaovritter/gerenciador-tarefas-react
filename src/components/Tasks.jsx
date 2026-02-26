import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";


function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) { //props permite passar dados de um componente pai para um componente filho
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);

  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">

      {tasks.map((task) => ( //para cada task renderiza uma li
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)} //id da tarefa atual
            className={`bg-slate-400 text-white p-2 rounded-md w-full text-left flex items-center gap-2
                ${task.isCompleted && "line-through" //se tarefa concluida, poe linha
              }`}
          >
            {task.isCompleted && <CheckIcon />}
            {task.title}
          </button>


          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <ChevronRightIcon />
          </button>



          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <TrashIcon />
          </button>

        </li>
      ))}
    </ul>
  );
}

export default Tasks;
