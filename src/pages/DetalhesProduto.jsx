import { useEffect } from "react";
import { useParams } from "react-router-dom";

function DetalhesProduto(){
    const {id} = useParams();

    useEffect( () => {
        const carregarDados = async () =>{
            try {
                const resposta = await fetch(`https://fakestoreapi.com/products/${id}`);
                const dados = await resposta.json();
                console.log(dados);
            } catch (error) {
                console.log("Erro ao carregar produtos: "+error);
    
            }
        }
        
        carregarDados();
    }, [id]);


    return <article>
            <h2>Título...</h2>
            <p><b>Categoria: </b>categoria...</p>
            <p><b>Preço: </b>preço...</p>
            <p>Descrição</p>
            <img src="" alt="" />
        </article>
}

export default DetalhesProduto;