import PropTypes from 'prop-types';
import { FeedbackBtn, FeedbackField } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return <FeedbackField>{options.map(option =>
          <FeedbackBtn type="button" key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </FeedbackBtn>)}
        </FeedbackField>;
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;