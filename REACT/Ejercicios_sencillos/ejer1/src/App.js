import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

function App() {
  const [estado, setEstado] = useState("");
  return (
    <div className="App">
      <Button color="danger" onClick={() => setEstado("rojo")}>Click me</Button>
      <Button color="primary" onClick={() => setEstado("azul")}>Click me</Button>
      <ColorAlerta estado={estado}></ColorAlerta>
    </div>
  );
}

function ColorAlerta(props) {
  if (props.estado == "azul") {
    return (
      <div class="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
    )
  } else if (props.estado == "rojo") {
    return (
      <div class="alert alert-danger" role="alert">
        A simple danger alert—check it out!
      </div>
    )
  }
}

export default App;
