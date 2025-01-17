import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Button } from 'reactstrap';

function Botonera(props) {
  let k = 0;
  let lista = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaBotones: [],
      playable: false
    }
  }

  aleatorio(min, max) {
    var horquilla = max - min;
    return Math.round(Math.random() * horquilla + min);
  }

  crearTablero() {
    let l = this.state.listaBotones;
    for (let i = 0; i < 9; i++) {
      let fila = [];
      for (let j = 0; j < 9; j++) {
        fila.push({ fin: false, pulsado: false, numero: this.aleatorio(0, 9) });
      }
      l.push(fila);
    }
    this.setState({ listaBotones: l, playable: true });
  }

  jugar() {
    this.crearTablero();
  }

  clicar(i, j) {

  }

  render() {
    let lista = [];
    lista.push(<></>);
    if (this.state.playable) {
      lista.push(<Botonera listaBotones={this.state.listaBotones} clicar={(i, j) => this.clicar(i, j)} />);
    }
    return (
      <div className="App">
        <Button onClick={() => this.jugar()}>Jugar</Button><br />
      </div>
    );
  }
}

export default App;