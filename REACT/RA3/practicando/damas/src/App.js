import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Button } from 'reactstrap';

function Botonera(props) {
  //componente que renderiza el tablero
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaBotones: [],
      playable: false
      //utiliza este estado asi como está
    }
  }

  jugar() {
    this.setState({playable:true})
    return (
      <Botonera btnsJugables={this.state.listaBotones} />
    )
  }

  render() {
    return (
      <div className="App">
        <Button onClick={() => this.jugar()}>Jugar</Button>
        <Tablero playable={this.state.playable}/>
      </div>
    );
  }
}

function Tablero(props) {
  if (!props.playable) {
    return;
  }
  let matriz = [];
  for (let i = 0; i < 8; i++) {
    matriz.push(<br />);
    for (let j = 0; j < 8; j++) {
      matriz.push(<Button outline></Button>);
    }
  }
  return (matriz);
}

export default App;