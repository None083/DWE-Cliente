import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Button } from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return (
    <div className="App">
      <Button>
        Dale
      </Button>
    </div>
  );
  }
  
}

export default App;