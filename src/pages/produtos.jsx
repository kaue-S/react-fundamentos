import { useEffect } from "react";
import { useState } from "react";
import imagemLoading from "../assets/loading.svg";
import { Link } from "react-router-dom";

function Produtos() {
  // o state "produtos" é iniciado com um array vazio. posteriormente (após o carregamento dos dados da api), ele será preenchido com os objetos/produtos

  const [produtos, setProdutos] = useState([]);

  //state de loading
  const [loading, setLoading] = useState(true);

  // Gerenciando o efeito colateral do componente para o carregamento dos dados da API

  //Fluxo geral do funcionamento do codigo abaixo:
  // 1- useEffect é carregado UMA vez e após a montagem da page (produtos no caso)
  // 2- em seguida ele executa a função carregaDados
  // 3- Ao término dela, atualiza o state(produtos)

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const resposta = await fetch(`https://fakestoreapi.com/products`);
        const dados = await resposta.json();
        console.log(dados);
        setProdutos(dados); //adicionamos o state
        setLoading(false); //desativamos o loading
      } catch (error) {
        console.error("houve um erro: " + error);
      }
    };

    carregarDados();
  }, []);

  return (
    <article>
      <h2>Produtos</h2>

      {loading ? (
        <p style={{textAlign: "center"}}>
          <img src={imagemLoading} alt="" />
        </p>
      ) : (
        produtos.map((produto) => {
          return (
            <section key={produto.id}>
              <h3>{produto.title}</h3>
              <b>Preço: {produto.price}</b>
              <p>
                <b>descrição:</b> {produto.description}
              </p>
              <p><Link to={`/produtos/${produto.id}`}> Ver detalhes</Link></p>
              <br />
            </section>
          );
        })
      )}
    </article>
  );
}

export default Produtos;

//
