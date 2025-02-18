import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Button, Container, Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false, // Estado del menú hamburguesa
      isCategoriesOpen: false, // Estado del menú de categorías
      productos: [], // Estado para almacenar los productos
    };
  }

  componentDidMount() {
    // Obtener los datos desde la URL proporcionada
    fetch('/2daw/pieles.json')
      .then((response) => response.json()) // Convertir la respuesta en JSON
      .then((data) => {
        this.setState({ productos: data.productos }); // Guardar productos en el estado
      })
      .catch((error) => console.error('Error al cargar los datos:', error));
  }

  // Función para abrir/cerrar el menú de hamburguesa
  toggleNavbar = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  // Función para abrir/cerrar el menú de categorías
  toggleCategories = () => {
    this.setState({ isCategoriesOpen: !this.state.isCategoriesOpen });
  };

  render() {
    // Extraemos las categorías únicas del estado
    const categorias = [...new Set(this.state.productos.map((producto) => producto.categoria.toUpperCase()))];

    return (
      <Navbar style={{ backgroundColor: '#191000' }} dark expand="md">
        <NavbarBrand href="/"><img src={process.env.PUBLIC_URL + '/images/logo2.png'} alt="Logo" style={{ height: '60px' }} onError={(e) => e.target.style.display = 'none'} /></NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="mx-2">
              <NavLink href="#" style={{ color: '#f2dcb8' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#f2dcb8'}><strong>HOME</strong></NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="#" style={{ color: '#f2dcb8' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#f2dcb8'}><strong>ABOUT</strong></NavLink>
            </NavItem>

            {/* Botón "Categorías" para dispositivos móviles */}
            <NavItem className="mx-2 d-md-none">
              <NavLink href="#" className="categories-button" onClick={this.toggleCategories} style={{ color: '#f2dcb8' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#f2dcb8'}>
                <strong>CATEGORIES ▼</strong>
              </NavLink>
              <Collapse isOpen={this.state.isCategoriesOpen} navbar>
                <Nav className="ml-auto" navbar>
                  {categorias.map((categoria, index) => (
                    <NavItem key={index} className="mx-2">
                      <NavLink href={`#${categoria}`} style={{ color: '#efe5d5', borderBottom: "1px solid #efe5d5" }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#efe5d5'}>{categoria}</NavLink>
                    </NavItem>
                  ))}
                </Nav>
              </Collapse>
            </NavItem>

            {/* Categorías para dispositivos de escritorio */}
            {categorias.map((categoria, index) => (
              <NavItem key={index} className="mx-2 d-none d-md-block">
                <NavLink href={`#${categoria}`} style={{ color: '#efe5d5' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#efe5d5'}>{categoria}</NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

const Footer = () => (
  <footer className="text-center py-3 mt-5" style={{ backgroundColor: '#191000', color: '#EDD2A7' }}>
    <p>&copy; 2025 Leather for Artisans. All rights reserved.</p>
  </footer>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        {/* Contenido principal */}
        <Container className="mt-4 text-center">
          <h1>Wellcome to Leather for Artisans</h1>
          <Button color="secondary">Dale</Button>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default App;
