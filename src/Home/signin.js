import React, { Component } from 'react';
import fire from '../firebase';
import { Link } from 'react-router-dom';

class Signin extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout() {
        fire.auth().signOut();
        window.location.reload();
    }
    render() {

        return (
            <div id="parent">
                <header className="navbar">
                    <nav>
                        <div className="nav-wrapper blue">
                            <a href="#" className="brand-logo">Guest house (Logo)</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a className="waves-effect waves-light btn " onClick={this.logout} >Cerrar sesión</a></li>
                                <li><a className="waves-effect waves-light btn " onClick = {() => this.props.handler(false,true)} >Sobre nosotros</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        );

    }
}
export default Signin;


