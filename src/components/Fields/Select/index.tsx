import * as React from 'react';

import { IFieldProps } from '../../typings';
import { IOption } from '../../../typings';

import FieldWrapper from './../FieldWrapper';

interface ISelectFieldProps extends IFieldProps {
  options: Array<IOption>;
}

export default class SelectField extends React.PureComponent<ISelectFieldProps> {

  render() {
    const { field, value, options, onChange } = this.props;

    return (
      <FieldWrapper field={field}>
        <label htmlFor={`field-${field.id}`}>{field.label}</label>
        <select
          id={`field-${field.id}`}
          className={'form-control'}
          value={value || field.default}
          onChange={event => onChange(event.target.value)}
        >
          {options.map(({ value: optionValue, label }) => (
            <option key={optionValue} value={optionValue}>
              {label}
            </option>
          ))}
        </select>
      </FieldWrapper>
    );
  }
}
