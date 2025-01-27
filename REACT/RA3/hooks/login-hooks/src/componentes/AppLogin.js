import React, { useState } from 'react';
import { Row, Col, Card, CardTitle, CardText, Form, FormGroup, Button, Label, Input } from 'reactstrap';

export default function AppLogin({ userLogin }) {
  const [password, setPassword] = useState('');
  const [telefono, setTelefono] = useState('');
  const [info, setInfo] = useState('');

  const handleChange = (event) => {
    setInfo('');
    const { name, value } = event.target;
    if (name === 'password') setPassword(value);
    if (name === 'telefono') setTelefono(value);
  };

  const handleClick = () => {
    if (!password || !telefono) {
      setInfo('Por favor, complete todos los campos');
    } else if (telefono === 'Myfpschool' && password === '2023') {
      userLogin(telefono, password);
    } else {
      setInfo('Datos incorrectos');
    }
  };

  return (
    <Row>
      <Col sm="2"></Col>
      <Col sm="8">
        <Card body>
          <CardTitle className="text-center" tag="h4">
            Inicio de Sesión
          </CardTitle>
          <Form>
            <FormGroup>
              <Label for="telefono">Usuario</Label>
              <Input
                id="telefono"
                name="telefono"
                placeholder="Escribe tu usuario"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Contraseña</Label>
              <Input
                id="password"
                name="password"
                placeholder="Escribe tu contraseña"
                type="password"
                onChange={handleChange}
              />
            </FormGroup>
            <Button color="primary" size="lg" block onClick={handleClick}>
              Iniciar Sesión
            </Button>
            {info && (
              <CardText className="text-danger text-center mt-3">{info}</CardText>
            )}
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
