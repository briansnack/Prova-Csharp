import { useEffect, useState } from "react";
import "./styles.css";
import { Tarefa } from "../../models/Tarefa";

function TarefaListar() {
  const[tarefas, setTarefas] = useState<Tarefa[]>([]);
  useEffect(() => {
    console.log("O componente foi carregado...");

    //FETCH ou AXIOS
    fetch("http://localhost:5000/tarefas/listar")
      .then((resposta) => resposta.json())
      .then((tarefas : Tarefa[]) => {
        setTarefas(tarefas);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>Criado Em</th>
            <th>CategoriaId</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map(tarefa =>(
          <tr key={tarefa.tarefaId}>
            <td>{tarefa.tarefaId}</td>
            <td>{tarefa.titulo}</td>
            <td>{tarefa.descricao}</td>
            <td>{tarefa.criadoEm}</td>
            <td>{tarefa.categoriaId}</td>
            <td>{tarefa.status}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TarefaListar;