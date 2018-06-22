import React from 'react';
import ReactDOM from 'react-dom';
import Skills from './Skills.jsx';
import Portfolio from './Portfolio.jsx';
import Contact from './Contact.jsx';
import test from '../assets/test.jpg';

function Carousel(props) {
  return (

<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <Skills />
    </div>
    <div className="carousel-item">
      <Portfolio />
    </div>
    <div className="carousel-item">
      <Contact />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

  );
}

export default Carousel;





