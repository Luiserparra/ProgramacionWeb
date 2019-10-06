import React from 'react';


function Header() {
  return (
    <div id="parent">
      <header className="navbar">
        <nav>
          <div className="nav-wrapper blue">
            <a href="#" className="brand-logo">Guest house (Logo)</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a class="waves-effect waves-light btn modal-trigger" href="#modalLogin">Iniciar sesión</a></li>
              <li><a class="waves-effect waves-light btn modal-trigger" href="#modalSignin">Registrarse</a></li>
              <li><a class="waves-effect waves-light btn " href="">Sobre nosotros</a></li>
            </ul>
          </div>
        </nav>
      </header>
      <div id="modalLogin" class="modal">
        <div class="modal-content">
          <h4>Modal Header</h4>
          <p>Login</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cancelar</a>
        </div>
      </div>
      <div id="modalSignin" class="modal">
        <div class="modal-content">
          <h4>Modal Header</h4>
          <p>Signin</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cancelar</a>
        </div>
      </div>
    </div>
  );
}



export default Header;