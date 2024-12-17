import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colores: Array(5).fill("secondary"),
      ultimosPulsados: []
    }
  }

  cambioColor2(numBoton) {
    let coloresAux = [...this.state.colores];
    let ultimosPulsadosAux = [...this.state.ultimosPulsados];

    if (coloresAux[numBoton] === "info") {
      return;
    }

    ultimosPulsadosAux.push(numBoton);

    if (ultimosPulsadosAux.length > 2) {
      const botonAntiguo = ultimosPulsadosAux.shift();
      coloresAux[botonAntiguo] = "secondary";
    }

    coloresAux[numBoton] = "info";

    this.setState({
      colores:coloresAux, 
      ultimosPulsados:ultimosPulsadosAux
    });
  }
  render() {
    return (
      <div className="App">
        <Button color={this.state.colores[0]} onClick={() => this.cambioColor2(0)}>Uno</Button>
        <Button color={this.state.colores[1]} onClick={() => this.cambioColor2(1)}>Dos</Button>
        <Button color={this.state.colores[2]} onClick={() => this.cambioColor2(2)}>Tres</Button>
        <Button color={this.state.colores[3]} onClick={() => this.cambioColor2(3)}>Cuatro</Button>
        <Button color={this.state.colores[4]} onClick={() => this.cambioColor2(4)}>Cinco</Button>
      </div>
    );
  }

}

export default App;
