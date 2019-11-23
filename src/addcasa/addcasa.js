import React, { Component } from 'react';
import M from 'materialize-css';
import options from 'materialize-css';
import './addcasa.scss';
import fire from '../firebase';
class Addcasa extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.createHouse = this.createHouse.bind(this);
        this.previewFile = this.previewFile.bind(this);
        this.handleChangeChecks = this.handleChangeChecks.bind(this);
        setTimeout(function () {
            var elems3 = document.querySelectorAll('.materialboxed');
            var instances3 = M.Materialbox.init(elems3, options);
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, options);
            var elems2 = document.querySelectorAll('.datepicker');
            var instances2 = M.Datepicker.init(elems2, options);
        }, 100);
        this.state = ({
            Direccion:"",
            Precio: "",
            Aire: false,
            Cuarto: false,
            Comida: false,
            Foto: ""
        });

    }

    handleChange(e) {
        console.log(e.target.name+":"+ e.target.value);
        this.setState({ [e.target.name]: e.target.value});
    }
    handleChangeChecks(e) {
        console.log(e.target.name+":"+ e.target.checked);
        this.setState({ [e.target.name]: e.target.checked});
    }

    createHouse = () => {
        var funciono;
        const db = fire.firestore();
        var id = Math.random().toString().slice(2,10);
        db.collection("Houses").add({
            Id: id,
            Owner: localStorage.getItem("email"),
            Direccion: this.state.Direccion,
            Precio:this.state.Precio,
            Aire: this.state.Aire,
            Cuarto: this.state.Cuarto,
            Comida: this.state.Comida,
            Foto: this.state.Foto,
            Estado: "Libre",
            Hospedado:"",
            Puntaje:"",
            Comentarios:"",
            Punteado:false
        })
        .then( (docRef) =>{
            funciono = true;
            alert('anuncio creado exitosamente');
            this.props.handler(false, false, false, false, true, false);
        })
        .catch( (error) =>{
            funciono = false;
            console.log(error);
            alert('Hubo un error al crear el anuncio');
        });

    }

        
    previewFile = () => {
        const $ = window.$;
        var preview = document.getElementById('profilePic');
        var file = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader();

        reader.onloadend = function () {
            preview.src = reader.result;
        }

        if (file) {
            reader.readAsDataURL(file);
            
        } else {
            preview.src = "";
        }
        if (preview.src != "") {
            setTimeout(()=>{
                console.log(preview.src);
                this.setState({["Foto"]:preview.src});
            }, 500);
            
        }
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper  blue">
                        <a href="#" className="brand-logo "><img src={require("../Home/Images/logo_transparent.png")} className="picture1" /></a>
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
                                        <input id="first_name" type="text" class="validate" onChange={this.handleChange} name = "Direccion"/>
                                        <label for="first_name">Direcciòn</label>
                                    </div>
                                    <div class="input-field col s6">
                                        <input id="last_name" type="text" class="validate" onChange={this.handleChange} name = "Precio"/>
                                        <label for="last_name">Precio</label>
                                    </div>
                                </div>
                                <div className="row checks">
                                    <div className="input-field col s4">
                                        <label>
                                            <input type="checkbox" onChange={this.handleChangeChecks} name = "Aire"/>
                                            <span>Aire acondicionado</span>
                                        </label>
                                    </div>
                                    <div className="input-field col s4">
                                        <label>
                                            <input type="checkbox" onChange={this.handleChangeChecks} name = "Cuarto"/>
                                            <span>Cuarto individual</span>
                                        </label>
                                    </div>
                                    <div className="input-field col s4">
                                        <label>
                                            <input type="checkbox" onChange={this.handleChangeChecks} name = "Comida"/>
                                            <span>Comida incluida</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="file-field input-field">
                                    <div class="btn">
                                        <span>File</span>
                                        <input type="file" onChange={this.previewFile} name = "Foto"/>
                                    </div>
                                    <div class="file-path-wrapper">
                                        <input class="file-path validate" type="text" placeholder="Suba las fotos de su exclusivo hospedaje"/>
                                    </div>
                                </div>
                                <div className="col s12" align='center'><img id="profilePic" src="" className="responsive-img"/></div>

                            </form>
                            <button className="waves-effect waves-light btn boton" onClick={this.createHouse}>Agregar anuncio</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Addcasa;
