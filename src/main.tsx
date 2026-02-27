import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskPage from "./pages/TaskPage";

//roteador baseado na API de história do navegador, que permite criar rotas para a aplicação React
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/task",
    element: <TaskPage />,
  },
]);


createRoot(document.getElementById("root") as HTMLElement).render( //insere a aplicação react no html com id 'root'

  //strictMode é utilizado para destacar problemas potenciais na aplicação
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
