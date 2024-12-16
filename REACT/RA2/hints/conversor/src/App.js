import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Button } from 'reactstrap';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            euros: 0,
            cambioDolar: 1.1
        }
    }
    aumentar(){
        let aux = this.state.euros+1;
        this.setState({euros:aux});
    }
    disminuir(){
        let aux = this.state.euros-1;
        this.setState({euros:aux});
    }
    render() {
        return (
            <div className="App" >
            <h1>Conversor euro - dolar</h1>
            <p>{this.state.euros} Euros equivalen a {this.state.cambioDolar * this.state.euros} Dólares</p>
                <p>
                    <Button color='success' onClick={() => this.aumentar()}>+</Button>
                    <Button color='danger' onClick={() => this.disminuir()}>-</Button>
                </p>
            </div>
        );
    }

}

export default App;