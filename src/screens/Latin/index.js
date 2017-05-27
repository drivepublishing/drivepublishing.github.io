import React, { Component } from 'react'
import logo from './latin.png';
import backgroundLogo from '../../static/images/drv-transparent.png';

export class Latin extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="excerpt solutions">
          <div className="excerpt-header"><img className="animated fadeIn" src={logo} alt="Drive Latin" /></div>
          <div className="excerpt-headline">Cada día es más importante proteger los derechos de expresión de compositores y la música.</div>
          <div className="excerpt-summary">
            <div className="excerpt-summary__paragraph">Los que trabajamos dentro de esta industria, tenemos el gran deber de proteger aquellos que tienen el don de crear ésta expresión que nos llena tanto a todos.  DRV es una empresa dedicada a proteger a la música y trabajamos todos los días en fortalecer y educar, sobre la protección de las composiciones, el proceso de regalías y encontrar nuevas fuentes de ingresos.</div>
            <div className="excerpt-summary__paragraph">El autor como persona y el valor de sus composiciones a largo plazo, son de mayor importancia para nosotros. Tenga toda la confianza en llamarnos con cualquier pregunta sobre su catalogo, o regalías.</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Latin
