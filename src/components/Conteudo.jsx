import styled from "styled-components";
import Artigo from "./artigo";
import cursos from "../api/cursos.js";
import { useState } from "react";


// importando imagens


const StyledConteudo = styled.main`
  

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
    padding: 5px;
    cursor: pointer;
  }

  .centralizar{
    text-align: center;
  }
`;

const StyledDiv = styled.div`
  @media (min-width: 650px) {
    display: flex;
   
    justify-content: space-evenly;
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

  //Gerando um novo array de cursos filtrados
  const cursosFiltrados = cursos.filter( (curso) => {
    return curso.categoria === categoria || categoria === null;
  });

  const limparFiltro = () => {
    setCategoria(null);
    
  }


  //Guardando a quantidade de cursos
  const quantidade = cursosFiltrados.length;

  return (
    <StyledConteudo>
      <section>
        <div className="centralizar">
        <h2>Conteúdo da aplicação</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic
          nostrum velit dignissimos odio architecto!
        </p>

        </div>

        <div className="filtros">
          <p>
            <b>Filtrar por: </b>
            <button onClick={aplicarFiltro}>Front-End</button>
            <button onClick={aplicarFiltro}>Back-End</button>
            <button onClick={aplicarFiltro}>Design</button>
            <button onClick={aplicarFiltro}>Mobile</button>
            <button onClick={aplicarFiltro}>Musica</button>
            <button onClick={aplicarFiltro}>Gastronomia</button>

            {categoria && (
              <button onClick={limparFiltro}>🧹 limpar filtros</button>
            )}

          </p>

          { categoria && (<p>Você escolheu: <b>{categoria}</b></p> )}

          { quantidade === 0 &&
            <p style={{color: "red", textAlign: "center"}}>Não há noticias desta categoria</p>
          }
          
          <p>Cursos encontrados: <b>{quantidade}</b></p>

        </div>




        <StyledDiv>
          {cursosFiltrados.map( curso => {
              
            return  <Artigo key={curso.id} titulo={curso.titulo} categoria={curso.categoria} preco={curso.preco} />
          })}
         
        
         
          
        </StyledDiv>
      </section>
    </StyledConteudo>
  );
}

export default Conteudo; 
