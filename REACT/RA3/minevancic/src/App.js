import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-social/bootstrap-social.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numMinas: 0
    };
  }
  render() {
    return (
      <div className="App">
        <h1>
          Minas: {this.state.numMinas}
          <Button>+</Button>
          <Button>-</Button>
        </h1>
        <Button>Dale</Button>
      </div>
    );
  }
}

export default App;
