import React, { Component } from 'react';
import fire from '../firebase';

class ContentModalSignin extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.forgotPassword = this.forgotPassword.bind(this);
    this.state = {
      email: '',
      password: '',
      repeatpassword: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  signup(e) {
    e.preventDefault();
    if (this.state.password !== this.state.repeatpassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).then((u) => { console.log(u) })
      .catch((error) => {
        console.log(error.code);
        switch (error.code) {
          case "auth/weak-password":
            alert('La contraseña debe contener por lo menos 6 caracteres');
            break;
          case "auth/email-already-in-use":
            alert('Esta cuenta ya esta en uso en nuestra plataforma por favor utilizar una nueva o intente recuperar su contraseña');
            break;
          case "auth/user-not-found":
            alert('La cuenta no esta resgistrada en nuestra plataforma por favor registrarse');
            break;
          case "auth/invalid-email":
            alert('Ingrese un correo electronico valido');
            break;
          default:
            break;
        }
      })
  }
  forgotPassword(e) {
    e.preventDefault();
    if (this.state.email === '') {
      alert('Porfavor diligencie el campo de correo');
    }
    fire.auth().sendPasswordResetEmail(this.state.email)
      .then((u) => {
        alert('Porfavor revise su correo electronico...');
      }).catch(function (e) {
        console.log(e);
        switch (e.code) {
          case "auth/user-not-found":
            alert('La cuenta no esta resgistrada en nuestra plataforma por favor registrarse');
            break;
          default:
            break;
        }
      })
  }
  render() {
    return (
      <div className="col-md-6">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Correo electronico</label>
            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">Nunca compartiremos tu correo electronico con nadie.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Contraseña</label>
            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword2">Repita su Contraseña</label>
            <input value={this.state.repeatpassword} onChange={this.handleChange} type="password" name="repeatpassword" className="form-control" id="exampleInputPassword2" placeholder="Password" />
          </div>
          <button type="submit" onClick={this.signup} className="btn btn-success">Registrate</button>
          <button onClick={this.forgotPassword} className="btn btn-success">Recupera tu contraseña</button>
        </form>

      </div>
    );
  }
}
export default ContentModalSignin;