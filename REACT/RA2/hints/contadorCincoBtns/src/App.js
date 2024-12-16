import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Button } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // DEFINE AQUÍ TU ESTADO
      colorBtns: Array(5).fill("secondary")
    };
  }

  cambioColor(){
    
  }

  // RENDERIZA AQUÍ LO QUE NECESITES
  render() {
    return (
      <div className="App">
        <Botoncillo color={this.state.colorBtns[0]} />
        <Botoncillo color={this.state.colorBtns[1]} />
        <Botoncillo color={this.state.colorBtns[2]} />
        <Botoncillo color={this.state.colorBtns[3]} />
        <Botoncillo color={this.state.colorBtns[4]} />
      </div>
    );
  }
}

function Botoncillo(props) {
  return (
    // MUESTRA AQUÍ EL BOTÓN CON EL COLOR CORRESPONDIENTE
    <Button color={props.color}></Button>
  );
}

export default App;