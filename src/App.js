import React from 'react';
import Header from './Home/header';
import Slider from './Home/slider';
import Footer from './Home/footer';
import Content from './Home/content';

function App() {
  return (
    <div id="parent">
      <Header/>
      <Slider/>
      <Content/>
      <Footer/>
    </div>
  );
}
export default App;


