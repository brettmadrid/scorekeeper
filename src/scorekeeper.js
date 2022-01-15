import React from 'react';

class Scorekeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>Score is: {this.state.score}</h1>
        <button>Single Kill!</button>
      </div>
    );
  }
}

export default Scorekeeper;
