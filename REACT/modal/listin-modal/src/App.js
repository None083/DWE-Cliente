import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ListGroup,
  ListGroupItem,
  Alert,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const VentanaModal = (props) => {
  const { className, mostrar, toggle, aceptar, botonAceptar, titulo } = props;

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    telefono: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Modal isOpen={mostrar} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>{titulo}</ModalHeader>
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
          <Label sm={4}>Teléfono:</Label>
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
        <Button color="primary" onClick={() => aceptar(formData)}>
          {botonAceptar}
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const Mostrar = ({ contactos }) => {
  return (
    <div className="listin">
      <h3>Listín Telefónico</h3>
      <ListGroup>
        {contactos.length === 0 ? (
          <ListGroupItem>No hay contactos</ListGroupItem>
        ) : (
          contactos.map((contacto, index) => (
            <ListGroupItem key={index}>
              {contacto.nombre} {contacto.apellidos} - {contacto.telefono}
            </ListGroupItem>
          ))
        )}
      </ListGroup>
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // INSERTE AQUÍ EL ESTADO NECESARIO. AQUÍ SE GUARDARÁ TODA LA INFORMACIÓN DE LA APLICACIÓN.EL LISTÍN TELEFÓNICO
      isOpen: false,
      contactos: [],
    };
  }

  setIsOpen(isOpen) {
    this.setState({ isOpen });
  }

  toggleModal = () => {
    this.setIsOpen(!this.state.isOpen);
  }

  aceptar = (datos) => {
    let copiaLista = this.state.contactos;
    if (copiaLista.find(c => c.telefono === datos.telefono) !== undefined) {
      alert("No se puede agregar un número de teléfono existente en el listín");
    } else {
      copiaLista.push(datos);
      this.setState({ contactos: copiaLista, isOpen: false });
    }
  }

  render() {
    return (
      <div className="App">
        <Button onClick={() => this.toggleModal()}>Agregar contacto</Button>
        <VentanaModal
          aceptar={this.aceptar}
          mostrar={this.state.isOpen}
          toggle={this.toggleModal}
          botonAceptar="Guardar"
          titulo="Agregar contacto"
        />
        <br />
        <Mostrar contactos={this.state.contactos} />
      </div>
    );
  }
}
export default App;