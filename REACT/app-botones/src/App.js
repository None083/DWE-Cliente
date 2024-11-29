import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colores: Array(5).fill("secondary")
    }
  }
  /*cambioColor(numBoton) {
    let copia = this.state.colores;
    if (this.state.colores[numBoton] === "secondary") {
      copia[numBoton] = "info";
    } else {
      copia[numBoton] = "secondary";
    }
    this.setState({ colores: copia })
  }*/
  cambioColor2(numBoton) {
    let colores = [...this.state.colores];
    const botonesActivos = colores.filter(color => color === "info").length;

    if (colores[numBoton] === "info") {
      return;
    }

    if (botonesActivos === 2) {
      const indexAntiguo = colores.indexOf("info");
      colores[indexAntiguo] = "secondary";
    }

    colores[numBoton] = "info";

    this.setState({ colores });
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
