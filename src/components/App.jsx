import { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = event => {
    const btnId = event.target.id;
    this.incrementCount(btnId);
  };

  incrementCount = btnId => {
    this.setState(prevState => {
      if (btnId === 'good') {
        return { good: prevState.good + 1 };
      }
      if (btnId === 'neutral') {
        return { neutral: prevState.neutral + 1 };
      }
      if (btnId === 'bad') {
        return { bad: prevState.bad + 1 };
      }
    });
  };

  countTotalFeedback() {
    const keys = Object.keys(this.state);
    return keys.reduce((acc, current) => acc + this.state[current], 0);
  }

  countPositiveFeedbackPercentage() {
    if (this.countTotalFeedback() !== 0) {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    } else {
      return 0;
    }
  }

  render() {
    const totalCount = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className="app">
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onButtonClick}
            />
          }
        />

        <Section
          title="Statistics"
          children={
            totalCount > 0 ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={totalCount}
                positivePercentage={positivePercentage}
              />
            ) : (
              <Notification message="There is no feedback" />
            )
          }
        />
      </div>
    );
  }
}

export default App;
