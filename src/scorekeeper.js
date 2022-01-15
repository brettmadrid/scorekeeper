import React from 'react';

class Scorekeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
  }

  singleKill = () => {
    // when using state itself in the calculation of new state
    // use this callback form to ensure state updates properly
    this.setState(curState => ({ score: curState.score + 1 }));
  };

  tripleKill = () => {
    this.setState(curState => ({ score: curState.score + 3 }));
  };

  render() {
    return (
      <div>
        <h1>Score is: {this.state.score}</h1>
        <button onClick={this.singleKill}>Single Kill!</button>
        <button onClick={this.tripleKill}>Triple Kill!</button>
      </div>
    );
  }
}

export default Scorekeeper;
