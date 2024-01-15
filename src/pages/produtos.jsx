import { useState } from "react";

function Produtos(){
// o state "produtos" é iniciado com um array vazio. posteriormente (após o carregamento dos dados da api), ele será preenchido com os objetos/produtos


    const [produtos, setProdutos] = useState([]);

    const carregarDados = async () => {
        try {
            const resposta = await fetch(`https://fakestoreapi.com/products`);
            const dados = await resposta.json();
            console.log(dados);
            setProdutos(dados);
        } catch (error) {
            console.error("houve um erro: "+error);
        }
    }

    carregarDados();

    return <h2>Produtos</h2>;
    
}

export default Produtos;