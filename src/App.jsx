import Cabecalho from "./components/Cabecalho";
import Home from "./pages/home";
import Produtos from "./pages/produtos";
import Contato from "./pages/contato";
import Rodape from "./components/Rodape";
import Container from "./components/container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalhesProduto from "./pages/DetalhesProduto";



function App() {
  return (
    <>
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <Routes>
          <Route Component={Home} exact path="/" />
          <Route Component={Produtos} path="/produtos" />
          <Route Component={DetalhesProduto} path="/produtos/:id" />
          <Route Component={Contato} path="/Contato" />
        </Routes>
      </Container>
      <Rodape />
      </BrowserRouter>

      {/* Comentario no meio do js é normal ficar entre {} nesta situação */}
    </>
  );
}

export default App;
