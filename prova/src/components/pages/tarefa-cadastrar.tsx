import { useState } from "react";
import { Tarefa } from "../../models/Tarefa";

function TarefaCadastrar(){
    const[titulo, setTitulo] = useState("")
    const[descricao, setDescricao] = useState("")
    const[categoriaId, setCategoriaId] = useState("")
    const[status, setStatus] = useState("Não Iniciada")


function cadastrarTarefa(e: any){
    e.preventDefault();
        const tarefa : Tarefa = {
            titulo : titulo,
            descricao: descricao,
            categoriaId : categoriaId,
            status : status,
        };
          
        fetch("http://localhost:5000/tarefas/cadastrar",{
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
            <h1>Cadastrar Tarefa</h1>
            <form onSubmit={cadastrarTarefa}>
                <label>Título:</label>
                <input type="text" value={titulo} onChange={(e => setTitulo(e.target.value))} required />{" "}

                <label>Descrição:</label>
                <input type="text" value={descricao} onChange={(e => setDescricao(e.target.value))} required />{" "}

                <label>CategoriaId:</label>
                <input type="text" value={categoriaId} onChange={(e => setCategoriaId(e.target.value))} required />{" "}

                <button type="submit">Cadastrar Tarefa</button>
            </form>
        </div>
    );
}

export default TarefaCadastrar;