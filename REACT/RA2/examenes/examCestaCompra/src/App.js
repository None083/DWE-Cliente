import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Button } from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      precioCafe:100,
      precioColaCao:150,
      //no sabía si 175 era el precio de 2 refrescos o de 1, supuse que eran los 2 de la cesta
      //cuando he terminado todo me he dado cuenta de que el precio era estático
      //y sólo debía cambiar el total y el contador :D
      precioRefresco:87.5, 
      totalCafe:0,
      totalColaCao:0,
      totalRefresco:0,
      contador:Array(3).fill(0)
    }
  }

  calcular(tipoProducto){
    let contadorAux = [...this.state.contador];
    if (tipoProducto === "cafe") {
      let totalCafelito = this.state.totalCafe + this.state.precioCafe;
      contadorAux[0]+=1;
      this.setState({
        totalCafe:totalCafelito,
        contador:contadorAux
      }) 
    }else if(tipoProducto === "colacao"){
      let totalColacaito = this.state.totalColaCao + this.state.precioColaCao;
      contadorAux[1]+=1;
      this.setState({
        totalColaCao:totalColacaito,
        contador:contadorAux
      }) 
    }else{
      let totalRefresquito = this.state.totalRefresco + this.state.precioRefresco;
      contadorAux[2]+=1;
      this.setState({
        totalRefresco:totalRefresquito,
        contador:contadorAux
      }) 
    }
  }

  render() {
    return (
      <div className="App">
        <Button onClick={()=>this.calcular("cafe")}>Café</Button>
        <Button onClick={()=>this.calcular("colacao")}>ColaCao</Button>
        <Button onClick={()=>this.calcular("refresco")}>Refresco</Button>
        <Carrito 
        totalCafe={this.state.totalCafe} contCafe={this.state.contador[0]}
        totalColaCao={this.state.totalColaCao} contColaCao={this.state.contador[1]}
        totalRefresco={this.state.totalRefresco} contRefresco={this.state.contador[2]}
        />
      </div>
    );
  }
}
function Carrito(props) {
  return(
    <div>
      <>{props.contCafe} - cafés precio: {props.totalCafe}</><br/>
      <>{props.contColaCao} - colacao precio: {props.totalColaCao}</><br/>
      <>{props.contRefresco} - refresco precio: {props.totalRefresco}</><br/>
      <>Total: {props.totalCafe + props.totalColaCao + props.totalRefresco}</>
    </div>
  )
}

export default App;
