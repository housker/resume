import React from 'react';
import ReactDOM from 'react-dom';
import Skills from './Skills.jsx';
import Portfolio from './Portfolio.jsx';
import Contact from './Contact.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="carouselControls" className="carousel slide" data-ride="carousel" data-pause="hover">
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
        <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }


}

export default Carousel;





