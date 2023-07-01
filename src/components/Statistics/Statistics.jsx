import PropTypes from 'prop-types';
import { StatisticsField, StatisticsItem } from './Statistics.styled';

const Statistics = props => {
  const options = Object.keys(props);

  return <StatisticsField>
          {options.map(option =>
            <StatisticsItem key={option}>
              {option === "positivePercentage" ? "Positive feedback" : option}: {props[option]}
            </StatisticsItem>)}
        </StatisticsField>
};

Statistics.propTypes = {
  props: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired
  })
};

export default Statistics;