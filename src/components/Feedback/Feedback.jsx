import React, { Component } from 'react';
import { Title } from './Feedback.styled';
import { Controls } from './Controls/Controls';
import { Statistics } from './Statistics/Statistics';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickGood = () => {
    this.setState(({ good }) => ({
      good: good + 1,
    }));
  };

  onClickNeutral = () => {
    this.setState(({ neutral }) => ({
      neutral: neutral + 1,
    }));
  };

  onClickBad = () => {
    this.setState(({ bad }) => ({
      bad: bad + 1,
    }));
  };

  render() {
    return (
      <>
        <Title>Please leave Feedback</Title>
        <Controls
          onClickGood={this.onClickGood}
          onClickNeutral={this.onClickNeutral}
          onClickBad={this.onClickBad}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </>
    );
  }
}
