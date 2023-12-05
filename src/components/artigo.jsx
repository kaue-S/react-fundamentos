import styled from "styled-components";


const StyledArtigo = styled.article`
  background-color: #528dc0;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 24px;
  box-shadow: blue 0 0 5px inset;

  h3 {
    color: #043c61;
    border-bottom: 3px solid white;
    padding-bottom: 5px;
    text-align: center;
  }

  p {
    font-size: 1.1rem;
  }

  .centralizar {
    text-align: center;
  }
`;


function Artigo( {imagem, icone, titulo, descricao, data, children} ) {
  
  return (
    <>
      <StyledArtigo>
        <div className="centralizar">
          
          <img src={imagem} alt="" />
        </div>
        <h3><span>{icone}</span>{titulo}</h3>
        <p>{descricao}</p>
        <time>Data de lancamento: {data}</time>
        {children}
      </StyledArtigo>
    </>
  );
}

export default Artigo;
