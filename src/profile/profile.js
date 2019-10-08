import React, { Component } from 'react';
import './profile.scss';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state =({
            user : localStorage.getItem('user')
        });
    }
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper  blue">
                        <a href="#" className="brand-logo "><img src={require("../Home/images/logo_transparent.png")} className="picture1" /></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="#" onClick={() => this.props.handler(true, false, false,false,false,false)}>Pagina principal</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="container cardpanel">
                    <div class="card-panel z-depth-5">
                        <div className="row">
                            <div className="col s6" align='center'><img src={require("./images/profile.png")} className="circle responsive-img" /></div>
                            <div className="col s6" aling='center'><h6>Hola a todos, soy</h6><br/><h4>{this.state.user}</h4><br/><b>ESTUDIANTE DE INGENIERIA DE SISTEMAS</b><br/>
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
