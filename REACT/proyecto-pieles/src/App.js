import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Button, Container, Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler } from 'reactstrap';
import { PIELES } from './pieles'; // Importamos el JSON

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false, // Estado para el menú desplegable de hamburguesa
    };
  }

  // Función para manejar el toggle (abrir/cerrar) del menú de hamburguesa
  toggleNavbar = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    // Extraemos las categorías únicas
    const categorias = [...new Set(PIELES.productos.map(producto => producto.categoria))];

    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Mi App</NavbarBrand>
        {/* Icono de hamburguesa que siempre estará visible */}
        <NavbarToggler onClick={this.toggleNavbar} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="mx-2">
              <NavLink href="#">Inicio</NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="#">Acerca</NavLink>
            </NavItem>

            {/* Menú de categorías se despliega al hacer clic en el icono de hamburguesa */}
            <NavItem className="mx-2">
              <NavLink href="#" id="navbarDropdown" role="button">
                <div className={`categories-menu ${this.state.isOpen ? 'open' : ''}`}>
                  <ul>
                    {categorias.map((categoria, index) => (
                      <li key={index}>
                        <NavLink href={`#${categoria}`}>{categoria}</NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

const Footer = () => (
  <footer className="bg-dark text-light text-center py-3 mt-5">
    <p>&copy; 2025 Mi Aplicación. Todos los derechos reservados.</p>
  </footer>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        {/* Contenido principal */}
        <Container className="mt-4 text-center">
          <h1>Bienvenido a mi aplicación</h1>
          <Button color="primary">Dale</Button>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default App;
