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
        { id: 1, name: "perico", email: "perico@myfpschool.com" },
        { id: 2, name: "pepito", email: "pepito@myfpschool.com" }
      ]
    }
  }

  handleOnAddUser(event) {
    event.preventDefault();
    let user = {
      id: this.state.users.length+1,
      name: event.target.name.value,
      email: event.target.email.value
    }
    let copiaUsers = this.state.users;
    copiaUsers.push(user);
    this.setState({users:copiaUsers});
  }

  render() {
    return (
      <div className="App">
        <UserList users={this.state.users} />
        <UserForm onAddUser={(e)=>this.handleOnAddUser(e)}/>
      </div>
    );
  }
}

export default App;
