import { useState } from "react";
import { Tarefa } from "../../models/Tarefa";

function TarefaCadastrar(){

    const[nome, setNome] = useState("")
    const[nome, setNome] = useState("")
    const[nome, setNome] = useState("")
    const[nome, setNome] = useState("")
    const[nome, setNome] = useState("")
    const[nome, setNome] = useState("")
    const[nome, setNome] = useState("")
    const[nome, setNome] = useState("")
    const[descricao, setDescricao] = useState("")
    const[quantidade, setQuantidade] = useState("")
    const[valor, setValor] = useState("")

function cadastrarProduto(e: any){
    e.preventDefault();
        const produto : Produto = {
            nome: nome,
            descricao: descricao,
            quantidade: Number(quantidade),
            valor: Number(valor),
        };
          
        fetch("http://localhost:5143/produto/cadastrar", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(produto)
        })
            .then((resposta) => resposta.json())
            .then((produto : Produto[]) => {
               setNome("");
                
            });
        }

    return (
        <div>
            <h1>Cadastrar Produto</h1>
            <form onSubmit={cadastrarProduto}>
                <label>Nome:</label>
                <input type="text" onChange={(e => setNome(e.target.value))} required />{" "}

                <label>Descrição:</label>
                <input type="text" value={descricao} onChange={(e => setDescricao(e.target.value))} required />{" "}

                <label>Quantidade:</label>
                <input type="text"  value={quantidade} onChange={(e => setQuantidade(e.target.value))} required />{" "}

                <label>Valor:</label>
                <input type="text"  value={valor} onChange={(e => setValor(e.target.value))} required />{" "} 

                <button type="submit">Cadastrar Produto</button>
            </form>
        </div>
    );
}

export default TarefaCadastrar;