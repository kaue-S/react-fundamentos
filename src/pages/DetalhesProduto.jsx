import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Produtos from "./produtos";

function DetalhesProduto(){
    const [produto, setProduto] = useState({});
    const {id} = useParams();

    useEffect( () => {
        const carregarDados = async () =>{
            try {
                const resposta = await fetch(`https://fakestoreapi.com/products/${id}`);
                const dados = await resposta.json();
                setProduto(dados);
            } catch (error) {
                console.log("Erro ao carregar produtos: "+error);
    
            }
        }
        
        carregarDados();
    }, [id]);


    return <article>
            <h2>{produto.title}</h2>
            <p><b>Categoria: </b>{produto.category}</p>
            <p><b>Preço: </b>{produto.price} </p>
            <p> <b>Descrição:</b>{produto.description}</p>
            <img src={produto.image} alt="" style={{width: "300px"}}/>
        </article>
}

export default DetalhesProduto;