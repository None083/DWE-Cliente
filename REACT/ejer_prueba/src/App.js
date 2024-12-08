import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [estado, setEstado] = useState(0);
  return (
    <div className="App">
      <p>Valor actual: {estado}</p>
      <BotonSumar value="sumar" valorActual={estado} cambiar={setEstado}></BotonSumar>
    </div>
  );
}
function BotonSumar(props) {
  function sumar() {
    props.cambiar(props.valorActual + 1);
  }
  return(
    <div>
      <button onClick={()=>sumar}>{props.value}</button>
    </div>
  )
}
export default App;
