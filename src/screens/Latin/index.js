import React, { Component } from 'react';

const PUBLIC_PATH = 'public';

export class Latin extends Component {
  render() {
    return (
      <div>
        <div
          className="excerpt solutions"
          style={{backgroundImage: `url(${PUBLIC_PATH})/images/furley_bg.png`}}>
          <div className="excerpt-header">
            <img
              className="animated fadeIn"
              src={`${PUBLIC_PATH}/images/latin.png`}
              alt="Drive Latin" />
          </div>
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

export default Latin;
