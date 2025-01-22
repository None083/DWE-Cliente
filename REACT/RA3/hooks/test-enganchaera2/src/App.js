import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

class App extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      preguntas: [
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
      ],
      respuestasSi: 0
    }
  }

  render() {
    return (
      <></>
    )
  }
}

export default App;
