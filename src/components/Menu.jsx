import styled from "styled-components";

const StyledMenu = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    width: 30%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 100ms;
    border-radius: 10px;

    &:hover {
      background-color: #4747d3;  
      /* border: 2px solid white; */
      color: black;
      transform: scale(1.05);
    }
  }
`;

function Menu() {
  return (
    <StyledMenu>
      <a href="/">Home</a>
      <a href="/produtos">Produtos</a>
      <a href="/contato">Contato</a>
    </StyledMenu>
  );
}

export default Menu;
