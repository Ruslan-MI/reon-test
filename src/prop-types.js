import PropTypes from 'prop-types';

export const task = {
  id: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  creationDate: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
};
