import React, { Component } from 'react';
import './newanfitrion.scss';
import fire from '../firebase';
class Newanfitrion extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var html = '';
        const $ = window.$;
        const db = fire.firestore();
        db.collection("Houses").where("Owner", "==", localStorage.getItem('email'))
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    console.log(doc.data());
                    html += '<tr><td><a>'+doc.data().Id+'</a></td><td>'+doc.data().Direccion+'</td><td>'+doc.data().Precio+'</td><td>'+doc.data().Estado+'</td><td><i class="material-icons delete">clear</i></td></tr>';
                });
                $('#thetable tr').first().after(html);
                $(".delete").on('click', function(event) {
                    $(this).parent().parent().remove();
                    const db = fire.firestore();
                    var idDoc = $(this).parent().parent().find('td a').text();
                    db.collection("Houses").where("Id","==",idDoc)
                    .get()
                    .then(function(querySnapshot){
                        querySnapshot.forEach(function(doc) {
                            db.collection("Houses").doc(doc.id).delete().then(function() {
                                console.log("Document successfully deleted!");
                            }).catch(function(error) {
                                console.error("Error removing document: ", error);
                            });
                        });
                    })
                    .catch(function(error){
                        console.log("Error getting documents: ", error);
                    })
                });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
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
                            <table id = "thetable">
                                <thead>
                                    <tr>
                                        <th>Id Anuncio</th>
                                        <th>Direcciòn</th>
                                        <th>Precio</th>
                                        <th>Estado</th>
                                        <th>Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col s12" align='center'>
                            <a className="waves-effect waves-light btn " onClick={() => this.props.handler(false, false, false, false, false, true)} >Agregar anuncio de hospedaje</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function llenar() {

}

export default Newanfitrion;



