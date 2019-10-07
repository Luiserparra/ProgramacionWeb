import React, { Component } from 'react';
import fire from '../firebase';

class Signin extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout() {
        fire.auth().signOut();
    }
    render() {

        return (
            <div id="parent">
                <header className="navbar">
                    <nav>
                        <div className="nav-wrapper blue">
                            <a href="#" className="brand-logo">Guest house (Logo)</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a class="waves-effect waves-light btn " onClick = {this.logout} >Cerrar sesión</a></li>
                                <li><a class="waves-effect waves-light btn " href="">Sobre nosotros</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        );

    }
}
export default Signin;


