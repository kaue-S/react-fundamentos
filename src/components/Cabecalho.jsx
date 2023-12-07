import Menu from "./Menu";

// importação do styled components
import styled from "styled-components";

const StyledCabecalho = styled.header`
  /* background-color: black; */
  background-image: linear-gradient(to top, #116cf3, #0086fc, #009cfe, #00b0fb, #12c2f5);
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  hr {
    width: 50%;
    background-color: #cfc2c2;
    border: none;
    height: 4px;
    margin: 8px auto;
  }
`;

function Cabecalho() {
  return (
    <StyledCabecalho>
      <h1 onClick={() => alert("Exemplo1")}>Olá React</h1>
      <hr />
      <Menu />
    </StyledCabecalho>
  );
}

export default Cabecalho;
