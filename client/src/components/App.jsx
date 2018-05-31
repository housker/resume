import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render () {
    return (
      <div>
        <h3>Resume App</h3>
          <ul>
            <li>Nav Bar</li>
            <li>Resume</li>
            <li>Bio</li>
            <li>Github</li>
          </ul>
      </div>
    )

  }
}

export default App;