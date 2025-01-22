import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Form, Label, Input, FormGroup } from 'reactstrap';

function App() {
  const preguntasIniciales = [
    "1. Cuando mandas un mensaje por WhatsApp esperas siempre al doble check. Si no aparece vuelves a abrir el terminal para revisarlo al rato.",
    "2. Antes de acostarte siempre miras el móvil a ver si tienes mensajes o notificaciones.",
    "3. Te despiertas antes de tiempo para jugar, mandar mensajes, actualizar perfiles,… con el teléfono móvil.",
    "4. Si sales de casa sin el móvil volverías a cogerlo aunque llegues tarde a tu cita.",
    "5. Tienes miedo a quedarte sin batería.",
    "6. Cuando tienes la batería baja desactivas ciertas aplicaciones u opciones del teléfono como la WiFi, bluetooth para no quedarte sin batería.",
    "7. Tienes ansiedad cuando tienes llamadas perdidas. Llamas a los números y te preocupas si no responden.",
    "8. Miras la cobertura cuando estás en algún sitio con los amigos, esperando, etc.",
    "9. Sueles hacer alguna otra cosa mientras que miras al móvil como comer, lavarte los dientes, etc.",
    "10. Vas al baño siempre con el móvil.",
  ];

  const [preguntas, setPreguntas] = useState(preguntasIniciales);
  const [respuestasSi, setRespuestasSi] = useState(0);

  const handleRespuesta = (respuesta, index) => {
    if (respuesta === 'si') {
      setRespuestasSi(respuestasSi + 1);
    }
    const nuevasPreguntas = preguntas.filter((_, i) => i !== index);
    setPreguntas(nuevasPreguntas);
  };

  function calcularResultado() {
    let resultado = "";

    if (respuestasSi <= 4) {
      resultado = <div className="alert alert-success mt-4">
        <h4>Resultado:</h4>
        <p>Tu puntuación es de {respuestasSi}.</p>
        <p>En principio no tienes nada de que preocuparte.</p>
      </div>;
    } else if (respuestasSi <= 6) {
      resultado = <div className="alert alert-primary mt-4">
        <h4>Resultado:</h4>
        <p>Tu puntuación es de {respuestasSi}.</p>
        <p>Empiezas a tener signos de dependencia del móvil. Puedes utilizar técnicas como apagar el móvil cuando no lo necesitas, cuando duermes, etc.</p>
      </div>;
    } else if (respuestasSi <= 8) {
      resultado = <div className="alert alert-warning mt-4">
        <h4>Resultado:</h4>
        <p>Tu puntuación es de {respuestasSi}.</p>
        <p>Tienes una gran dependencia del móvil. Deberías seguir un plan de «desintoxicación» del móvil como por ejemplo dejar el móvil en casa cuando vas a comprar, apagarlo durante la noche, apagarlo durante horas de clase o trabajo, etc.</p>
      </div>;
    } else {
      resultado = <div className="alert alert-danger mt-4">
        <h4>Resultado:</h4>
        <p>Tu puntuación es de {respuestasSi}.</p>
        <p>Tus síntomas de dependencia son muy preocupantes. Además de todas las técnicas de los apartados anteriores deberías plantearte un plan de desintoxicación del móvil que consista en estar una o dos semanas sin utilizarlo. Si ves que no puedes hacerlo por ti mismo, pide ayuda a un profesional. </p>
      </div>;
    }

    return resultado;
  }

  return (
    <div className="App p-4">
      <h1>Test nomofobia</h1>
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
                onClick={() => handleRespuesta('si', index)}
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
                onClick={() => handleRespuesta('no', index)}
                style={{ marginRight: '5px' }}
              />
              <Label check style={{ marginBottom: '0' }}>
                No
              </Label>
            </div>
          </FormGroup>
        ))}
      </Form>

      {preguntas.length === 0 && (calcularResultado())}

    </div>
  );
}

export default App;
