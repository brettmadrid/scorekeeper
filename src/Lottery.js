import React, { Component } from 'react';

class Lottery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nums: [],
    };
  }

  spin4 = () => {
    let arr4 = [];
    for (let i = 0; i < 4; i++) {
      arr4.push(Math.floor(Math.random() * 10));
    }
    return arr4;
  };

  spin6 = () => {
    let arr6 = [];
    for (let i = 0; i < 6; i++) {
      arr6.push(Math.floor(Math.random() * 40));
    }
    return arr6;
  };

  generate = () => {};

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button onClick={this.generate}>Generate</button>
      </div>
    );
  }
}

Lottery.defaultProps = {
  title: 'Lotto 6',
  numBalls: 6,
  maxNum: 40,
};

export default Lottery;
