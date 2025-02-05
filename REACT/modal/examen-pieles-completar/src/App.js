import { Component, useState } from "react";
import { Card, CardBody, CardText, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup, Label, Col, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export const PIELES = [
  {
    id: 0,
    imagen: "https://pielparaartesanos.com/cdn/shop/files/Cabra_laminada_oro.jpg",
    nombre: "Cabra laminada oro",
    texto: "Cabra laminada con acabado arrugado en color oro. ",
    precio: 30
  },
  {
    id: 1,
    imagen: "https://pielparaartesanos.com/cdn/shop/files/Vacuno_encerado_lodo.jpg",
    nombre: "Vacuno encerado lodo",
    texto: "Dale un toque único y resistente a tus productos artesanales con este material de alta calidad.",
    precio: 45
  },
  {
    id: 2,
    imagen: "https://pielparaartesanos.com/cdn/shop/files/RST_420.jpg",
    nombre: "Vacuno flor burdeos",
    texto: "La piel de vacuno es la opción ideal para bolsos de calidad.",
    precio: 25
  }
];

function Producto(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <img src={props.img} alt={props.nombre} />
      <CardBody>
        <CardTitle tag="h5"> {props.nombre} </CardTitle>
        <CardText>{props.texto} </CardText>
        <Button color="primary" onClick={() => props.clicar(props.id, 1)} > Comprar </Button>
      </CardBody>
    </Card>
  )
}

function ShowProductos(props) {
  let lista = props.lista.map(e =>
    <Producto
      id={e.id}
      img={e.imagen}
      nombre={e.nombre}
      texto={e.texto}
      clicar={(p, c) => props.modificar(p, c)}
    />

  )
  return <>{lista}</>;

}

const VentanaModalCarrito = (props) => {
  const { className } = props;

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    telefono: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  let lista = props.carrito.filter(e => e.cantidad > 0).map(e =>
    <div key={e.id}>
      <p> {e.nombre} - {e.precio * e.cantidad}€ - {e.cantidad}
        <Button onClick={() => props.modificar(e.id, 1)}>+</Button>
        <Button onClick={() => props.modificar(e.id, -1)}>-</Button>
      </p>
    </div>
  )

  let totalPagar = props.carrito.map(e => e.precio * e.cantidad).reduce((a, b) => a + b, 0);

  return (
    <div>
      <Modal isOpenCarrito={props.mostrar} toggle={props.toggle} className={className} >
        <ModalHeader toggle={props.toggle}>CARRITO DE LA COMPRA</ModalHeader>
        <ModalBody>
          {lista}
          <Card>
            <CardBody>
              <CardText><strong>Total:</strong> {totalPagar}</CardText>
            </CardBody>
          </Card>
        </ModalBody>
        <ModalHeader>Rellena con tus datos</ModalHeader>
        <ModalBody>
          <FormGroup row>
            <Label sm={4}>Nombre:</Label>
            <Col sm={8}>
              <Input
                onChange={handleChange}
                id="nombre"
                name="nombre"
                type="text"
                value={formData.nombre}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={4}>Apellidos:</Label>
            <Col sm={8}>
              <Input
                onChange={handleChange}
                id="apellidos"
                name="apellidos"
                type="text"
                value={formData.apellidos}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={4}>Dirección:</Label>
            <Col sm={8}>
              <Input
                onChange={handleChange}
                id="direccion"
                name="direccion"
                type="text"
                value={formData.direccion}
              />
            </Col>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => props.toggle()}>PAGAR</Button>
          <Button color="primary" onClick={() => props.toggle()}>CERRAR</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

const VentanaPedidos = (props) => {
  return (
    <div>
      <Modal>
        <ModalHeader toggle={props.toggle}>TODOS LOS PEDIDOS</ModalHeader>
        <ModalBody>
          <Card>
            <CardBody>
              <CardText>hOLA, SOY UN PEDIDO</CardText>
            </CardBody>
          </Card>
        </ModalBody>
      </Modal>
    </div>
  )
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaProductos: PIELES,
      carrito: PIELES.map(e => {
        return { id: e.id, nombre: e.nombre, precio: e.precio, cantidad: 0 }
      }),
      isOpenCarrito: false,
      isOpenPedidos: false,
    };
  }
  toggleModalCarrito() { this.setState({ isOpenCarrito: !this.state.isOpenCarrito }) }
  toggleModalPedidos() { this.setState({ isOpenPedidos: !this.state.isOpenPedidos }) }

  modificar(producto, cantidad) {
    let c = this.state.carrito
    c = c.map(e => {
      if (e.id === producto) { e.cantidad += cantidad }
      return e;
    })
    this.setState({ carrito: c })
    console.log(c)
  }

  render() {
    let numProd = 0;
    this.state.carrito.map(e => numProd += e.cantidad)
    return (
      <>
        <Button color="primary" onClick={() => this.toggleModalCarrito()}>Carrito ({numProd})</Button>{' '}
        <Button color="success" onClick={() => this.toggleModalPedidos()}>Pedidos</Button>
        <ShowProductos
          lista={this.state.listaProductos}
          modificar={(p, c) => this.modificar(p, c)}
        />
        <VentanaModalCarrito
          mostrar={this.state.isOpenCarrito}
          toggle={() => this.toggleModalCarrito()}
          modificar={(p, c) => this.modificar(p, c)}
          carrito={this.state.carrito}
        />
        <VentanaPedidos toggle={() => this.toggleModalPedidos()} />
      </>
    );
  }
}
export default App;