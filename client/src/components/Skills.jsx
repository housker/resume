import React from 'react';
import ReactDOM from 'react-dom';
var images = require.context('../assets/icons', false, /\.(png|jpg|gif|svg)$/);

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"],
      numBalls: 30,
      balls: []
    };
    this.drawBall = this.drawBall.bind(this);
    this.bouce = this.bounce.bind(this);
  }

  componentDidMount() {
    this.drawBall();
    this.bounce();
  }

  drawBall() {
    for (let i = 0; i < this.state.numBalls; i++) {
      let ball = document.createElement("circle");
      ball.classList.add("ball");
      ball.style.background = this.state.colors[Math.floor(Math.random() * this.state.colors.length)];
      ball.style.opacity = 0.2
      ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
      ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
      ball.style.transform = `scale(${Math.random()})`;
      ball.style.width = `${Math.random()}em`;
      ball.style.height = ball.style.width;
      this.setState({balls: this.state.balls.push(ball)});
      this.refs.skills.append(ball)
    }
  }

  bounce() {
    this.state.balls.forEach((el, i, ra) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
      };

      let anim = el.animate(
        [
          { transform: "translate(0, 0)" },
          { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
          duration: (Math.random() + 1) * 2000,
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out"
        }
      );
    });
  }


  render() {
    return (
      <div ref="skills" className="row port-row d-flex-row">
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <div className="box">
            <div className="skill">
              <h4>Javascript</h4>
              <img src={images('./iconjs.png')} height="100px" width="100px" />
            </div>
          </div>
          <div className="box">
            <div className="skill">
              <h4>Node.js</h4>
              <img src={images('./iconnode.png')} height="100px" width="100px" />
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <div className="box">
            <div className="skill">
              <h4>Express</h4>
              <img src={images('./iconexpress.svg')} height="100px" width="100px" />
            </div>
          </div>
          <div className="box">
            <div className="skill">
              <h4>Mongo</h4>
              <img src={images('./iconmongo.png')} height="100px" width="100px" />
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <div className="box">
            <div className="skill">
              <h4>React</h4>
              <img src={images('./iconreact.svg')} height="100px" width="100px" />
            </div>
          </div>
          <div className="box">
            <div className="skill">
              <h4>Angular</h4>
              <img src={images('./iconangular.svg')} height="100px" width="100px" />
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <div className="box">
            <div className="skill">
              <h4>Sequeliz</h4>
              <img src={images('./iconsequelize.png')} height="100px" width="100px" />
            </div>
          </div>
          <div className="box">
            <div className="skill">
             <h4> IPFS</h4>
              <img src={images('./iconipfs.png')} height="100px" width="100px" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;


// <a href="https://leetcode.com/housker/">Algorithms</a>

// <div>Jumpstarts</div>
// <ul>
// <a href="https://github.com/Ada-Developers-Academy/jump-start">Ada Jump Start</a>
// <a href="https://www.pluralsight.com/search?q=ruby">Try Ruby</a>
// <a href="https://learnrubythehardway.org/">Learn Ruby the Hard Way</a>
// <a href="https://www.codecademy.com/learn">Codecademy</a>
// <a href="https://teamtreehouse.com/library">Treehouse</a>
// </ul>

// https://medium.freecodecamp.org/the-10-most-popular-coding-challenge-websites-of-2016-fb8a5672d22f
// <ul>
// <a href="https://leetcode.com/housker/">LeetCode</a>
// <a href="https://www.hackerrank.com/housker">Hackerrank</a>
// <a href="https://www.codewars.com/users/housker">CodeWars</a>
// <a href="https://codefights.com/profile/housker">CodeFights</a>
// <a href="https://www.interviewbit.com/profile/housker">InterviewBit</a>
// <a href="https://coderbyte.com/profile/housker">Coderbyte</a>
// </ul>