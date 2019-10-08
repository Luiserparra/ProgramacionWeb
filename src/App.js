import React, { Component } from 'react';
import Home from './Home/Home';
import Aboutus from './About us/aboutus';
import Profile from './profile/profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      principal: true,
      aboutus: false,
      profile: false
    });
    this.handler = this.handler.bind(this);
  }

  handler(a, b, c) {
    this.setState({
      principal: a,
      aboutus: b,
      profile: c
    })
    if(a){
      window.location.reload();
    }
  }

  render() {
    return (
      <div id="parent">
        { 
          this.state.principal ?
          (<Home handler = {this.handler}/>) : (this.state.aboutus ? (<Aboutus handler = {this.handler}/>) : (<Profile handler = {this.handler}/>))
        }
      </div>
    );
  }
}
export default App;


