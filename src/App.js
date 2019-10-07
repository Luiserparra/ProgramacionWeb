import React, { Component } from 'react';
import Home from './Home/Home';
import Aboutus from './About us/aboutus';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      principal: true,
      aboutus: false
    });
    this.handler = this.handler.bind(this);
  }

  handler(a, b) {
    this.setState({
      principal: a,
      aboutus: b
    })
  }

  render() {
    return (
      <div id="parent">
        {this.state.principal ?
          (<Home handler = {this.handler}/>) : (<Aboutus />)
        }
      </div>
    );
  }
}
export default App;


