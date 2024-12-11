import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Component } from 'react';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
        listabotones : Array(5).fill("secondary"),
        cuantos:0
     };
  }
 
  //esta es mi callback
  setSeleccionado(num){
    let l = this.state.listabotones;
    l[num]="danger"
    this.setState({listabotones:l})
  }
render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.cuantos}</h1>
          <br/>

          <Botoncillo color={this.state.listabotones[0]}/>
          <Botoncillo color={this.state.listabotones[1]}/>
          <Botoncillo color={this.state.listabotones[2]}/>
          <Botoncillo color={this.state.listabotones[3]}/>
          <Botoncillo color={this.state.listabotones[4]}/>
        </header>
      </div>
    );
  }

 
 }
 
 function Botoncillo(props){
  return (
    <>
      <Button color={props.color}></Button>
    </>
    
  );
 }
 

export default App;
