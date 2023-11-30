import estilo from "./cabecalho.module.css";

function Artigo() {
  return (
    <>
      <div className={estilo.artigo}>
        <article>
          <h3>Artigo 1</h3>
          <p>Conteudo do artigo 1.....</p>
        </article>
      </div>
    </>
  );
}

export default Artigo;
