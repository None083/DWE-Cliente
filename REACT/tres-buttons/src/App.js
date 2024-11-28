import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      color:"secondary"
    }
  }
  rojo(){
    this.setState({color:"danger"})
  }
  azul(){
    this.setState({color:"primary"})
  }
  render () {
    return (
      <div className="App">
        <Button color={this.state.color}>Yo cambio</Button>
        <Button color="primary" onClick={()=>this.azul()}>Azul</Button>
        <Button color="danger">Rojo</Button>
      </div>
    );
  }
}

export default App;
