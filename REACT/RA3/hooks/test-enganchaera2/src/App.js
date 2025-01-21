import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

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

  const [respuestas, setRespuestas] = useState(Array(preguntas.length).fill(false));
  const [resultado, setResultado] = useState("");

  const handleCambios = (index, value) => {
    const newRespuestas = [...respuestas];
    newRespuestas[index] = value;
    setRespuestas(newRespuestas);
  };

  const calculaResultado = () => {
    const respuestasAfirmativas = respuestas.filter((r) => r).length;

    if (respuestasAfirmativas <= 5) {
      setResultado("En principio no tienes nada de qué preocuparte.");
    } else if (respuestasAfirmativas <= 6) {
      setResultado(
        "Empiezas a tener signos de dependencia del móvil. Puedes utilizar técnicas como apagar el móvil cuando no lo necesitas, cuando duermes, etc."
      );
    } else if (respuestasAfirmativas <= 8) {
      setResultado(
        "Tienes una gran dependencia del móvil. Deberías seguir un plan de «desintoxicación» del móvil como por ejemplo dejar el móvil en casa cuando vas a comprar, apagarlo durante la noche, apagarlo durante horas de clase o trabajo, etc."
      );
    } else {
      setResultado(
        "Tus síntomas de dependencia son muy preocupantes. Además de todas las técnicas de los apartados anteriores deberías plantearte un plan de desintoxicación del móvil que consista en estar una o dos semanas sin utilizarlo. Si ves que no puedes hacerlo por ti mismo, pide ayuda a un profesional."
      );
    }
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <h1>Test de Dependencia del Móvil</h1>
        <Form>
          {preguntas.map((p, index) => (
            <FormGroup key={index} className="my-3">
              <Label>{p}</Label>
              <div>
                <Input
                  type="radio"
                  name={`p-${index}`}
                  onChange={() => handleCambios(index, true)}
                  checked={respuestas[index] === true}
                />{" "}
                Sí
                <Input
                  type="radio"
                  name={`p-${index}`}
                  onChange={() => handleCambios(index, false)}
                  checked={respuestas[index] === false}
                  className="ms-3"
                />{" "}
                No
              </div>
            </FormGroup>
          ))}
          <Button color="primary" onClick={calculaResultado} className="mt-4">
            Calcular Resultado
          </Button>
        </Form>
        {resultado && (
          <div className="mt-4 alert alert-info">
            <h4>Resultado:</h4>
            <p>{resultado}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
