import React from 'react';
import ReactDOM from 'react-dom';
import windowicon from '../assets/windowicon.svg';
var images = require.context('../assets/thumbnails', false, /\.(png|jpg|gif)$/);

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlight: false,
      projects: [
        {index: 0, title: 'Criboard', description: 'Developed through github version control, this represents the initial stages of a project aimed to make apartment living and management more collaboartive for both tenants and landlords. Criboard is a full stack app using Sequelize for database management, Passport.js for user authentication, and Multer for form parsing. The client utilizes RESTful APIs to populate maps and queries. React Router and React are used for routing, managing state, and rendering.', image: './tncriboard.png', link: 'https://safe-tundra-98409.herokuapp.com/'},
        {index: 1, title: 'Financial Dashboard', description: 'This personal finance dashboard is a mock-up demonstrating UI designed for a responsive, client-centric, visually rich interactive experience. It utilizes React for state management and rendering, Bootstrap for adaptable styling, and Chart.js to dynamically communicate raw data into a relatabale, easily accessible format.', image: './tndashboard.png', link: 'https://codesandbox.io/s/pjjp9nvkr0'},
        {index: 2, title: 'Movie Mash', description: 'Users are authenticated through passport and bcrypt. Details for each movie are populated with responses from nested API calls. Security is provided through V3 restricted keys. Inputs are sanitized with form validation, utilizing Angular\'s built-in whitelisting service to prevent XXS on the client-side, and Postgres parameterized queries to prevent SQL injection into the database.', image: './tnmovie.png', link: 'https://gentle-harbor-83849.herokuapp.com/'},
        {index: 3, title: 'title4', description: 'description4', image: './tndashboard.png', link: 'https://safe-tundra-98409.herokuapp.com/'},
        {index: 4, title: 'title5', description: 'description5', image: './tndashboard.png', link: 'https://safe-tundra-98409.herokuapp.com/'},
        {index: 5, title: 'title6', description: 'description6', image: './tndashboard.png', link: 'https://safe-tundra-98409.herokuapp.com/'}
      ]
    };
    this.light = this.light.bind(this);
    this.resume = this.resume.bind(this);
  }

  light(i) {
    this.setState({highlight: i});
  }

  resume() {
    this.setState({highlight: false});
  }

  render() {
  return (
    <div>
      <div className="row port-row d-flex-row">
        <div className="col port-col col-lg-4 col-md-6 col-sm-12">
          {this.state.projects.slice(0, 2).map(project => (
            <div key={project.index} className="panel" onMouseOver={() => this.light(project.index)} onMouseLeave={this.resume}>
              {this.state.highlight === project.index && <div className="layer" />}
              {this.state.highlight === project.index ? (<a id="overlay" className="text" href={project.link}>{project.description}</a>) : (<h3 className="text">{project.title}</h3>)}
              <img className="port-img" img-responsive src={images(project.image)} height="400" width="500"/>
            </div>
          ))}
        </div>
        <div className="col port-col col-lg-4 col-md-6 col-sm-12">
          {this.state.projects.slice(2, 4).map(project => (
            <div key={project.index} className="panel" onMouseOver={() => this.light(project.index)} onMouseLeave={this.resume}>
              {this.state.highlight === project.index && <div className="layer" />}
              {this.state.highlight === project.index ? (<a id="overlay" className="text" href={project.link}>{project.description}</a>) : (<h3 className="text">{project.title}</h3>)}
              <img className="port-img" img-responsive src={images(project.image)} height="400" width="500"/>
            </div>
          ))}
        </div>
        <div className="col port-col col-lg-4 col-md-6 col-sm-12">
          {this.state.projects.slice(4, 6).map(project => (
            <div key={project.index} className="panel" onMouseOver={() => this.light(project.index)} onMouseLeave={this.resume}>
              {this.state.highlight === project.index && <div className="layer" />}
              {this.state.highlight === project.index ? (<a id="overlay" className="text" href={project.link}>{project.description}</a>) : (<h3 className="text">{project.title}</h3>)}
              <img className="port-img" img-responsive src={images(project.image)} height="400" width="500"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )}
}

export default Portfolio;


//I don't have enough examples yet, but would like to add tags to each project and then have responsive filtering like so:
// https://bootsnipp.com/snippets/featured/portfolio-gallery-with-filtering-category