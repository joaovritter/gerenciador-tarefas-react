import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

//interface para definir o tipo de uma interface
interface Task {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;

}

//interface para props do componente Tasks
interface TasksProps {
  tasks: Task[],
  onTaskClick: (taskId: number) => void,
  onDeleteTaskClick: (taskId: number) => void,
}

const Tasks: React.FC<TasksProps> = ({ tasks, onTaskClick, onDeleteTaskClick }) => { //props permite passar dados de um componente pai para um componente filho
  const navigate = useNavigate();


  function onSeeDetailsClick(task: Task) {
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
            className={`p-2 rounded-md w-full text-left flex items-center gap-2 text-white ${task.isCompleted ? "bg-green-500" : "bg-slate-400"
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
            className="bg-red-600 p-2 rounded-md text-white"
          >
            <TrashIcon />
          </button>

        </li>
      ))}
    </ul>
  );
}

export default Tasks;
