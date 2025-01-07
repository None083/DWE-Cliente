import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Button } from 'reactstrap';
import UserList from './componentes/UserList';
import UserForm from './componentes/UserForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: "perico", email: "uwu@uwu.com" },
        { id: 2, name: "juanico", email: "owo@owo.com" },
        { id: 3, name: "andres", email: "iwi@iwi.com" }
      ]
    }
  }
  handleOnAddUser(event) {
    event.preventDefault();
    let user = {
      name: event.target.name.value,
      email: event.target.email.value
    }
    let u = this.state.users;
    u.push(user)
    this.setState({ users: u })
  }
  render() {
    return (
      <div className="App">
        <UserList users={this.state.users} />
        <>Añade usuarios</>
        <UserForm onAddUser={(e) => this.handleOnAddUser(e)} />
      </div>
    );
  }
}

export default App;
