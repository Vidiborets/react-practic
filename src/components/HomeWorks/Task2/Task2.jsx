import React from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistic } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Task3 } from '../Task3/Task3';
export class Task2 extends React.Component {
  static defaultProps = {
    percentLot: 0,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countFeedback = element => {
    this.setState({ [element]: this.state[element] + 1 });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = total => {
    const { good } = this.state;
    const percentFeed = Math.round((good / total) * 100);
    return percentFeed;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const totalFeed = this.countTotalFeedback();
    const percentLot = this.countPositiveFeedbackPercentage(totalFeed);
    const arrayState = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={arrayState} onClick={this.countFeedback} />
        </Section>
        {totalFeed > 0 ? (
          <Section title="">
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeed}
              percent={percentLot || 0}
            />
          </Section>
        ) : (
          <Notification title="There is no feedback" />
        )}
        <Task3 />
      </>
    );
  }
}
