import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component, useState } from 'react';
import { Button, Modal, ModalBody, ModalHeader, FormGroup, Label, Col, Input, ModalFooter } from 'reactstrap';

const Mostrar = (props) => {
  // ESTE COMPONENTE MUESTRA EL LISTÍN TELEFÓNICO.
  return (
    <ul>
      {props.elementos.map((e) => (
        <li>
          {e.nombre}-{e.telefono + "  "}<Button onClick={() => props.borrarUsuario(e)}>x</Button>
        </li>
      ))}
    </ul>
  );
};


const VentanaModalListin = (props) => {
  const {
    className
  } = props;
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleChange = (event) => {
    if (event.target.name == "nombre") {
      setNombre(event.target.value.toUpperCase())
    }
    if (event.target.name == "telefono") {
      setTelefono(event.target.value)
    }

  }
  const click = () => {
    if (props.listaUsuarios.find(u => u.telefono === telefono) !== undefined) {
      setMensaje("No puedes guardar un nuevo contacto con un teléfono existente.")
    } else {
      props.insertaPersona(nombre, telefono)
      setNombre("")
      setTelefono("")
      setMensaje("")
      props.toggle();
    }
  }

  return (
    <div>
      <Modal isOpen={props.mostrar} toggle={props.toggle} className={className} onEntering={() => { }}>
        <ModalHeader toggle={props.toggle}>{props.titulo}</ModalHeader>
        <ModalBody>


          <FormGroup row>
            <Label sm={2} > Nombre: </Label>
            <Col sm={10}>
              <Input onChange={handleChange}
                id="nombre"
                name="nombre"
                type="Text" />
            </Col>
          </FormGroup>


          <FormGroup row>
            <Label sm={2} > Teléfono: </Label>
            <Col sm={10}>
              <Input onChange={handleChange}
                id="telefono"
                name="telefono"
                type="Text" />
            </Col>
            <span id="mensaje" name="mensaje">{mensaje}</span>
          </FormGroup>


        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => click()}>{props.aceptar}</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </ModalFooter>
      </Modal>
    </div>


  );
}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // INSERTE AQUÍ EL ESTADO NECESARIO. AQUÍ SE GUARDARÁ TODA LA INFORMACIÓN
      listaUsuarios: [{ nombre: "fulano", telefono: "1232546456" }, { nombre: "mengano", telefono: "343" }],
      isOpen: false,
    };
  }

  borrarUsuario = (usuario) => {
    let nuevaLista = this.state.listaUsuarios.filter(u => u.nombre !== usuario.nombre || u.telefono !== usuario.telefono);
    this.setState({ listaUsuarios: nuevaLista });
  }


  setIsOpen(d) {
    if (d == undefined) return;
    this.setState({ isOpen: d })
  }


  toggleModal() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  insertaPersona(n, t) {
    let p = this.state.listaUsuarios;
    let newp = { nombre: n, telefono: t };

    p.push(newp);
    this.setState({ listaUsuarios: p });
  }

  render() {
    return (
      <div className="App">
        <Mostrar elementos={this.state.listaUsuarios} borrarUsuario={this.borrarUsuario} />
        <Button color="primary" onClick={() => { this.toggleModal() }}> Alta Usuario </Button>
        <VentanaModalListin
          listaUsuarios={this.state.listaUsuarios}
          insertaPersona={(nombre, telefono) => this.insertaPersona(nombre, telefono)}
          mostrar={this.state.isOpen}
          toggle={() => this.toggleModal()}
          aceptar={"Alta usuario"}
        />
      </div>
    );
  }
}

export default App;