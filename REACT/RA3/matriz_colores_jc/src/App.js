import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Button } from 'reactstrap';

const MapaBotones = (props) => {
  let lista = [];
  for (let i = 0; i < 9; i++) {
    let lista2 = []; //esto es la fila
    for (let j = 0; j < 9; j++) {
      lista2.push(<Button color={props.listaBotones[i][j].color} onClick={() => props.clica(i, j)}></Button>)
    }
    lista.push(<>{lista2}<br /></>)
  }
  return (<>{lista}</>);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaBotones: Array(9).fill(null),
      listaColores: ["primary", "secondary", "success", "warning", "danger"]
    }
  }

  componentWillMount() {
    let l = this.state.listaBotones;
    for (let i = 0; i < 9; i++) {
      let x = Array(9).fill({ color: "info", pulsado: false });
      l[i] = x;
    }
    this.setState({ listaBotones: l });
  }

  clica(x, y) {
    let l = this.state.listaBotones;
    let obj = JSON.parse(JSON.stringify(l[x][y]))
    obj.pulsado = !obj.pulsado;
    l[x][y] = obj;
    for (let i = 0; i < l.length; i++) {
      for (let j = 0; j < l[i].length; j++) {
        l[i][j].color = "info";
      }
    }
    this.setState({ listaBotones: l });
  }

  render() {
    return (
      <div className="App">
        <MapaBotones listaBotones={this.state.listaBotones} clica={(x, y) => this.clica(x, y)} />
      </div>
    );
  }

}

export default App;