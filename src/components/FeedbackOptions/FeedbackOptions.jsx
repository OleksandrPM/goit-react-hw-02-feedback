import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={css.feedback_buttons}>
      {options.map(option => {
        return (
          <li className="feedback-btn" key={option}>
            <button
              type="button"
              className={css.btn}
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
