import React, { Component } from 'react';
import fire from '../firebase';
import Signin from './signin';
import Signout from './signout';
class Header extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
     <div>{this.state.user ?  ( <Signin/>) : (<Signout/>)}</div>
    )};
}

 export default Header;