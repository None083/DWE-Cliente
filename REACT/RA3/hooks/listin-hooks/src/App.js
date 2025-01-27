import React, { Component, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Altas = (props) => {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!nombre || !apellidos || !telefono) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    // Intentar agregar el contacto y verificar si se agregó correctamente
    const agregado = props.agregarContacto({ nombre: nombre, apellidos: apellidos, telefono: telefono });
    if (agregado) {
      setNombre("");
      setApellidos("");
      setTelefono("");
    }
  };

  return (
    <Form onSubmit={manejarEnvio}>
      <FormGroup>
        <Label for="Nombre">Nombre:</Label>
        <Input
          name="nombre"
          id="nombre"
          placeholder="introduzca nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <Label for="Apellidos">Apellidos:</Label>
        <Input
          name="apellidos"
          id="apellidos"
          placeholder="introduzca apellidos"
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
        />
        <Label for="Telefono">Teléfono:</Label>
        <Input
          name="telefono"
          id="telefono"
          placeholder="introduzca teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </FormGroup>
      <Button type="submit" color="primary">
        Añadir
      </Button>
    </Form>
  );
};

const Mostrar = (props) => {
  return (
    <div>
      <h3 className='mt-4'>Listín Telefónico</h3>
      <ul>
        {props.contactos.map((contacto, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
            {contacto.nombre} {contacto.apellidos} - {contacto.telefono}
            <Button color="danger" size="sm" className="ms-2" onClick={() => props.eliminarContacto(index)}>X</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactos: [],
    };
  }

  agregarContacto = (nuevoContacto) => {
    // Validar si el teléfono ya existe usando `find`
    const telefonoExistente = this.state.contactos.find(
      (contacto) => contacto.telefono === nuevoContacto.telefono
    );

    if (telefonoExistente) {
      alert("El teléfono ya está registrado en el listín telefónico.");
      return false; // No agregar el contacto
    }

    let copiaContactos = this.state.contactos;
    copiaContactos.push(nuevoContacto);
    this.setState({ contactos: copiaContactos });
    return true;
  };

  eliminarContacto = (index) => {
    let copiaContactos = this.state.contactos.filter((c, i) => i !== index);
    this.setState({ contactos: copiaContactos });
  };

  render() {
    return (
      <div className="App container mt-4">
        <h1>Gestor de Listín Telefónico</h1>
        <Altas agregarContacto={this.agregarContacto} />
        <Mostrar contactos={this.state.contactos} eliminarContacto={this.eliminarContacto} />
      </div>
    );
  }
}

export default App;
