import React, { Component } from 'react';
import Header from './header';
import Slider from './slider';
import Footer from './footer';
import Content from './content';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            principal: true,
            aboutus: false
        });
    }


    render() {
        return (
            <div id="parent">
                <Header handler = {this.props.handler}/>
                <Slider />
                <Content />
                <Footer />
            </div>
        );
    }
}
export default Home;