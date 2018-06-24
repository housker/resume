import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './Resume.jsx';
var images = require.context('../assets/icons', false, /\.(png|jpg|gif|svg)$/);

function Contact(props) {
  return (
  <div>
    <div className="d-flex justify-content-center">
      <a href="#"><img className="contact-icon m-2 p-0" height="30" width="30" src={images('./iconmail.svg')} onClick={() => window.open('mailto:housker@gmail.com')} /></a>
      <a href="https://www.linkedin.com/in/adelle-housker-a0990342/"><img className="m-2 p-0" height="30" width="30" src={images('./iconli.png')} /></a>
      <a href="https://github.com/housker"><img className="m-2 p-1" height="30" width="30" src={images('./icongh.png')} /></a>
      <a href="https://twitter.com/AHousker"><img className="m-2 p-1" height="30" width="30" src={images('./icontwitter.png')} /></a>
    </div>
    <Resume />
  </div>
  );
}

export default Contact;