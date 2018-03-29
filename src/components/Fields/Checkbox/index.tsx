import * as React from 'react';
import PropTypes from 'prop-types';

import CustomPropTypes from './../../../prop-types';

import FieldWrapper from './../FieldWrapper';

export default class CheckboxField extends React.PureComponent<any> {
  static propTypes = {
    field: CustomPropTypes.fieldConfig,
    value: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.node,
  };

  render() {
    const { field, value, onChange } = this.props;

    return (
      <FieldWrapper field={field}>
        <div className={'form-check'}>
          <input type={'checkbox'} className={'form-check-input'} id={`field-${field.id}`} value={!!value} onChange={event => onChange(event.target.checked)} />
          <label htmlFor={`field-${field.id}`} className={'form-check-label'}>
            {field.label}
          </label>
        </div>
      </FieldWrapper>
    );
  }
}
