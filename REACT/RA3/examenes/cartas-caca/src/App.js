import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Button } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaBotones: [],
      playable: false,
      listaNumeros: []
    }
  }

  aleatorio(min, max) {
    var horquilla = max - min;
    return Math.round(Math.random() * horquilla + min);
  }

  jugar() {
    this.setState({ playable: true });
  }

  componentWillMount() {
    let tableroNumeros = this.state.listaNumeros;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        tableroNumeros.push(this.aleatorio(1, 9))
      }
    }
    this.setState({ listaNumeros: tableroNumeros });
  }

  clicar(i, j) {
    let tableroNumeros = this.state.listaNumeros;
    let tableroBotones = this.state.listaBotones;
    tableroBotones[i][j] = <Button color='primary'>{tableroNumeros[i][j]}</Button>;
    this.setState({ listaBotones: tableroBotones });
  }

  render() {
    return (
      <div className="App">
        <Button onClick={() => this.jugar()}>Jugar</Button><br />
        <Botones listaBotones={this.state.listaBotones} playable={this.state.playable} />
      </div>
    );
  }

}

function Botones(props) {
  if (!props.playable) {
    return;
  }

  let tableroBotones = Array(9).fill(Array(9).fill(null));
  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      tableroBotones[x][y]=<Button ></Button>;
    }
    tableroBotones[x][9]= <br />;
  }

  return (tableroBotones);
}

export default App;