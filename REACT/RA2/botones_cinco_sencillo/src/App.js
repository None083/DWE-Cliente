import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listabotones: Array(5).fill("secondary"),
      cuantos: 0
    };
  }

  //esta es mi callback
  setSeleccionado(num) {
    let l = this.state.listabotones;
    if (l[num] !== "danger") {
      l[num] = "danger";
      this.setState(e => ({
        listabotones: l,
        cuantos: e.cuantos + 1
      }));
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.cuantos}</h1>
          <br />

          <Botoncillo color={this.state.listabotones[0]} onClick={() => this.setSeleccionado(0)} />
          <Botoncillo color={this.state.listabotones[1]} onClick={() => this.setSeleccionado(1)} />
          <Botoncillo color={this.state.listabotones[2]} onClick={() => this.setSeleccionado(2)} />
          <Botoncillo color={this.state.listabotones[3]} onClick={() => this.setSeleccionado(3)} />
          <Botoncillo color={this.state.listabotones[4]} onClick={() => this.setSeleccionado(4)} />
        </header>
      </div>
    );
  }


}

function Botoncillo(props) {
  return (
    <>
      <Button color={props.color} onClick={props.onClick}></Button>
    </>

  );
}


export default App;
