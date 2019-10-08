import React, { Component } from 'react';
import './newanfitrion.scss';
class Newanfitrion extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper  blue">
                        <a href="#" className="brand-logo "><img src={require("../Home/images/logo_transparent.png")} className="picture1" /></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="#" onClick={() => this.props.handler(true, false, false, false, false,false)}>Pagina principal</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col s12" align='center'>
                            <h1>MIS ANUNCIOS</h1>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col s12" align='center'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Id Anuncio</th>
                                        <th>Direcciòn</th>
                                        <th>Precio</th>
                                        <th>Estado</th>
                                        <th>Desde</th>
                                        <th>Cuando</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><a>656625626556</a></td>
                                        <td>Calle 1</td>
                                        <td>$100,000</td>
                                        <td>Ocupado</td>
                                        <td>01/01/2019</td>
                                        <td>01/01/2020</td>
                                    </tr>
                                    <tr>
                                        <td><a>364728567573</a></td>
                                        <td>Calle 2</td>
                                        <td>$200,000</td>
                                        <td>Libre</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><a>324932983293</a></td>
                                        <td>Calle 3</td>
                                        <td>$300,000</td>
                                        <td>Ocupado</td>
                                        <td>15/06/2019</td>
                                        <td>20/11/2019</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col s12" align='center'>
                            <a className="waves-effect waves-light btn " onClick = {() => this.props.handler(false,false,false,false,false,true)} >Agregar anuncio de hospedaje</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Newanfitrion;
