import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component, useState } from 'react';
import {
  Alert, Row, Col, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label,
} from 'reactstrap';

const VentanaModal = (props) => {
  const { className } = props;

  const [formData, setFormData] = useState({
    total: '',
    meses: '',
    tae: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <Modal isOpen={props.mostrar} toggle={props.toggle} className={className}>
        <ModalHeader toggle={props.toggle}>{props.titulo}</ModalHeader>
        <ModalBody>
          <FormGroup row>
            <Label sm={4}>Cantidad a pedir:</Label>
            <Col sm={8}>
              <Input
                onChange={handleChange}
                id="total"
                name="total"
                type="text"
                value={formData.total}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={4}>Meses:</Label>
            <Col sm={8}>
              <Input
                onChange={handleChange}
                id="meses"
                name="meses"
                type="select"
                value={formData.meses}
              >
                <option value="">Selecciona...</option>
                <option value="3">3</option>
                <option value="6">6</option>
                <option value="12">12</option>
                <option value="24">24</option>
                <option value="48">48</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={4}>T.A.E.:</Label>
            <Col sm={8}>
              <Input
                onChange={handleChange}
                id="tae"
                name="tae"
                type="select"
                value={formData.tae}
              >
                <option value="">Selecciona...</option>
                <option value="5">5%</option>
                <option value="6">6%</option>
                <option value="7">7%</option>
                <option value="8">8%</option>
                <option value="9">9%</option>
              </Input>
            </Col>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => props.aceptar(formData)}>
            {props.botonAceptar}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false, // Estado para manejar la visibilidad de la ventana modal
      resultado: null, // Estado para almacenar el mensaje de alerta
    };
  }

  setIsOpen(isOpen) {
    this.setState({ isOpen });
  }

  toggleModal() {
    this.setIsOpen(!this.state.isOpen);
  }

  aceptar(datos) {
    // Validar los campos
    if (!datos.total || !datos.meses || !datos.tae) {
      this.setState({
        resultado: (
          <Alert color="danger" className="m-4">
            Debes completar todos los campos antes de calcular.
          </Alert>
        ),
      });
      this.toggleModal(); // Cierra la ventana modal
      return;
    }

    // Convertir valores
    const total = parseFloat(datos.total);
    const meses = parseInt(datos.meses);
    const tae = parseFloat(datos.tae);

    // Calcular el total con T.A.E.
    const r = tae / 100;
    const calculo = (total * r) / (1 - Math.pow(1 + r, -meses));

    // Guardar el resultado en el estado
    this.setState({
      resultado: (
        <Alert color="success" className="m-4">
          {`Deberás pagar un total de ${calculo.toFixed(2)} € al mes durante ${meses} meses.`}
        </Alert>
      ),
    });

    this.toggleModal(); // Cierra la ventana modal
  }

  render() {
    return (
      <div className="App">
        <Button className="mt-4" color='primary' onClick={() => this.toggleModal()}>Calcula tu cuota</Button>

        <VentanaModal
          aceptar={(datos) => this.aceptar(datos)}
          mostrar={this.state.isOpen}
          botonAceptar="Calcular"
          titulo="Cálculo de tu cuota"
        />

        {/* Mostrar el resultado */}
        {this.state.resultado}
      </div>
    );
  }
}

export default App;
