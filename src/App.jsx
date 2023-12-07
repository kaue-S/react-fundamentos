import Cabecalho from "./components/Cabecalho";
import Home from "./pages/home";
import Produtos from "./pages/produtos";
import Contato from "./pages/contato";
import Rodape from "./components/Rodape";
import Container from "./components/container";

function App() {
  return (
    <>
      <Cabecalho />
      
      <Container>
        <Home/>
        <Produtos/>
        <Contato/>
      </Container>
      <Rodape />

      {/* Comentario no meio do js é normal ficar entre {} nesta situação */}
    </>
  );
}

export default App;
