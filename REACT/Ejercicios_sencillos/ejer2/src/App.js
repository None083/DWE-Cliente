import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function App() {
  const [estado, setEstado] = useState(false);

  const toggleModal = () => setEstado(!estado);

  return (
    <div className="App">
      <Button color="danger" onClick={toggleModal}>Click me</Button>
      <VentanaModal isOpen={estado} toggle={toggleModal} />
    </div>
  );
}

function VentanaModal(props) {
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>Hola</ModalHeader>
      <ModalBody>
        Hola, ¿qué tal?
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={props.toggle}>Cerrar</Button>
        <Button color="primary">Guardar</Button>
      </ModalFooter>
    </Modal>
  );
}

export default App;
