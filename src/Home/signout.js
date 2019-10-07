import React from 'react';
import ContentModalLogin from './contentModalLogin';
import ContentModalSignin from './contentModalSignin';

function Signout() {
  return (
    <div id="parent">
    <header className="navbar">
      <nav>
        <div className="nav-wrapper blue">
          <a href="#" className="brand-logo">Guest house (Logo)</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a className="waves-effect waves-light btn modal-trigger" href="#modalLogin">Iniciar sesión</a></li>
            <li><a className="waves-effect waves-light btn modal-trigger" href="#modalSignin">Registrarse</a></li>
            <li><a className="waves-effect waves-light btn " href="">Sobre nosotros</a></li>
          </ul>
        </div>
      </nav>
    </header>
    <div id="modalLogin" className="modal">
      <div className="modal-content">
        <ContentModalLogin/>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cerrar</a>
      </div>
    </div>
    <div id="modalSignin" className="modal">
      <div className="modal-content">
        <ContentModalSignin/>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cerrar</a>
      </div>
    </div>
  </div>
  );
}
export default Signout;


