import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Label, Input, FormGroup } from 'reactstrap';

function App() {

  const preguntas = [
    "Cuando mandas un mensaje por WhatsApp esperas siempre al doble check. Si no aparece vuelves a abrir el terminal para revisarlo al rato.",
    "Antes de acostarte siempre miras el móvil a ver si tienes mensajes o notificaciones.",
    "Te despiertas antes de tiempo para jugar, mandar mensajes, actualizar perfiles,… con el teléfono móvil.",
    "Si sales de casa sin el móvil volverías a cogerlo aunque llegues tarde a tu cita.",
    "Tienes miedo a quedarte sin batería.",
    "Cuando tienes la batería baja desactivas ciertas aplicaciones u opciones del teléfono como la WiFi, bluetooth para no quedarte sin batería.",
    "Tienes ansiedad cuando tienes llamadas perdidas. Llamas a los números y te preocupas si no responden.",
    "Miras la cobertura cuando estás en algún sitio con los amigos, esperando, etc.",
    "Sueles hacer alguna otra cosa mientras que miras al móvil como comer, lavarte los dientes, etc.",
    "Vas al baño siempre con el móvil.",
  ];

  function Pregunta(pregunta, index) {
    return (
      <FormGroup tag="fieldset">
        <legend>
          {pregunta}
        </legend>
        <FormGroup check>
          <Input
            name="radio1"
            type="radio"
          />
          {' '}
          <Label check>
            Option one is this and that—be sure to include why it‘s great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Input
            name="radio1"
            type="radio"
          />
          {' '}
          <Label check>
            Option two can be something else and selecting it will deselect option one
          </Label>
        </FormGroup>
      </FormGroup>
    )
  }
  return (
    <div className="App">
      <Form>
        {preguntas.map((p, index) => {
          return (Pregunta(p, index));
        })}
      </Form>
    </div>
  );
}



export default App;