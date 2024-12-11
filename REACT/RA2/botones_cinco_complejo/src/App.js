import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaColor: Array(5).fill("secondary"),
      listaCuantos: Array(5).fill(0)
    };
  }

  //esta es mi callback
  setSeleccionado(num) {
    let listaColor2 = [...this.state.listaColor];
    let listaCuantos2 = [...this.state.listaCuantos];
    if (listaColor2[num] !== "danger") {
      listaColor2[num] = "danger";
      this.setState({listaColor: listaColor2});
    }
    listaCuantos2[num] += 1;
    this.setState({listaCuantos: listaCuantos2});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Botoncillo color={this.state.listaColor[0]} num={this.state.listaCuantos[0]} onClick={() => this.setSeleccionado(0)} />
          <Botoncillo color={this.state.listaColor[1]} num={this.state.listaCuantos[1]} onClick={() => this.setSeleccionado(1)} />
          <Botoncillo color={this.state.listaColor[2]} num={this.state.listaCuantos[2]} onClick={() => this.setSeleccionado(2)} />
          <Botoncillo color={this.state.listaColor[3]} num={this.state.listaCuantos[3]} onClick={() => this.setSeleccionado(3)} />
          <Botoncillo color={this.state.listaColor[4]} num={this.state.listaCuantos[4]} onClick={() => this.setSeleccionado(4)} />
        </header>
      </div>
    );
  }


}

function Botoncillo(props) {
  return (
    <>
      <Button color={props.color} onClick={props.onClick}>{props.num}</Button>
    </>

  );
}


export default App;
