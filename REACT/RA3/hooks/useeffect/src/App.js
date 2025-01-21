import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Button } from 'reactstrap';
import { useState, useEffect } from 'react';

function App() {
  const [contador, setContador] = useState(0);
  useEffect(() => {
    console.log("Se ha ejecutado el useEffect" + contador)
    document.title = "El contador es: " + contador;
  })

  return (
    <div className="App">
      <Button onClick={() => setContador(contador + 1)}>
        Dale
      </Button>
    </div>
  );
}

/*
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    }
  }

  componentDidMount() {
    document.title = "El contador es: " + this.state.contador;
  }

  componentDidUpdate() {
    document.title = "El contador es: " + this.state.contador;
  }

  render() {
    return (
      <div className="App">
        <Button onClick={()=>this.setState({contador: this.state.contador + 1})}>
          Dale
        </Button>
      </div>
    );
  }
}
*/

export default App;