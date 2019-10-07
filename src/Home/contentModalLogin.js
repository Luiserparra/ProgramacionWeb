import React, { Component } from 'react';
import fire from '../firebase';

class ContentModalLogin extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.forgotPassword = this.forgotPassword.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }
  forgotPassword(e){
    e.preventDefault();
    if(this.state.email === ''){
        alert('Porfavor diligencie el campo de correo');
    }
    fire.auth().sendPasswordResetEmail(this.state.email)
      .then((u) => {
        alert('Porfavor revise su correo electronico...');
      }).catch(function (e) {
        console.log(e);
      })
  }
  
  render() {
    return (
       <div className="col-md-6">
       <form>
      <div className="form-group">
       <label htmlFor="exampleInputEmail1">Correo electronico</label>
       <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
       <small id="emailHelp" className="form-text text-muted">Nunca compartiremos tu correo con nadie</small>
      </div>
       <div className="form-group">
      <label htmlFor="exampleInputPassword1">Contraseña</label>
      <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button type="submit" onClick={this.login} className="btn btn-primary">Iniciar sesión</button>
      <button onClick={this.forgotPassword} className="btn btn-success">Recupera tu contraseña</button>
 </form>
 
 </div>
    );
  }
}
export default ContentModalLogin;