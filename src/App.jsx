function App() {
  return (
    <>
      <header>
        <h1>Olá React</h1>
        <hr />
        <nav>
          <a href="">Home</a>
          <a href="">Produtos</a>
          <a href="">Contato</a>
        </nav>
      </header>

      {/* Comentario no meio do js é normal ficar entre {} nesta situação */}

      <main>
        <h2>Teste</h2>
        <section>
          <h2>Conteúdo da aplicação</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic
            nostrum velit dignissimos odio architecto!
          </p>

          <article>
            <h3>Artigo 1</h3>
            <p>Conteudo do artigo 1.....</p>
          </article>

          <article>
            <h3>Artigo 2</h3>
            <p>Conteudo do artigo 2.....</p>
          </article>

          <article>
            <h3>Artigo 3</h3>
            <p>Conteudo do artigo 3.....</p>
          </article>
        </section>

        <footer>
          <h2>Rodapé da aplicação</h2>
        </footer>
      </main>
    </>
  );
}

export default App;
