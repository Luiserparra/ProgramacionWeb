import React from 'react';


function Content() {
  return (
    <div id="parent">
    <section id="services">
        <div className="container">
          <div className="center gap">
            <h3 id="servicios">Nuestros servicios</h3>
            <p className="lead" id="m11">Busca, encuentra y reserva los mejores hospedajes en las mejores locaciones. </p>
          </div>
          <div className="row">
            <div className="col s6 center gap">
              <div className="span4">
                <div className="media">
                  <div className="center gap">
                    <i className="large material-icons">search</i>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading center gap" id="busca">BUSCA</h4>
                    <p id="m11">Busca entre los mejores hospedajes en las mejores locaciones que tenemos disponibles para ti para que compares y tomes la mejor desición el cual sera tu nuevo hogar.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s6 center gap">
              <div className="span4">
                <div className="media">
                  <div className="center gap">
                    <i className="large material-icons">chat</i>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading center gap" id="comunicate">COMUNICATE</h4>
                    <p id="m11" >Chatea con los mejores anfitriones de toda barranquilla. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col s6 center gap">
              <div className="span4">
                <div className="media">
                  <div className="center gap">
                    <i className="large material-icons">star</i>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading center gap" id="compra">COMPARA CALIFICACIONES DE OTROS USUARIOS</h4>
                    <p id="m11" >Revisa y compara con las opiniones de los anteriores y actuales inquilinos de nuestros anfitriones. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s6 center gap">
              <div className="span4">
                <div className="media">
                  <div className="center gap">
                    <i className="large material-icons ">bookmark</i>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading center gap" id="agenda">AGENDA CON TU FAVORITO</h4>
                    <p id="m11" >No pierdas el tiempo y aprovecha a quedarte con los mejores hospedajes de barranquilla para disfrutar al maximo tu vida universitaria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
}

export default Content;

