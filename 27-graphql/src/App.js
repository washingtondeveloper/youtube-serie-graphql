import React from "react";

import Form from "./components/Form";
import Contatos from "./components/Contatos";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Header text="Contatos" />
      <main className="main">
        <Form />
        <Contatos />
      </main>
    </div>
  );
}

export default App;
