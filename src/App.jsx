import React, { Component } from 'react';

import Question from 'question';
import Win from 'Win';
import Fail from 'fail';

export default class App extends Component {
  state = {
    responded: false,
  }

  render() {
    const { responded } = this.state;

    if (!responded) {
      return (
        <Question
          answer={[["DAT256", true], ["DAT356", false], ["TAD007", false], ["TAD256", false]]}
          onAnswer={won => this.setState({ responded: { won } })}
          question="Vad är kurskoden för denna kurs?"
          />
      );
    } else if (responded.won) {
      return (<Win />);
    } else {
      return (<Fail />);
    }
  }
}