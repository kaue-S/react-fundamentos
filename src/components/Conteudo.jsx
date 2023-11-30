import Artigo from "./artigo";
import estilo from "./cabecalho.module.css";

function Conteudo() {
  return (
    <main>
      <section className={estilo.centralizar}>
        <h2>Conteúdo da aplicação</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic
          nostrum velit dignissimos odio architecto!
        </p>

        <Artigo />
        <Artigo />
        <Artigo />
      </section>
    </main>
  );
}

export default Conteudo;
