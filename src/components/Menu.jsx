import estilo from "./cabecalho.module.css";

function Menu() {
  return (
    <nav className={estilo.menu}>
      <a href="">Home</a>
      <a href="">Produtos</a>
      <a href="">Contato</a>
    </nav>
  );
}

export default Menu;
