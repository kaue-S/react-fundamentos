import styled from "styled-components";

const StyledArtigo = styled.article`
  background-color: #528dc0;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 24px;
  box-shadow: blue 0 0 20px inset;

  h3 {
    color: #043c61;
    border-bottom: 3px solid white;
    padding-bottom: 5px;
    width: 90px;
    text-align: center;
  }

  p {
    font-size: 1.1rem;
  }
`;

function Artigo() {
  return (
    <>
      <StyledArtigo>
        <h3>Artigo 1</h3>
        <p>Conteudo do artigo 1.....</p>
      </StyledArtigo>
    </>
  );
}

export default Artigo;
