import { useState } from "react";
import { Tarefa } from "../../models/Tarefa";

function TarefaAlterar(){
    const[tarefaId, setTarefaId] = useState("")
    const[titulo, setTitulo] = useState("")
    const[descricao, setDescricao] = useState("")
    const[categoriaId, setCategoriaId] = useState("")
    const[status, setStatus] = useState("")


function AlterarTarefa(e: any){
    e.preventDefault();
        const tarefa : Tarefa = {
            titulo : titulo,
            descricao: descricao,
            categoriaId : categoriaId,
            status : status,
            tarefaId : tarefaId,
        };
          
        fetch("http://localhost:5000/alterar{id}",{
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(tarefa)
        })
            .then((resposta) => resposta.json())
            .then((tarefa : Tarefa[]) => {
               setTitulo("");
                
            });
        }

    return (
        <div>
            <h1>Alterar Tarefa</h1>
            <form onSubmit={AlterarTarefa}>
                <label>TarefaId:</label>
                <input type="text" value={tarefaId} onChange={(e => setTitulo(e.target.value))} required />{" "}

                <label>Status:</label>
                <input type="text" value={status} onChange={(e => setCategoriaId(e.target.value))} required />{" "}

                <button type="submit">Alterar Tarefa</button>
            </form>
        </div>
    );
}

export default TarefaAlterar;