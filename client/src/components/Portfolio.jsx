import React from 'react';
import ReactDOM from 'react-dom';
import dashboard from '../assets/dashboard.png';
import criboard from '../assets/criboard.png';
import windowicon from '../assets/windowicon.svg';
import test from '../assets/test.jpg';

function Portfolio(props) {
  return (
    <div>
    <a className="d-block" href="https://safe-tundra-98409.herokuapp.com/">Criboard</a>
    <img src={criboard} height="100"></img>
    <p>Developed through github version control, this represents the initial stages of a project aimed to make apartment living and management more collaboartive for both tenants and landlords. Criboard is a full stack app using Sequelize for database management, Passport.js for user authentication, and Multer for form parsing. The client utilizes RESTful APIs to populate maps and queries. React Router and React are used for routing, managing state, and rendering.</p>
    <a className="d-block" href="https://codesandbox.io/s/pjjp9nvkr0">Dashboard Sandbox</a>
    <img src={dashboard} height="100"></img>
    <p>This personal finance dashboard is a mock-up demonstrating UI designed for a responsive, client-centric, visually rich interactive experience. It utilizes React for state management and rendering, Bootstrap for adaptable styling, and Chart.js to dynamically communicate raw data into a relatabale, easily accessible format. Make sure to click the <img src={windowicon} height="17"></img> icon to view the full page.</p>
    </div>
  );
}

export default Portfolio;