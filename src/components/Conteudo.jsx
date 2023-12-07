import styled from "styled-components";
import Artigo from "./artigo";
import cursos from "../api/cursos.js";
import { useState } from "react";


// importando imagens


const StyledConteudo = styled.main`
  width: 100vw;
  margin: 1rem auto;
  background-color: aliceblue;
  padding: 1rem;
  box-shadow: darkblue 0 0 1px inset;

  h2,
  p {
    padding: 0.2rem 0;
  }

  .filtros{
    margin: 1rem 0;
    padding: 1rem 0;
    border-top: solid 2px;
    border-bottom: solid 2px;
    text-align: center;
    
  }

  .filtros button{
    margin: 0.5rem;
    font-size: 1.1rem;
  }
`;

const StyledDiv = styled.div`
  @media (min-width: 650px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /* width: 20%; */
  }
`;

function Conteudo() {
  //criando um gerenciador de state para mudança/filtro de categorias. Inicialmente, começa como null pois ainda não temos uma escolha de categoria
  const [categoria, setCategoria] = useState(null);

  const aplicarFiltro = (event)=>{
    //Capturamos (após o clique) o texto escrito em cada botão
    const categoriaEscolhida = event.currentTarget.innerText;

    //E em seguida passamos este texto para o state categoria
    setCategoria(categoriaEscolhida);
  };

  return (
    <StyledConteudo>
      <section>
        <h2>Conteúdo da aplicação</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic
          nostrum velit dignissimos odio architecto!
        </p>

        <div className="filtros">
          <p>
            <b>Filtrar por: </b><button onClick={aplicarFiltro}>Front-End</button>
            <b>Filtrar por: </b><button onClick={aplicarFiltro}>Back-End</button>
            <b>Filtrar por: </b><button onClick={aplicarFiltro}>Design</button>
          </p>

          { categoria && <p>Você escolheu: {categoria}</p> }

        </div>


        <StyledDiv>
          {cursos.map( curso => {
              
            return  <Artigo key={curso.id} titulo={curso.titulo} categoria={curso.categoria} preco={curso.preco} />
          })}
         
        
         
          
        </StyledDiv>
      </section>
    </StyledConteudo>
  );
}

export default Conteudo; 
