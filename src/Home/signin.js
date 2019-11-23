import React, { Component } from 'react';
import fire from '../firebase';
import M from 'materialize-css';
import options from 'materialize-css';
import './Home.scss';

class Signin extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.getRango = this.getRango.bind(this);
        this.createComentario = this.createComentario.bind(this);
        this.handler = this.handler.bind(this);
        this.desospedarme = this.desospedarme.bind(this);
        setTimeout(function () {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, options);
        }, 100);

        this.state = ({
            comentarios: "",
            newComentario:"",
            puntaje:"",
            newPuntaje:"",
            idDoc:""
        });
    }
    logout() {
        fire.auth().signOut();
        window.location.reload();
    }
    handler(e){
        this.setState({ [e.target.name]: e.target.value});
    }
    componentDidMount() {
        const $ = window.$;
        const db = fire.firestore();
        var foto = "";
        var comentarios = "";
        var puntaje = "";
        var punteado;
        var html = "";
        db.collection("Houses").where("Hospedado", "==", localStorage.getItem("email")).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var data = doc.data();
                console.log(data);
                foto = data.Foto;
                comentarios = data.Comentarios;
                puntaje = data.Puntaje;
                punteado = data.Punteado;
                this.setState({ ["comentarios"]: comentarios});
                this.setState({ ["puntaje"]: puntaje});
                this.setState({ ["idDoc"]: doc.id});
            });

            var comentariosV = comentarios.split("%");
            console.log("Inicio");
            console.log(comentariosV);
            console.log(comentarios);
            console.log("Fin");
            var minihtml = "";
            for(var i = 1; i<comentariosV.length; i++){
                minihtml+='<li class="collection-item avatar"><i class="material-icons circle">account_circle</i><span class="title">Comentario'+(i)+'</span><p>'+comentariosV[i]+'</p></li>';
            }
            html = '<div class="row"><div class="col s12" align="center"><img class="materialboxed" width="650" src="'+foto+'" align="center" /></div><div class="col s12" align="center"><ul class="collection">'+minihtml+'</ul></div><div class="col s6" align="center"><a class="waves-effect waves-light btn modal-trigger modal-close addCom" href="#modalC">Agregar comentario</a></div><div class="col s6" align="center"><a class="waves-effect waves-light btn desosBtn">Desospedarme</a></div></div>'; 
            $('.modelLlenar').first().append(html);
            if(punteado){
                $('.addCom').remove();
            }
            $('.desosBtn').on('click',()=>{
                this.desospedarme();
            });

        });
    }
    getRango() {
        const $ = window.$;
        var value = $('#rango').val();
        $('#puntaje').text(value);
        this.setState({ ["newPuntaje"]: value});
    }
    desospedarme(){
        const db = fire.firestore();
        db.collection("Houses").doc(this.state.idDoc).update({
            "Punteado":false,
            "Estado":"Libre",
            "Hospedado":"",
        });
        alert("Te has Desospedado correctamente");
    }
    createComentario() {
        const db = fire.firestore();
        var newComentario = this.state.comentarios+"%"+this.state.newComentario;
        var newPuntaje = this.state.puntaje+"%"+this.state.newPuntaje;
        db.collection("Houses").doc(this.state.idDoc).update({
           "Comentarios":newComentario,
           "Puntaje":newPuntaje,
            "Punteado":true
        }).then(()=>{
            alert('Se creo tu reseña correctamente');
            window.location.reload();
        }).catch((e)=>{
            alert("Hubo un error");
            window.location.reload();
        });
        
    }
    render() {
        return (
            <div id="parent">
                <header className="navbar">
                    <nav>
                        <div className="nav-wrapper blue">
                            <a href="#" className="brand-logo"><img src={require("./Images/logo_transparent.png")} class="picture1" /></a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a className="waves-effect waves-light btn" onClick={() => this.props.handler(false, false, false, true, false, false)}>Buscar hospedajes</a></li>
                                <li><a className="waves-effect waves-light btn modal-trigger" href="#modalH">Ver mi hospedaje</a></li>
                                <li><a className="waves-effect waves-light btn" onClick={() => this.props.handler(false, false, true, false, false, false)}>Ver mi perfil</a></li>
                                <li><a className="waves-effect waves-light btn " onClick={() => this.props.handler(false, false, false, false, true, false)} >Anfitriòn</a></li>
                                <li><a className="waves-effect waves-light btn " onClick={() => this.props.handler(false, true, false, false, false, false)} >Sobre nosotros</a></li>
                                <li><a className="waves-effect waves-light btn " onClick={this.logout} >Cerrar sesión</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <div id="modalH" className="modal">
                    <div className="modal-content modelLlenar">
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cerrar</a>
                    </div>
                </div>




                <div id="modalC" className="modal">
                    <div className="modal-content">
                        <div className="row">
                            <form class="col s12">
                                <div class="row">
                                    <div class="row">
                                        <div class="row">
                                            <div class="input-field col s12">
                                                <textarea id="textarea1" class="materialize-textarea" onChange={this.handler} name= "newComentario"></textarea>
                                                <label for="textarea1">Ingrese su comentario</label>
                                            </div>
                                        </div>
                                    </div>
                                    <input id="rango" type="range" min="1" max="10" step="1" onChange={this.getRango}></input>
                                    <div className="col s6" align="right"><i className="large material-icons">star</i></div><div className="col s6"><h1 id="puntaje">10</h1></div>
                                </div>
                            </form>
                            <button className="waves-effect waves-light btn boton modal-close" onClick={this.createComentario}>Enviar comentario</button>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cerrar</a>
                    </div>
                </div>




            </div >
        );

    }
}
export default Signin;


