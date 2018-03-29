import * as React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import CustomPropTypes from './../../../prop-types';

import FieldWrapper from './../FieldWrapper';

export default class SelectField extends PureComponent {
  static propTypes = {
    field: CustomPropTypes.fieldConfig.isRequired,
    options: CustomPropTypes.options.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { field, value, options, onChange } = this.props;

    return (
      <FieldWrapper field={field}>
        <label htmlFor={`field-${field.id}`}>{field.label}</label>
        <select id={`field-${field.id}`} className={'form-control'} value={value || field.default} onChange={event => onChange(event.target.value)}>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </FieldWrapper>
    );
  }
}
