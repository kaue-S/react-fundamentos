import Menu from "./Menu";

// importação do styled components
import styled from "styled-components";

const StyledCabecalho = styled.header`
  background-color: black;
  color: white;
`;

function Cabecalho() {
  return (
    <StyledCabecalho>
      <h1>Olá React</h1>
      <hr />
      <Menu />
    </StyledCabecalho>
  );
}

export default Cabecalho;
