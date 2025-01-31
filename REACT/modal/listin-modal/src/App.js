import React, { Component, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const VentanaModal = (props) => {
  const { className } = props;

  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    telefono: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <Modal isOpen={props.mostrar} toggle={props.toggle} className={className}>
        <ModalHeader toggle={props.toggle}>{props.titulo}</ModalHeader>
        <ModalBody>
          <FormGroup row>
            <Label sm={4}>Nombre:</Label>
            <Col sm={8}>
              <Input
                onChange={handleChange}
                id="nombre"
                name="nombre"
                type="text"
                value={formData.nombre}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={4}>Apellidos:</Label>
            <Col sm={8}>
              <Input
                onChange={handleChange}
                id="apellidos"
                name="apellidos"
                type="text"
                value={formData.apellidos}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={4}>Telefono:</Label>
            <Col sm={8}>
              <Input
                onChange={handleChange}
                id="telefono"
                name="telefono"
                type="text"
                value={formData.telefono}
              />
            </Col>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => props.aceptar(formData)}>
            {props.botonAceptar}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

const Altas = (props) => {
  // UTILICE HOOKS EN ESTE COMPONENTE
  return (
    <Form>
      <FormGroup>
        <Label for="Nombre">Nombre:</Label>
        <Input name="nombre" id="nombre" placeholder="introduzca

nombre"/>

        <Label for="Nombre">Apellidos:</Label>
        <Input name="apellidos" id="apellidos"

          placeholder="introduzca apellidos" />

        <Label for="Nombre">Telefono:</Label>
        <Input name="telefono" id="telefono" placeholder="introduzca

telefono" />
      </FormGroup>
      <Button>Añadir</Button>
    </Form>
  );

}

const Mostrar = (props) => {
  // ESTE COMPONENTE MUESTRA EL LISTÍN TELEFÓNICO.
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // INSERTE AQUÍ EL ESTADO NECESARIO. AQUÍ SE GUARDARÁ TODA LA INFORMACIÓN DE LA APLICACIÓN.EL LISTÍN TELEFÓNICO
      isOpen: false,
    };
  }

  setIsOpen(isOpen) {
    this.setState({ isOpen });
  }

  toggleModal() {
    this.setIsOpen(!this.state.isOpen);
  }

  render() {
    return (
      <div className="App">
        <Button ventana={() => this.toggleModal()}>Agregar contacto</Button>
        <VentanaModal
          aceptar={(datos) => this.aceptar(datos)}
          mostrar={this.state.isOpen}
          botonAceptar="Guardar"
          titulo="Agregar contacto"
        />
      </div>
    );
  }
}
export default App;