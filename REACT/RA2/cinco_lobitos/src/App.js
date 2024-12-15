import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaColor: Array(5).fill("secondary"),
      listaCuantos: Array(5).fill(0),
      listaPulsado: Array(5).fill(false)
    };
  }

  //esta es mi callback
  setSeleccionado(num) {
    let listaColor2 = [...this.state.listaColor];
    let listaCuantos2 = [...this.state.listaCuantos];
    let listaPulsado2 = [...this.state.listaPulsado];

    this.setState({ listaCuantos: listaCuantos2 }, () => {
      listaCuantos2[num] += 1;
      this.cambiarColor();
      if (listaPulsado2[num] == false) {
        listaPulsado2[num] = true;
        this.setState({ listaPulsado: listaPulsado2 });
        setTimeout(() => this.cuentaRegresiva(num), 1000);
      }
    })
  }

  cuentaRegresiva(num) {
    let listaCuantos2 = [...this.state.listaCuantos];
    let listaPulsado2 = [...this.state.listaPulsado];
    if (listaCuantos2[num] > 0) {
      listaCuantos2[num] -= 1;
      this.setState({ listaCuantos: listaCuantos2 }, () => {
        if (listaCuantos2[num] > 0) {
          setTimeout(() => this.cuentaRegresiva(num), 1000);
        }
        this.cambiarColor();
      })
    }
    if (listaCuantos2[num] == 0) {
      listaPulsado2[num] = false;
      this.setState({ listaPulsado: listaPulsado2 });
    }
  }

  cambiarColor() {
    let listaColor2 = Array(5).fill("secondary");
    let listaCuantos2 = [...this.state.listaCuantos];
    let numeroMayor = 0;
    let posicionMayor = -1;
    listaCuantos2.map((e, i) => {
      if (e > numeroMayor) {
        posicionMayor = i;
        numeroMayor = e;
      }
    })
    if (posicionMayor!=-1) {
      listaColor2[posicionMayor]="primary";
    }
    this.setState({listaColor:listaColor2});
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
