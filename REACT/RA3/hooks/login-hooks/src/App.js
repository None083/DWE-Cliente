import React, { Component } from 'react';
import Menu from './componentes/Menu';
import AppLogin from './componentes/AppLogin';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de mantener Bootstrap importado aquí.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItem: 'UNO',
      logged: false,
    };
  }

  changeMenu = (item) => {
    this.setState({ menuItem: item });
  };

  userLogin = (telefono, password) => {
    if (telefono === 'Myfpschool' && password === '2023') {
      this.setState({ logged: true });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container mt-4">
          {this.state.logged ? (
            <>
              <Menu
                menuItem={this.state.menuItem}
                changeMenu={this.changeMenu}
              />
              <div className="mt-4">
                <h2 className="text-center">
                  {`Bienvenido a la sección ${this.state.menuItem}`}
                </h2>
              </div>
            </>
          ) : (
            <AppLogin userLogin={this.userLogin} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
