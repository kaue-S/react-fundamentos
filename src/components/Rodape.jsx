function Rodape() {
  const exemploEstilos = {
    backgroundColor: "red",
    padding: "2%",
    textAlign: "center",
  };

  return (
    <footer style={exemploEstilos}>
      <h2>Rodapé da aplicação</h2>
      <p>Fundamentos de React</p>
      <p>
        Experimentando <b className="sombra">Classes</b>
      </p>
    </footer>
  );
}

export default Rodape;
