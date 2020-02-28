import React, { Component } from 'react';
import './seeker.scss';
import M from 'materialize-css';
import options from 'materialize-css';
import fire from '../firebase';
class Seeker extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeChecks = this.handleChangeChecks.bind(this);
        this.Buscar = this.Buscar.bind(this);
        this.hospedarse = this.hospedarse.bind(this);
        setTimeout(function () {
            var elems3 = document.querySelectorAll('.materialboxed');
            var instances3 = M.Materialbox.init(elems3, options);
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, options);
            var elems2 = document.querySelectorAll('.datepicker');
            var instances2 = M.Datepicker.init(elems2, options);
            var elems8 = document.querySelectorAll('.modal');
            var instances8 = M.Modal.init(elems8, options);
        }, 100);

        this.state = ({
            Precio: "",
            Aire: false,
            Cuarto: false,
            Comida: false,
            idDoc:""
        });

    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleChangeChecks(e) {
        this.setState({ [e.target.name]: e.target.checked });
    }

    Buscar = () => {
        var html = '';
        const $ = window.$;
        $('.resultados').remove();
        const db = fire.firestore();
        var PrecioMin = this.state.Precio.split("-")[0];
        var PrecioMax = this.state.Precio.split("-")[1];
        console.log(PrecioMin);
        console.log(PrecioMax);
        db.collection("Houses").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var data = doc.data();
                if (data.Owner !== localStorage.getItem("email")) {
                    if (data.Estado === "Libre") {
                        if (parseInt(PrecioMin) <= parseInt(data.Precio)) {
                            if (parseInt(PrecioMax) >= parseInt(data.Precio)) {
                                if (this.state.Aire == data.Aire) {
                                    if (this.state.Comida == data.Comida) {
                                        if (this.state.Cuarto == data.Cuarto) {
                                            console.log(data);
                                            console.log(data.Puntaje);
                                            console.log(doc.id);
                                            this.setState({ ["idDoc"]: doc.id});
                                            if(data.Puntaje===""){
                                                html += '<div class="card-panel z-depth-5 col s4  resultados" id = "'+data.Id+'"><img class="materialboxed" width="650" src="' + data.Foto + '" align="center" /><div class="col s12"><i class="material-icons res">home</i><h6 class="res">' + data.Direccion + '</h6></div><div class="col s12"><i class="material-icons res">attach_money</i><h6 class="res">' + data.Precio + '</h6></div><div class="col s12"><i class="material-icons res">star_border</i><h6 class="res">Todavìa no posee reseñas</h6></div></div>';
                                            }else{
                                                var puntajes = data.Puntaje.split("%");
                                                var newPuntaje = 0;
                                                for(var i = 1; i<puntajes.length;i++){
                                                    newPuntaje = newPuntaje + parseInt(puntajes[i]);
                                                }
                                                newPuntaje = parseInt(newPuntaje/(puntajes.length-1));
                                                html += '<div class="card-panel z-depth-5 col s4  resultados" id = "'+data.Id+'"><img class="materialboxed" width="650" src="' + data.Foto + '" align="center" /><div class="col s12"><i class="material-icons res">home</i><h6 class="res">' + data.Direccion + '</h6></div><div class="col s12"><i class="material-icons res">attach_money</i><h6 class="res">' + data.Precio + '</h6></div><div class="col s12"><i class="material-icons res">star_border</i><h6 class="res">'+newPuntaje+'/10</h6></div></div>';
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
            $('.results').first().append(html);
            $('.resultados').on('click',(e)=>{
                var realTarget = e.target.id;
                var reg = /^\d+$/;
                var esElQueBusco = reg.test(realTarget);
                if(!esElQueBusco){
                    realTarget = $(e.target).closest('.resultados').attr('id');
                }
                $('#modalA').modal('open');
            });
        });
    }

    hospedarse(){
        const db = fire.firestore();
        console.log(this.state.idDoc);
        db.collection("Houses").doc(this.state.idDoc).update({
            "Punteado":false,
            "Estado":"Ocupado",
            "Hospedado":localStorage.getItem("email"),
        }).then(()=>{
            alert("Te has Hospedado correctamente");
        }).catch((e)=>{
            alert("Hubo un error");
        });
        
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper  blue">
                        <a href="#" className="brand-logo "><img src={require("../Home/Images/logo_transparent.png")} className="picture1" /></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="#" onClick={() => this.props.handler(true, false, false, false, false, false)}>Pagina principal</a></li>
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
                                        <select onChange={this.handleChange} name="Precio">
                                            <option value="">Escoja una opciòn</option>
                                            <option value="100000-200000">$100,000-$200,000</option>
                                            <option value="200000-300000">$200,000-$300,000</option>
                                            <option value="300000-400000">$300,000-$400,000</option>
                                            <option value="400000-500000">$400,000-$500,000</option>
                                            <option value="500000-600000">$500,000-$600,000</option>
                                            <option value="600000-700000">$600,000-$700,000</option>
                                            <option value="700000-800000">$700,000-$800,000</option>
                                            <option value="800000-900000">$800,000-$900,000</option>
                                            <option value="900000-1000000">$900,000-$1,000,000</option>
                                        </select>
                                        <label>Seleccione su rango de precio</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <div className="row">
                                            <div className="input-field col s4">
                                                <label>
                                                    <input type="checkbox" onChange={this.handleChangeChecks} name="Aire" />
                                                    <span>Aire acondicionado</span>
                                                </label>
                                            </div>
                                            <div className="input-field col s4">
                                                <label>
                                                    <input type="checkbox" onChange={this.handleChangeChecks} name="Cuarto" />
                                                    <span>Cuarto individual</span>
                                                </label>
                                            </div>
                                            <div className="input-field col s4">
                                                <label>
                                                    <input type="checkbox" onChange={this.handleChangeChecks} name="Comida" />
                                                    <span>Comida incluida</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <button className="waves-effect waves-light btn" onClick={this.Buscar}>Realizar busqueda</button>
                        </div>
                    </div>
                </div>
                <div className="container buscador">
                    <div className="card-panel z-depth-5">
                        <div className="row results">
                        </div>
                    </div>
                </div>


                <div id="modalA" className="modal">
                    <div className="modal-content">
                        <div className="row">
                            <h3>¿Desea hospedarse aquì?</h3>
                            <button className="waves-effect waves-light btn boton modal-close col s6" onClick={this.hospedarse}>Si</button>
                            <button className="waves-effect waves-light btn boton modal-close col s6">No</button>
                        </div>
                    </div>
                </div>



            </div>
        );
    }
}




export default Seeker;
