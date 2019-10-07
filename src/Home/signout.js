import React, { Component } from 'react';
import ContentModalLogin from './contentModalLogin';
import ContentModalSignin from './contentModalSignin';
import { Redirect, BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Aboutus from '../About us/aboutus';

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
              <a href="#" className="brand-logo">Guest house (Logo)</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a className="waves-effect waves-light btn modal-trigger" href="#modalLogin">Iniciar sesión</a></li>
                <li><a className="waves-effect waves-light btn modal-trigger" href="#modalSignin">Registrarse</a></li>
                <li><a className="waves-effect waves-light btn" onClick = {() => this.props.handler(false,true)} >Sobre nosotros</a></li>
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


