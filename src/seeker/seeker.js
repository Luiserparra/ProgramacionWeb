import React, { Component } from 'react';
import './seeker.scss';
import M from 'materialize-css';
import options from 'materialize-css';
class Seeker extends Component {
    constructor(props) {
        super(props);
        setTimeout(function () {
            var elems3 = document.querySelectorAll('.materialboxed');
            var instances3 = M.Materialbox.init(elems3, options);
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, options);
            var elems2 = document.querySelectorAll('.datepicker');
            var instances2 = M.Datepicker.init(elems2, options);
        }, 100);

    }
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper  blue">
                        <a href="#" className="brand-logo "><img src={require("../Home/images/logo_transparent.png")} className="picture1" /></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="#" onClick={() => this.props.handler(true, false, false, false,false)}>Pagina principal</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="container cardpanel">
                    <div className="card-panel z-depth-5">
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <select>
                                            <option value="" disabled selected>Escoja una opciòn</option>
                                            <option value="Norte">Norte</option>
                                            <option value="Centro">Centro</option>
                                            <option value="Sur">Sur</option>
                                        </select>
                                        <label>Seleccione la zona</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <select>
                                            <option value="">Escoja una opciòn</option>
                                            <option value="$100,000-$200,000">$100,000-$200,000</option>
                                            <option value="$200,000-$300,000">$200,000-$300,000</option>
                                            <option value="$300,000-$400,000">$300,000-$400,000</option>
                                            <option value="$400,000-$500,000">$400,000-$500,000</option>
                                            <option value="$500,000-$600,000">$500,000-$600,000</option>
                                            <option value="$600,000-$700,000">$600,000-$700,000</option>
                                            <option value="$700,000-$800,000">$700,000-$800,000</option>
                                            <option value="$800,000-$900,000">$800,000-$900,000</option>
                                            <option value="$900,000-$1,000,000">$900,000-$1,000,000</option>
                                        </select>
                                        <label>Seleccione su rango de precio</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s3">
                                        <input type="text" class="datepicker" />
                                        <label>Desde</label>
                                    </div>
                                    <div className="input-field col s3">
                                        <input type="text" class="datepicker" />
                                        <label>Hasta</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <div className="row">
                                            <div className="input-field col s4">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span>Aire acondicionado</span>
                                                </label>
                                            </div>
                                            <div className="input-field col s4">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span>Cuarto individual</span>
                                                </label>
                                            </div>
                                            <div className="input-field col s4">
                                                <label>
                                                    <input type="checkbox" />
                                                    <span>Comida incluida</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <button className="waves-effect waves-light btn">Realizar busqueda</button>
                        </div>
                    </div>
                </div>
                <div className="container buscador">
                    <div className="card-panel z-depth-5">
                        <div className="row">
                            <div className="card-panel z-depth-5 col s4  resultados">
                                <img class="materialboxed" width="650" src={require("./images/room1.jfif")} align="center" />
                                <div className="col s12"><i class="material-icons res">home</i><h6 className="res"> Comodo cuarto cerca de la universidad</h6></div>
                                <div className="col s12"><i class="material-icons res">attach_money</i><h6 className="res"> $500,000</h6></div>
                                <div className="col s12"><i class="material-icons res">star_border</i><h6 className="res">7/10</h6></div>
                            </div>
                            <div className="card-panel z-depth-5 col s4  resultados">
                                <img class="materialboxed" width="650" src={require("./images/room2.jpg")} />
                                <div className="col s12"><i class="material-icons res">home</i><h6 className="res"> Hogareño cuarto en el norte de la ciudad</h6></div>
                                <div className="col s12"><i class="material-icons res">attach_money</i><h6 className="res"> $600,000</h6></div>
                                <div className="col s12"><i class="material-icons">star_border</i><h6 className="res">8/10</h6></div>
                            </div>
                            <div className="card-panel z-depth-5 col s4  resultados">
                                <img class="materialboxed" width="650" src={require("./images/room3.jpg")} />
                                <div className="col s12"><i class="material-icons res">home</i><h6 className="res"> Moderno aparta-estudio con todas las comodidades</h6></div>
                                <div className="col s12"><i class="material-icons res">attach_money</i><h6 className="res"> $800,000</h6></div>
                                <div className="col s12"><i class="material-icons res">star_border</i><h6 className="res">9/10</h6></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Seeker;
