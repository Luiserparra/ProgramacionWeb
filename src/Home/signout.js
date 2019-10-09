import React, { Component } from 'react';
import ContentModalLogin from './contentModalLogin';
import ContentModalSignin from './contentModalSignin';
import  "./Home.scss";



class Signout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="parent">
        <header className="navbar">
          <nav>
            <div className="nav-wrapper blue">
              <a href="#" className="brand-logo"><img src={require("./images/logo_transparent.png")} class = "picture1"/></a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a className="waves-effect waves-light btn modal-trigger" href="#modalLogin">Iniciar sesión</a></li>
                <li><a className="waves-effect waves-light btn modal-trigger" href="#modalSignin">Registrarse</a></li>
                <li><a className="waves-effect waves-light btn" onClick = {() => this.props.handler(false,true,false,false,false)} >Sobre nosotros</a></li>
              </ul>
            </div>
          </nav>
        </header>
        <div id="modalLogin" className="modal">
          <div className="modal-content">
            <ContentModalLogin />
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cerrar</a>
          </div>
        </div>
        <div id="modalSignin" className="modal">
          <div className="modal-content">
            <ContentModalSignin />
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cerrar</a>
          </div>
        </div>
      </div>
    );
  }
}
export default Signout;


