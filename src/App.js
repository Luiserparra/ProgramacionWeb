import React, { Component } from 'react';
import Home from './Home/Home';
import Aboutus from './About us/aboutus';
import Profile from './profile/profile';
import Seeker from './seeker/seeker';
import Newanfitrion from './anfitrion/newanfitrion';
import Addcasa from './addcasa/addcasa';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      principal: true,
      aboutus: false,
      profile: false,
      seeker: false,
      newanfitrion: false,
      addcasa:false
    });
    this.handler = this.handler.bind(this);
  }

  handler(a, b, c, d, e, f) {
    this.setState({
      principal: a,
      aboutus: b,
      profile: c,
      seeker: d,
      newanfitrion: e,
      addcasa:f
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
          (<Home handler = {this.handler}/>) : 
          (this.state.aboutus ? (<Aboutus handler = {this.handler}/>) : 
          (this.state.profile ? (<Profile handler = {this.handler}/>) : 
          (this.state.seeker ? (<Seeker handler = {this.handler}/>) :
          (this.state.newanfitrion ? (<Newanfitrion handler = {this.handler}/>) :
          (<Addcasa handler = {this.handler}/>)))))
        }
      </div>
    );
  }
}
export default App;


