import * as React from 'react';

import { IFieldProps } from '../../typings';
import { IOption, ISelectFieldConfig } from '../../../typings';

import FieldWrapper from './../FieldWrapper';

interface ISelectFieldProps extends IFieldProps<ISelectFieldConfig<any>> {
  options: Array<IOption>;
}

const SelectField: React.FC<ISelectFieldProps> = ({
  field,
  options,
  error,
  ...restProps
}) => (
  <FieldWrapper field={field}>
    <label htmlFor={`field-${field.id}`}>{field.label}</label>
    <select
      id={`field-${field.id}`}
      name={field.id}
      className={'form-control' && error && 'is-invalid'}
      {...restProps}
    >
      {options.map(({ value: optionValue, label }) => (
        <option key={optionValue} value={optionValue}>
          {label}
        </option>
      ))}
    </select>
  </FieldWrapper>
);

export default SelectField;
