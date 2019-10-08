import React, { Component } from 'react';
import fire from '../firebase';
import Signin from './signin';
import Signout from './signout';
class Header extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
      principal: true,
      aboutus: false
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.displayName ? user.displayName : user.email);
      } else {
        this.setState({ user: null });
        localStorage.setItem('user', '');
      }
    });
  }
  render() {
    return (
      <div>{this.state.user ? (<Signin handler = {this.props.handler}/>) : (<Signout handler = {this.props.handler}/>)}</div>
    )
  };
}

export default Header;