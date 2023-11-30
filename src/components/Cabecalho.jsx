import Menu from "./Menu";

// importação do módulo css como um objeto chamado estilos( pode ser qualquer nome)
import estilo from "./cabecalho.module.css";

function Cabecalho() {
  return (
    <header>
      <h1>
        <span className={estilo["destaque-texto"]}>Olá</span>
        <span className={estilo.sombra}>React</span>
      </h1>
      <hr />
      <p className={`${estilo["destaque-texto"]} centralizar`}>
        Classes combinadas
      </p>
      <Menu />
    </header>
  );
}

export default Cabecalho;
