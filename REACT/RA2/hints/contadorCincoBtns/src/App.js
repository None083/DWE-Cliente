import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Button } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // DEFINE AQUÍ TU ESTADO
      colorBtns: Array(5).fill("secondary"),
      contador: 0
    };
  }

  setSeleccionado(num) {
    let colorBtnsAux = [...this.state.colorBtns];
    if (this.state.colorBtns[num] !== "danger") {
      colorBtnsAux[num] = "danger";
      this.setState(e => ({
        colorBtns: colorBtnsAux,
        contador: e.contador + 1
      }));
    }
  }

  // RENDERIZA AQUÍ LO QUE NECESITES
  render() {
    return (
      <div className="App">
        <h1>{this.state.contador}</h1>
        <Botoncillo color={this.state.colorBtns[0]} onClick={() => this.setSeleccionado(0)} />
        <Botoncillo color={this.state.colorBtns[1]} onClick={() => this.setSeleccionado(1)} />
        <Botoncillo color={this.state.colorBtns[2]} onClick={() => this.setSeleccionado(2)} />
        <Botoncillo color={this.state.colorBtns[3]} onClick={() => this.setSeleccionado(3)} />
        <Botoncillo color={this.state.colorBtns[4]} onClick={() => this.setSeleccionado(4)} />
      </div>
    );
  }
}

function Botoncillo(props) {
  return (
    // MUESTRA AQUÍ EL BOTÓN CON EL COLOR CORRESPONDIENTE
    <Button color={props.color} onClick={props.onClick}></Button>
  );
}

export default App;