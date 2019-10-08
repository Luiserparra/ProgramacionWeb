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
                <h3>Mensaje 1</h3>
                <h5 className="light grey-text text-lighten-3">Pequeño Mensaje 1</h5>
              </div>
            </li>
            <li>
              <img src={require('./images/imagen2.png')} alt="slider image"/>
              <div className="caption left-align">
                <h3>Mensaje 2</h3>
                <h5 className="light grey-text text-lighten-3">Pequeño Mensaje 2</h5>
              </div>
            </li>
            <li>
              <img src={require('./images/imagen3.png')} alt="slider image"/>
              <div className="caption right-align">
                <h3>Mensaje 3</h3>
                <h5 className="light grey-text text-lighten-3">Pequeño Mensaje 3</h5>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
    );
}

export default Slider;