import React, { Component } from 'react';
import fire from '../firebase';
import './profile.scss';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.previewFile = this.previewFile.bind(this);
        this.Save = this.Save.bind(this);
        this.state = ({
            email: localStorage.getItem('email'),
            Image: ""
        });
    }
    componentDidMount() {
        const $ = window.$;
        const db = fire.firestore();
        db.collection("profiles").where("Correo", "==", this.state.email)
            .get()
            .then(function (querySnapshot) {
                console.log(querySnapshot.size);
                if (querySnapshot.size != 0) {
                    querySnapshot.forEach(function(doc) {
                        $('#profilePic').attr('src',doc.data().Image);
                    });    
                }
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
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
        if ($('.botonSave').length == 0 && preview.src != "") {
            $('.botonAdd').after('<a class="btn-floating btn-large waves-effect waves-light red file-field input-field botonSave">Save</a>');
            $('.botonSave').click(() => this.Save(preview, this.state.email));
        }
    }
    Save = (img, mail) => {
        const db = fire.firestore();
        db.collection("profiles").where("Correo", "==", this.state.email)
            .get()
            .then(function (querySnapshot) {
                console.log(querySnapshot.size);
                if (querySnapshot.size == 0) {
                    db.collection("profiles").add({
                        Correo: mail,
                        Image: img.src
                    })
                        .then(function (docRef) {
                            console.log("Document written with ID: ", docRef.id);
                            alert('Foto de perfil actualizada exitosamente');
                        })
                        .catch(function (error) {
                            console.error("Error adding document: ", error);
                            alert('Hubo un error actualizar la foto de perfil');
                        });
                } else {
                    querySnapshot.forEach(function (doc) {
                        db.collection("profiles").doc(doc.id).update({
                            Image: img.src
                        })
                            .then(function () {
                                console.log("Document successfully updated!");
                                alert('Foto de perfil actualizada exitosamente');
                            })
                            .catch(function (error) {
                                // The document probably doesn't exist.
                                console.error("Error updating document: ", error);
                                alert('Hubo un error actualizar la foto de perfil');
                            });
                    });
                }
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
                <div className="container cardpanel">
                    <div class="card-panel z-depth-5">
                        <div className="row">
                            <div className="col s6" align='center'><img id="profilePic" src={require("./images/profile.png")} className="circle responsive-img" /><div class="btn-floating btn-large waves-effect waves-light red file-field input-field botonAdd"><span>Add</span><input type="file" onChange={this.previewFile} /></div></div>
                            <div className="col s6" aling='center'><h6>Hola a todos, soy</h6><br /><h4>{this.state.email}</h4><br /><b>ESTUDIANTE DE INGENIERIA DE SISTEMAS</b><br />
                                <div className="col s4"><i class="material-icons">perm_contact_calendar</i><h6> 16/12/1998</h6></div>
                                <div className="col s4"><i class="material-icons">local_phone</i><h6> 3001234567</h6></div>
                                <div className="col s4"><i class="material-icons">email</i><h6>ejemplo@correo.com</h6></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
