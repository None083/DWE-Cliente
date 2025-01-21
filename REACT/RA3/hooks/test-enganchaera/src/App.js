import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Form, Label, Input, FormGroup } from 'reactstrap';

function App() {
  const preguntasIniciales = [
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

  // Estado para las preguntas restantes y la cantidad de respuestas "Sí".
  const [preguntas, setPreguntas] = useState(preguntasIniciales);
  const [respuestasSi, setRespuestasSi] = useState(0);

  // Maneja cuando el usuario responde una pregunta
  const handleRespuesta = (respuesta, index) => {
    if (respuesta === 'si') {
      setRespuestasSi(respuestasSi + 1); // Incrementa el contador de "Sí"
    }
    // Elimina la pregunta actual del listado
    const nuevasPreguntas = preguntas.filter((_, i) => i !== index);
    setPreguntas(nuevasPreguntas);
  };

  return (
    <div className="App p-4">
      <Form>
        {preguntas.map((pregunta, index) => (
          <FormGroup 
            tag="fieldset"
            key={index}
            className="p-3 mb-3 border rounded bg-light"
          >
            <legend style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>
              {pregunta}
            </legend>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <Input
                type="radio"
                name={`pregunta-${index}`}
                onClick={() => handleRespuesta('si', index)} // Maneja el clic en "Sí"
                style={{ marginRight: '5px' }}
              />
              <Label check style={{ marginBottom: '0' }}>
                Sí
              </Label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Input
                type="radio"
                name={`pregunta-${index}`}
                onClick={() => handleRespuesta('no', index)} // Maneja el clic en "No"
                style={{ marginRight: '5px' }}
              />
              <Label check style={{ marginBottom: '0' }}>
                No
              </Label>
            </div>
          </FormGroup>
        ))}
      </Form>
      {/* Muestra el número de respuestas "Sí" cuando terminan las preguntas */}
      {preguntas.length === 0 && (
        <div className="alert alert-success mt-4">
          <h4>Test terminado</h4>
          <p>Respondiste "Sí" a {respuestasSi} pregunta(s).</p>
        </div>
      )}
    </div>
  );
}

export default App;
