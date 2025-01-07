import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Button } from 'reactstrap';

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
    let copiaUsers = this.state.users;
    copiaUsers.push(user);
    this.setState({ users: copiaUsers });
  }

  render() {
    return (
      <div className="App">
        <h1>Usuarios</h1>
        <UserList users={this.state.users} />
        <h2>Agergar usuario</h2>
        <UserForm onAddUser={(e) => this.handleOnAddUser(e)} />
      </div>
    );
  }
}

function User(props) {
  return (
    <li>{props.name} - {props.email}</li>
  )
}

function UserList(props) {
  return (
    <ul>
      {props.users.map(u => (
        <User key={u.id} name={u.name} email={u.email} />
      ))}
    </ul>
  )
}

function UserForm(props) {
  return (
    <form onSubmit={props.onAddUser}>
      <input type="text" placeholder="nombre" name="name" />
      <input type="text" placeholder="email" name="email" />
      <input type="submit" value="Guardar" />
    </form>
  )
}

export default App;