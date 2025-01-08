import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Button } from 'reactstrap';

function Botonera(props) {

}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaBotones: [],
      playable: false
    }
  }

  jugar() {
    return (
      <Botonera btnsJugables={this.state.listaBotones} />
    )
  }

  render() {
    return (
      <div className="App">
        <Button onClick={() => this.jugar()}>Jugar</Button>
        <Tablero />
      </div>
    );
  }
}

function Tablero() {
  let matriz = Array(8).fill(null).map(() => Array(8).fill(null));
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      matriz.push(<Button outline></Button>);
      
    }
  }
  return (matriz);
}

export default App;
