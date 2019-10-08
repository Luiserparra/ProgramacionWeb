import React, { Component } from 'react';
import M from 'materialize-css';
import options from 'materialize-css';
import './addcasa.scss';
class Addcasa extends Component {
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
                            <li><a href="#" onClick={() => this.props.handler(true, false, false, false, false)}>Pagina principal</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="container cardpanel">
                    <div className="card-panel z-depth-5">
                        <div className="row">
                            <form class="col s12">
                                <div class="row">
                                    <div class="input-field col s6">
                                        <input id="first_name" type="text" class="validate" />
                                        <label for="first_name">Direcciòn</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <input id="last_name" type="text" class="validate" />
                                        <label for="last_name">Precio</label>
                                    </div>
                                </div>
                                <div className="row checks">
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
                                <div class="file-field input-field">
                                    <div class="btn">
                                        <span>File</span>
                                        <input type="file" multiple />
                                    </div>
                                    <div class="file-path-wrapper">
                                        <input class="file-path validate" type="text" placeholder="Suba las fotos de su exclusivo hospedaje" />
                                    </div>
                                </div>
                            </form>
                            <button className="waves-effect waves-light btn boton">Agregar anuncio</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Addcasa;
