import React from 'react';
import ReactDOM from 'react-dom';
import dashboard from '../assets/dashboard.png';
import criboard from '../assets/criboard.png';
import windowicon from '../assets/windowicon.svg';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlight: false,
      test: [
        {index: 0, title: 'title1', description: 'description1', image: 'https://picsum.photos/500/400/?random'},
        {index: 1, title: 'title2', description: 'description2', image: 'https://picsum.photos/500/400/?random'},
        {index: 2, title: 'title3', description: 'description3', image: 'https://picsum.photos/500/400/?random'},
        {index: 3, title: 'title4', description: 'description4', image: 'https://picsum.photos/500/400/?random'},
        {index: 4, title: 'title5', description: 'description5', image: 'https://picsum.photos/500/400/?random'},
        {index: 5, title: 'title6', description: 'description6', image: 'https://picsum.photos/500/400/?random'}
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
          {this.state.test.slice(0, 2).map(project => (
            <div key={project.index} className="panel" onMouseOver={() => this.light(project.index)} onMouseLeave={this.resume}>
              {this.state.highlight === project.index && <div className="layer" />}
              {this.state.highlight === project.index ? (<div id="overlay" className="text">{project.description}</div>) : (<div className="text">{project.title}</div>)}
              <img className="port-img" img-responsive src={project.image}/>
            </div>
          ))}
        </div>
        <div className="col port-col col-lg-4 col-md-6 col-sm-12">
          {this.state.test.slice(2, 4).map(project => (
            <div key={project.index} className="panel" onMouseOver={() => this.light(project.index)} onMouseLeave={this.resume}>
              {this.state.highlight === project.index && <div className="layer" />}
              {this.state.highlight === project.index ? (<div id="overlay" className="text">{project.description}</div>) : (<div className="text">{project.title}</div>)}
              <img className="port-img" img-responsive src={project.image}/>
            </div>
          ))}
        </div>
        <div className="col port-col col-lg-4 col-md-6 col-sm-12">
          {this.state.test.slice(4, 6).map(project => (
            <div key={project.index} className="panel" onMouseOver={() => this.light(project.index)} onMouseLeave={this.resume}>
              {this.state.highlight === project.index && <div className="layer" />}
              {this.state.highlight === project.index ? (<div id="overlay" className="text">{project.description}</div>) : (<div className="text">{project.title}</div>)}
              <img className="port-img" img-responsive src={project.image}/>
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






        // <div className="col">
        //   <a className="d-block" href="https://safe-tundra-98409.herokuapp.com/">Criboard</a>
        //   <img src={criboard} height="100"></img>
        //   <p>Developed through github version control, this represents the initial stages of a project aimed to make apartment living and management more collaboartive for both tenants and landlords. Criboard is a full stack app using Sequelize for database management, Passport.js for user authentication, and Multer for form parsing. The client utilizes RESTful APIs to populate maps and queries. React Router and React are used for routing, managing state, and rendering.</p>
        // </div>
        // <div className="col">
        //   <a className="d-block" href="https://codesandbox.io/s/pjjp9nvkr0">Dashboard Sandbox</a>
        // <img src={dashboard} height="100"></img>
        // <p>This personal finance dashboard is a mock-up demonstrating UI designed for a responsive, client-centric, visually rich interactive experience. It utilizes React for state management and rendering, Bootstrap for adaptable styling, and Chart.js to dynamically communicate raw data into a relatabale, easily accessible format. Make sure to click the <img src={windowicon} height="17"></img> icon to view the full page.</p>
        // </div>