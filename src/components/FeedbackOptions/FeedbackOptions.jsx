import PropTypes from 'prop-types';

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className="feedback-buttons">
      {options.map(option => {
        return (
          <li className="feedback-btn" key={option}>
            <button
              type="button"
              className="btn"
              id={option}
              onClick={onLeaveFeedback}
            >
              {uppercaseFirstLetter(option)}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function uppercaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
