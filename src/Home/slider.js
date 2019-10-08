import React from 'react';


function Slider() {
  return (
    <div id="parent">
    <section id="slide-show">
        <div className="slider">
          <ul className="slides">
            <li>
              <img src={require('./images/imagen1.jpg')} alt="slider image"/>
              <div className="caption center-align">
                <h3>Encuentra tu hospedaje ideal</h3>
                <h5 className="light grey-text text-lighten-3">Has entre busquedas simples y avanzadas</h5>
              </div>
            </li>
            <li>
              <img src={require('./images/imagen2.png')} alt="slider image"/>
              <div className="caption left-align">
                <h3>Conoce nuevas personas en los mejores y más amigables hospedajes</h3>
                <h5 className="light grey-text text-lighten-3">Está a tu elección compartir tu cuarto en tu hospedaje</h5>
              </div>
            </li>
            <li>
              <img src={require('./images/imagen3.png')} alt="slider image"/>
              <div className="caption right-align">
                <h3>Un buen hospedaje es un buen lugar para estudiar y comenzar a forjar un buen futuro</h3>
                <h5 className="light grey-text text-lighten-3">Si no te gusta estudiar en la biblioteca, busca entre nuestros hospedajes más silenciosos</h5>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
    );
}

export default Slider;