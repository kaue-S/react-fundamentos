import styled from "styled-components";
import Artigo from "./artigo";
import cursos from "../../api/cursos.js";


// importando imagens


const StyledConteudo = styled.main`
  width: 90vw;
  margin: 1rem auto;
  background-color: aliceblue;
  padding: 1rem;
  box-shadow: darkblue 0 0 1px inset;

  h2,
  p {
    padding: 0.2rem 0;
  }
`;

const StyledDiv = styled.div`
  @media (min-width: 650px) {
    display: flex;
    justify-content: space-around;
  }
`;



function Conteudo() {
  
  return (
    <StyledConteudo>
      <section>
        <h2>Conteúdo da aplicação</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic
          nostrum velit dignissimos odio architecto!
        </p>

        <StyledDiv>
          {cursos.map( (curso) => {
              
            return  <Artigo/>
          })}
         
        
         
          
        </StyledDiv>
      </section>
    </StyledConteudo>
  );
}

export default Conteudo; 
