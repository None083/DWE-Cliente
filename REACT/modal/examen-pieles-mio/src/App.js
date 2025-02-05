import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Button, Card, CardBody, CardText, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export const PIELES = [
  {
    id: 0,
    imagen: "https://pielparaartesanos.com/cdn/shop/files/Cabra_laminada_oro.jpg",
    nombre: "Cabra laminada oro",
    texto: "Cabra laminada con acabado en color oro"
  },
  {
    id: 1,
    imagen: "https://pielparaartesanos.com/cdn/shop/files/Vacuno_encerado_lodo.jpg",
    nombre: "Vacuno encerado lodo",
    texto: "Dale un toque chulo a tus productos"
  },
  {
    id: 2,
    imagen: "https://pielparaartesanos.com/cdn/shop/files/RST_420.jpg",
    nombre: "Vacuno flor burdeos",
    texto: "La piel de vacuno esta to guay"
  }
];

function Producto(props) {
  return (
    <Card style={{ width: '18rem' }} >
      <img src={props.img} />
      <CardBody>
        <CardTitle tag='h5'>{props.nombre}</CardTitle>
        <CardText>{props.texto}</CardText>
        <Button color='primary' onClick={() => props.sumar(props.id)}>Comprar</Button>
      </CardBody>
    </Card>
  )
}

function ShowProductos(props) {
  return (
    <>
      {props.listaProductos.map((producto) => {
        return (
          <Producto key={producto.id} img={producto.imagen} nombre={producto.nombre} texto={producto.texto} id={producto.id} sumar={props.sumar} />
        )
      })}
    </>
  )
}

const VentanaModal = (props) => {
  const { className } = props;
  let productosCesta = [];
  props.listaProductos.map(p => {
    if (props.cantidad[p.id] > 0) {
      productosCesta.push(
        <Card>
          <CardBody>
            <CardText>{p.nombre} - {props.cantidad[p.id]} <Button onClick={() => props.restar(p.id)}>-</Button> <Button onClick={() => props.sumar(p.id)}>+</Button></CardText>
          </CardBody>
        </Card>
      );
    }
  });

  return (
    <div>
      <Modal isOpen={props.mostrar} toggle={props.toggle} className={className}>
        <ModalHeader toggle={props.toggle}>CARRITO DE LA COMPRA</ModalHeader>
        <ModalBody>{productosCesta}</ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={() => props.toggle()}>CERRAR</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaProductos: PIELES,
      isOpen: false,
      cantidadUnitaria: Array(PIELES.length).fill(0),
      cantidadTotal: 0
    }
  }

  toggleModal() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  sumarCantidad = (id) => {
    let arrayCantidad = this.state.cantidadUnitaria;
    arrayCantidad[id] = arrayCantidad[id] + 1;
    let cantidadCarro = this.state.cantidadTotal + 1;
    this.setState({ cantidadUnitaria: arrayCantidad, cantidadTotal: cantidadCarro });
  }

  restarCantidad = (id) => {
    let arrayCantidad = this.state.cantidadUnitaria;
    arrayCantidad[id] = arrayCantidad[id] - 1;
    let cantidadCarro = this.state.cantidadTotal - 1;
    this.setState({ cantidadUnitaria: arrayCantidad, cantidadTotal: cantidadCarro });
  }

  render() {
    return (
      <>
        <Button color='primary' onClick={() => this.toggleModal()}>Carrito ({this.state.cantidadTotal})</Button>
        <ShowProductos listaProductos={this.state.listaProductos} sumar={this.sumarCantidad} />
        <VentanaModal
          cantidad={this.state.cantidadUnitaria}
          listaProductos={this.state.listaProductos}
          sumar={this.sumarCantidad}
          restar={this.restarCantidad}
          mostrar={this.state.isOpen}
          toggle={() => this.toggleModal()}
        />
      </>
    );
  }

}

export default App;