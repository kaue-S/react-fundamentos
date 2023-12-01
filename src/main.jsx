// importações das libs essenciais (react e react DOM)
import React from "react";
import ReactDOM from "react-dom/client";

// Importação do primeiro/principal componente, arquivo em que carregamos os elementos da página (como se fosse um index/home)
import App from "./App.jsx";
import "./index.css";

// inicialização dos recursos do react, manipulando a div #root existewnte no inde.html
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
