import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-social/bootstrap-social.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numMinas: 0,
      tablero: Array(9).fill("secondary").map(() => Array(9).fill("secondary"))
    };
  }

  handleOnCambiarNumeroMinas = (operador) => {
    this.setState((prevState) => {
      let nuevoNumMinas = prevState.numMinas;
      if (operador === "+") {
        nuevoNumMinas += 1;
      } else if (operador === "-" && nuevoNumMinas > 0) {
        nuevoNumMinas -= 1;
      }
      return { numMinas: nuevoNumMinas };
    });
  }

  handleOnMinevancic = () => {
    let copiaNumMinas = this.state.numMinas;
    let copiaMatriz = Array(9).fill("secondary").map(() => Array(9).fill("secondary"));
    while (copiaNumMinas !== 0) {
      let i = Math.floor(Math.random() * 9);
      let j = Math.floor(Math.random() * 9);
      if (copiaMatriz[i][j] !== "danger") {
        copiaMatriz[i][j] = "danger";
        copiaNumMinas -= 1;
      }
    }
    this.setState({ tablero: copiaMatriz });
  }

  render() {
    return (
      <div className="App">
        <h1>
          Minas: {this.state.numMinas} 
          <Button onClick={() => this.handleOnCambiarNumeroMinas("+")}>+</Button>
          <Button onClick={() => this.handleOnCambiarNumeroMinas("-")}>-</Button>
        </h1>
        <Button onClick={this.handleOnMinevancic}>Minevancic</Button>
        <Matriz tablero={this.state.tablero} />
      </div>
    );
  }
}

function Matriz(props) {
  return (
    <div>
      {props.tablero.map((fila, filaIndex) => (
        <div key={filaIndex}>
          {fila.map((color, colIndex) => (
            <Button
              key={`${filaIndex}-${colIndex}`}
              color={color}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default App;
