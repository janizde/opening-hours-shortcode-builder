import * as React from 'react';
import PropTypes from 'prop-types';

import CustomPropTypes from './../../../prop-types';

import FieldWrapper from './../FieldWrapper';

export default class TextField extends React.PureComponent<any> {
  static propTypes = {
    field: CustomPropTypes.fieldConfig,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.node,
  };

  render() {
    const { field, value, onChange } = this.props;

    return (
      <FieldWrapper field={field}>
        <label htmlFor={`field-${field.id}`}>{field.label}</label>
        <input type={'text'} className={'form-control'} {...field.attributes} id={`field-${field.id}`} value={value || ''} onChange={event => onChange(event.target.value)} />
      </FieldWrapper>
    );
  }
}
