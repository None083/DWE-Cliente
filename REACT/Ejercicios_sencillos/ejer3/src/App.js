import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

function App() {
  const [estado, setEstado] = useState(false);

  const toggleModal = () => setEstado(!estado);

  return (
    <div className="App">
      <Button id='popover1' color="danger" onClick={toggleModal}>Click me</Button>
      <VentanaPop target="popover1" isOpen={estado} toggle={toggleModal} />
    </div>
  );
}

function VentanaPop(props) {
  return (
    <Popover isOpen={props.isOpen} target={props.target} toggle={() => props.toggle}>
      <PopoverHeader>
      Términos y condiciones
      </PopoverHeader>
      <PopoverBody>
        Muchos términos y muchas condiciones.
      </PopoverBody>
    </Popover>
  );
}

export default App;
