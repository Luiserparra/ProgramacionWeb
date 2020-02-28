import React, { Component } from 'react';
import './aboutus.scss';
class Aboutus extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper  blue">
                        <a href="#" className="brand-logo "><img src={require("../Home/Images/logo_transparent.png")} className="picture1" /></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="#" onClick={() => this.props.handler(true, false,false,false,false)}>Pagina principal</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col s12" align='center'><h1>Sobre Nosotros</h1></div>
                        <div className="col s6"><img src={require("./images/logouninorte.jpg")} className="logouninorte" /></div>
                        <div className="col s6"><p>Guest House es la plataforma de hospedajes para universitarios No.1 de toda Barranquilla. Ayudamos a más de 1000 estudiantes de la Universidad del Norte en encontrar su hospedaje ideal. Un pionero en este negocio que ha sido historicamente un poco inseguro y sobre todo informal. Tenemos el proposito de en el proximo año expandirnos a más Universidades de mayor cantidad de ciudades del Caribe Colombiano.</p></div>
                    </div>
                    <div className="row">
                        <div className="col s12" align="center">
                            <h1>Nuestro Equipo</h1>
                        </div>
                        <div className="col s12" align="center">
                            <div className="row" ><i class="large material-icons">person</i></div>
                            <div className="row">Luis Ernesto Parra Beltrán</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aboutus;
