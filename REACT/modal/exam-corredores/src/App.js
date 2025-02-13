import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component, useState } from 'react';
import { Button, Table, Input, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Col } from 'reactstrap';

const Corredor = (props) => {
  const { className } = props;

  const [nombre, setNombre] = useState("");
  const [equipo, setEquipo] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'nombre') {
      setNombre(value);
    } else {
      setEquipo(value);
    }
  }

  return (
    <div>
      <Modal isOpen={props.mostrar} toggle={props.toggle} className={className} onEntering={() => { }} >
        <ModalHeader toggle={props.toggle}>AÑADIR CORREDOR</ModalHeader>
        <ModalBody>
          <FormGroup row>
            <Label sm={2}>Nombre: </Label>
            <Col sm={10}>
              <Input onChange={handleChange}
                id='nombre'
                name='nombre'
                type='text'
                value={nombre}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Equipo: </Label>
            <Col sm={10}>
              <Input onChange={handleChange}
                id='equipo'
                name='equipo'
                type='text'
                value={equipo}
              />
            </Col>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={() => props.agregarCorredor(nombre, equipo)}>AÑADIR CORREDOR</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

const Mostrar = (props) => {
  let filas = [];
  props.listaCorredores.map(c => {
    if (c.posicion === 1) {
      filas.push(<tr>
        <th scope='row'>{c.posicion}</th> <td>{c.nombre}</td> <td>{c.equipo}</td><td><Button onClick={() => props.cambiarPosicion(c.posicion, "bajar")}>DOWN</Button></td>
      </tr>);
    } else if (c.posicion === props.listaCorredores.length) {
      filas.push(<tr>
        <th scope='row'>{c.posicion}</th> <td>{c.nombre}</td> <td>{c.equipo}</td><td><Button onClick={() => props.cambiarPosicion(c.posicion, "subir")}>UP</Button></td>
      </tr>);
    } else {
      filas.push(<tr>
        <th scope='row'>{c.posicion}</th> <td>{c.nombre}</td> <td>{c.equipo}</td><td><Button onClick={() => props.cambiarPosicion(c.posicion, "subir")}>UP</Button><Button onClick={() => props.cambiarPosicion(c.posicion, "bajar")}>DOWN</Button></td>
      </tr>);
    }
    return (filas);
  });

  return (
    <>
      <Table>
        <thead>
          <tr><th>#</th><th>Nombre</th><th>Equipo</th><th>Posicion</th></tr>
        </thead>
        <tbody>
          {filas}
        </tbody>
      </Table>
    </>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      listaCorredores: []
    }
  }

  toggleModal() { this.setState({ isOpen: !this.state.isOpen }) }

  cambiarPosicion = (posicion, orden) => {
    let lista = [...this.state.listaCorredores];
    let index = lista.findIndex(c => c.posicion === posicion);
    let corredor = lista[index];
    if (orden === "bajar") {
      let corredorAnterior = lista[index + 1];
      corredor.posicion = posicion + 1;
      corredorAnterior.posicion = posicion;
      lista[index] = corredorAnterior;
      lista[index + 1] = corredor;
    } else {
      let corredorAnterior = lista[index - 1];
      corredor.posicion = posicion - 1;
      corredorAnterior.posicion = posicion;
      lista[index] = corredorAnterior;
      lista[index - 1] = corredor;
    }
    this.setState({ listaCorredores: lista });
  }

  agregarCorredor = (n, e) => {
    let lista = [...this.state.listaCorredores];
    let existe = lista.find(c => c.nombre === n);
    if (existe) {
      alert("El corredor ya existe");
    } else {
      lista.push({ nombre: n, equipo: e, posicion: lista.length + 1 });
      this.setState({ listaCorredores: lista });
      this.toggleModal();
    }
  }

  render() {
    return (
      <div className="App">
        <Mostrar
          listaCorredores={this.state.listaCorredores}
          cambiarPosicion={this.cambiarPosicion}
        />
        <Button onClick={() => { this.toggleModal() }} color='info'>ALTA CORREDOR</Button>
        <Corredor
          mostrar={this.state.isOpen}
          toggle={() => this.toggleModal()}
          agregarCorredor={this.agregarCorredor}
        />
      </div>
    );
  }
}

export default App;