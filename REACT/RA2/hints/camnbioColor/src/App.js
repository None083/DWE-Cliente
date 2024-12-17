import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "primary"
    }
  }

  cambiarColor(){
    let colorCambio = this.state.color == "primary" ? "danger" : "primary";
    this.setState({color:colorCambio});
  }

  render() {
    return (
      <div className="App">
        <Button color={this.state.color} onClick={()=>this.cambiarColor()}>
          Dale
        </Button>
      </div>
    );
  }
}

export default App;
