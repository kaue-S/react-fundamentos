import { useEffect } from "react";
import { useState } from "react";

function Produtos() {
  // o state "produtos" é iniciado com um array vazio. posteriormente (após o carregamento dos dados da api), ele será preenchido com os objetos/produtos

  const [produtos, setProdutos] = useState([]);
    // Gerenciando o efeito colateral do componente para o carregamento dos dados da API


    //Fluxo geral do funcionamento do codigo abaixo:
    // 1- useEffect é carregado UMA vez e após a montagem da page (produtos no caso)
    // 2- em seguida ele executa a função carregaDados
    // 3- Ao término dela, atualiza o state(produtos)

  useEffect( ()=>{

      const carregarDados = async () => {
        try {
          const resposta = await fetch(`https://fakestoreapi.com/products`);
          const dados = await resposta.json();
          console.log(dados);
          setProdutos(dados);
        } catch (error) {
          console.error("houve um erro: " + error);
        }
      };
    
      carregarDados();

  }, [] );

  return <h2>Produtos</h2>;
}

export default Produtos;
