import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';

function Contacto(props) {
  return(
    <li>{props.nombre} {props.apellido} - {props.telefono} <input type='submit' value='Borrar' onClick={()=>props.onBorrarContacto(props.telefono)}/></li>
  )
}

function ListaContactos(props) {
  return(
    <ul>{props.contactos.map(c => <Contacto nombre={c.nombre} apellido={c.apellido} telefono={c.telefono} onBorrarContacto={props.onBorrarContacto}/>)}</ul>
  )
}

function Formulario(props) {
  return(
    <form onSubmit={props.onAddContacto}>
      <input type='text' placeholder='Nombre' name='nombre'/>
      <input type='text' placeholder='Apellido' name='apellido'/>
      <input type='text' placeholder='Telefono' name='telefono'/>
      <input type='submit' value='Guardar'/>
    </form>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactos: [
        { nombre: "Pepita", apellido: "Gonzalez", telefono: "617718551" },
        { nombre: "Pepito", apellido: "Perez", telefono: "617718552" }
      ]
    }
  }

  handleOnAddContacto(event){
    event.preventDefault();
    let contacto = {nombre: event.target.nombre.value, apellido: event.target.apellido.value, telefono: event.target.telefono.value};
    let copiaContactos = this.state.contactos;
    copiaContactos.push(contacto);
    this.setState({contactos: copiaContactos});
    event.target.reset();
  }

  handleOnBorrarContacto(telefono){
    let copiaContactos = this.state.contactos.filter(c=> c.telefono != telefono);
    this.setState({contactos: copiaContactos});
  }

  render() {
    return (
      <div className="App">
        <h1>Contactos</h1>
        <ListaContactos contactos={this.state.contactos} onBorrarContacto={(t)=>this.handleOnBorrarContacto(t)} />
        <Formulario onAddContacto={(e)=>this.handleOnAddContacto(e)}/>
      </div>
    );
  }
}

export default App;