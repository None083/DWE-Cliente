import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const MapaBotones = (props) => {
  // este componente pinta el tablero 9x9 con las props que le paso.
  let lista = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (i == 0) {
        lista.push(<Button color={props.listaBotones[i][j]} outline onClick={()=>props.clica(i, j)} />);
      } else {
        if (props.listaBotones[i][j]!="secondary") {
          lista.push(<Button color={props.listaBotones[i][j]} />);
        }else{
          lista.push(<Button color={props.listaBotones[i][j]} outline />);
        }
        
      }
    }
    lista.push(<br />);
  }
  return lista;
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaBotones: Array(9).fill(null),
      // no se puede modificar el state
    }
  }
  clica = (x, y) => {
    // x se supone que la columna, y la fila
    let copia = this.state;
    let contador = 8;
    let encontrado = false;
    while (contador!=0 && !encontrado) {
      if (copia.listaBotones[contador][y] == "secondary") {
        copia.listaBotones[contador][y] = "primary";
        encontrado = true;
      }
      contador--;
    }
    this.setState({copia});
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
        <h1> BUCHACA </h1>
        <MapaBotones listaBotones={this.state.listaBotones} clica={this.clica} />
      </div>
    );
  }

}
export default App;
