import styled from "styled-components";
import Artigo from "./artigo"

// importando imagens
import imagem1 from "../assets/abra-o-livro.png";
import imagem2 from "../assets/livro-magico.png";
import imagem3 from "../assets/pilha-de-livros.png";

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
          <Artigo 
           imagem={imagem1} icone="🎬" titulo="Senhor dos Anéis" descricao="Livro criado pelo escritor J.R.R. Tokien" data={data[0]}>
           <h4>Volumes</h4>
           <ul>
            <li>A sociedade do Anel</li>
            <li>As Duas Torres</li>
            <li>O retorno</li>
           </ul>
          </Artigo>

          <Artigo 
           imagem={imagem2} icone="🎩" titulo="Game of Thrones" descricao="Aventura maluca com gente sempre morrendo" data={data[1]}>
           <h4>Defuntos do livro</h4>
           <ol>
            <li>Aquele cara Stark</li>
            <li>Outra pessoa importante</li>
            <li>Mais uma pessoa importante</li>
           </ol>
          </Artigo>

          <Artigo 
           imagem={imagem3} icone="🎡" titulo="HTML5 e CSS3" descricao="Fonte de estudos para quem quer começar no front end" data={data[2]}>
           <h4>Assuntos</h4>

           <details>
            <summary>Estrutura</summary>
            <p>HTML5 para estruturar e etc...</p>
           </details>

           <details>
            <summary>Estilização</summary>
            <p>CSS3 para formatar e etc...</p>
           </details>
          </Artigo>
        </StyledDiv>
      </section>
    </StyledConteudo>
  );
}

export default Conteudo; 
