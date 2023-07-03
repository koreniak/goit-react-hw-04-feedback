import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";
import { useState } from "react";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbacks = {
    good,
    neutral,
    bad
  }

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1)
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1)
        break;
      case 'bad':
        setBad(prevState => prevState + 1)
        break;
      default:
        return
    };
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return `${Math.round(good / countTotalFeedback() * 100)}%`;
  };

    return (
      <>
        <Section title={"Please leave Feedback"}>
          <FeedbackOptions
            options={Object.keys(feedbacks)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ?
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}/> :
            <Notification message="There is no feedback"></Notification>}
        </Section>
      </>
    );
  };