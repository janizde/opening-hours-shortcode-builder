import PropTypes from 'prop-types';
import { FIELD_TYPES } from './config/constants';

const placeholders = PropTypes.arrayOf(
  PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })
);

const options = PropTypes.arrayOf(
  PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })
);

const fieldConfig = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.node,
  type: PropTypes.oneOf(Object.values(FIELD_TYPES)).isRequired,
  default: PropTypes.any,
  placeholders,
  options,
  show: PropTypes.func,
});

export default {
  fieldConfig,
  placeholders,
  options,
};
