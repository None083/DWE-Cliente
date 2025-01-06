import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Button } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      botones: Array.from({ length: 9 }, () => Array(9).fill("info")),
      colores: ["primary", "secondary", "danger", "warning", "success"],
      indiceColor: 0
    };
  }

  checkColor = (filaIndex, colIndex) => {
    let copiaMatriz = [...this.state.botones];
    let color = this.state.botones[filaIndex][colIndex];
    
    if (this.state.botones[filaIndex][colIndex] === "info") {
      return;
      
    }

    if (filaIndex > 0 && this.state.botones[filaIndex - 1][colIndex] !== "info" && this.state.botones[filaIndex - 1][colIndex] !== color) {
      copiaMatriz[filaIndex - 1][colIndex] = color;
      this.setState({ botones: copiaMatriz });
      this.checkColor(filaIndex - 1, colIndex);
    }

    if (filaIndex > 0 && this.state.botones[filaIndex + 1][colIndex] !== "info" && this.state.botones[filaIndex + 1][colIndex] !== color) {
      copiaMatriz[filaIndex + 1][colIndex] = color;
      this.setState({ botones: copiaMatriz });
      this.checkColor(filaIndex + 1, colIndex);
    }

    if (filaIndex > 0 && this.state.botones[filaIndex][colIndex - 1] !== "info" && this.state.botones[filaIndex][colIndex - 1] !== color) {
      copiaMatriz[filaIndex][colIndex - 1] = color;
      this.setState({ botones: copiaMatriz });
      this.checkColor(filaIndex, colIndex - 1);
    }

    if (filaIndex > 0 && this.state.botones[filaIndex][colIndex + 1] !== "info" && this.state.botones[filaIndex][colIndex + 1] !== color) {
      copiaMatriz[filaIndex][colIndex + 1] = color;
      this.setState({ botones: copiaMatriz });
      this.checkColor(filaIndex, colIndex + 1);
    }
    
  }

  handleOnCambioColor(filaIndex, colIndex) {
    let botonesAux = this.state.botones.map((fila, fIndex) =>
      fila.map((color, cIndex) =>
        fIndex === filaIndex && cIndex === colIndex ? this.state.colores[this.state.indiceColor] : color
      )
    );
    let indiceColorAux = this.state.indiceColor < 4 ? this.state.indiceColor + 1 : 0;
    this.setState({ botones: botonesAux, indiceColor: indiceColorAux });

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (this.state.botones[i][j] !== "info") {
          this.checkColor(i, j);
        }
      }
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.botones.map((fila, filaIndex) => (
          <div key={filaIndex}>
            {fila.map((color, colIndex) => (
              <Botoncillo
                key={`${filaIndex}-${colIndex}`}
                color={color}
                onClick={() => this.handleOnCambioColor(filaIndex, colIndex)}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

function Botoncillo(props) {
  return (
    <Button
      style={{ padding: "20px", margin: "2px" }}
      color={props.color}
      onClick={props.onClick}
    >
    </Button>
  );
}

export default App;
