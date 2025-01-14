import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Button } from 'reactstrap';

const MapaBotones = (props) => {
  // este componente pinta el tablero 9x9 con las props que le paso.
  let array = [];

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (i == 0) {
        array.push(<Button color={props.listaBotones[i][j]} outline onClick={()=>props.clica(i,j)} />);
      }else{
        if (props.listaBotones[i][j] != "secondary") {
          array.push(<Button color={props.listaBotones[i][j]} />);
        }else{
          array.push(<Button color={props.listaBotones[i][j]} outline />);
        }
      }
    }
    array.push(<br />)
  }
  return (array);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaBotones: Array(9).fill(null)
    }
  }

  clica = (x, y) => {
    // x la columna, y la fila
    console.log("llega")
    let copiaState = this.state;
    let contador = 8;
    let encontrado = false;

    while (contador != 0 && !encontrado) {
      if (copiaState.listaBotones[contador][y] == "secondary") {
        copiaState.listaBotones[contador][y] = "primary";
        encontrado = true;
      }
      contador --;
    }
    this.setState({copiaState})
  }

  componentWillMount() {
    // aquí es donde creo las nueve columnas con los datos iniciales.
    let copiaListaBotones = this.state.listaBotones;
    for (let i = 0; i < 9; i++) {
      copiaListaBotones[i] = Array(9).fill("secondary");
    }
    this.setState({ listaBotones: copiaListaBotones });
  }

  render() {
    return (
      <div className="App">
        <MapaBotones listaBotones={this.state.listaBotones} clica={this.clica} />
      </div>
    );
  }

}

export default App;