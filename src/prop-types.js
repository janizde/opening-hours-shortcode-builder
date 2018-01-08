import PropTypes from 'prop-types';
import { FIELD_TYPES } from "./config/constants";

const fieldConfig = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.oneOf(Object.values(FIELD_TYPES)).isRequired,
  default: PropTypes.any,
  placeholders: PropTypes.objectOf(PropTypes.string),
});

export default {
  fieldConfig,
};
