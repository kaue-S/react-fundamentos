import styled from "styled-components";
import Artigo from "./artigo";

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

  const data = ["01/01/2000", "31/12/1950", "15/07/2019"];

  return (
    <StyledConteudo>
      <h2>Teste</h2>
      <section>
        <h2>Conteúdo da aplicação</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic
          nostrum velit dignissimos odio architecto!
        </p>

        <StyledDiv>
          <Artigo icone="🎬" titulo="Senhor dos Anéis" descricao="Livro criado por J.R.R. Tokien" data={data[0]}/>
          <Artigo icone="🎩" titulo="Game of Thrones" descricao="Aventura maluca com gente sempre morrendo" data={data[1]}/>
          <Artigo icone="🎡" titulo="HTML5 e CSS3" descricao="Fonte de estudos para quem quer começar no front end" data={data[2]}/>
        </StyledDiv>
      </section>
    </StyledConteudo>
  );
}

export default Conteudo; 
