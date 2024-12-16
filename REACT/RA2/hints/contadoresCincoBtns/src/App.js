import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Button } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // DEFINE AQUÍ TU ESTADO
      colores: Array(5).fill("secondary"),
      contadores: Array(5).fill(0)
    };
  }

  setSeleccionado(num){
    let coloresAux = this.state.colores;
    let contadoresAux = this.state.contadores;
    if (coloresAux[num] !== "danger") {
      coloresAux[num] = "danger";
      this.setState({colores:coloresAux});
    }
    contadoresAux[num] += 1;
    this.setState({contadores:contadoresAux});
  }
  // RENDERIZA AQUÍ LO QUE NECESITES
  render() {
    return (
      <div className="App">
        <Botoncillo color={this.state.colores[0]} contador={this.state.contadores[0]} onClick={() => this.setSeleccionado(0)} />
        <Botoncillo color={this.state.colores[1]} contador={this.state.contadores[1]} onClick={() => this.setSeleccionado(1)} />
        <Botoncillo color={this.state.colores[2]} contador={this.state.contadores[2]} onClick={() => this.setSeleccionado(2)} />
        <Botoncillo color={this.state.colores[3]} contador={this.state.contadores[3]} onClick={() => this.setSeleccionado(3)} />
        <Botoncillo color={this.state.colores[4]} contador={this.state.contadores[4]} onClick={() => this.setSeleccionado(4)} />
      </div>
    );
  }
}

function Botoncillo(props) {
  return (
    // MUESTRA AQUÍ EL BOTÓN CON EL COLOR CORRESPONDIENTE
    <Button color={props.color} onClick={props.onClick}>{props.contador}</Button>
  );
}

export default App;
