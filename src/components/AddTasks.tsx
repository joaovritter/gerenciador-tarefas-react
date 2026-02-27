import { useState } from "react";
import Input from "./Input";

//interface para definir tipos das props e seus argumentos 
interface AddTaskProps {
  onAddTaskSubmit: (title: string, description: string) => void;
}

// O componente funcional AddTasks espera receber as props da interface 
const AddTasks: React.FC<AddTaskProps> = ({ onAddTaskSubmit }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">

      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)} //atualiza o state conforme muda o input
      />

      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />


      <button
        onClick={() => {
          //verificar se titulo e descrição não estão vazios. Trim remove espaco em branco
          if (!title.trim() || !description.trim()) {
            alert("Preencha o título e a descrição da tarefa");
            return;
          }
          onAddTaskSubmit(title, description);
          setTitle(""); //limpa o input após adicionar a tarefa
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
};


export default AddTasks;

