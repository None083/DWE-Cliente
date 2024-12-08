import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Toast, ToastHeader, ToastBody } from 'reactstrap';

function App() {
  const [estado, setEstado] = useState(false);

  const toggleModal = (color) => {
    setEstado(color)};

  return (
    <div className="App">
      <Button id='toast1' color="success" onClick={() => toggleModal("bg-success")}>Click me</Button>
      <Button id='toast1' color="danger" onClick={() => toggleModal("bg-danger")}>Click me</Button>
      <Button id='toast1' color="warning" onClick={() => toggleModal("bg-warning")}>Click me</Button>
      <VentanaToast target="toast1" isOpen={estado} toggle={()=>toggleModal(false)} />
    </div>
  );
}

function VentanaToast(props) {
  return (
    <div className={props.isOpen}>
    <Toast isOpen={props.isOpen} >
    <ToastHeader toggle={props.toggle}>
      Toast title
    </ToastHeader>
    <ToastBody>
      <Contenido isOpen={props.isOpen}></Contenido>
    </ToastBody>
  </Toast>
  </div>
  );
}

function Contenido(props) {
  if (props.isOpen == "bg-success") {
    return(
      <p>Texto verde</p>
    )
  }else if(props.isOpen == "bg-danger"){
    return(
      <p>Texto rojo</p>
    )
  }else if(props.isOpen == "bg-warning"){
    return(
      <p>Texto amarillo</p>
    )
  }
}

export default App;
