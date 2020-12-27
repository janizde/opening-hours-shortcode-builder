import * as React from 'react';

import { IFieldProps } from '../../typings';
import { IOption, ISelectFieldConfig } from '../../../typings';

import FieldWrapper from './../FieldWrapper';

interface ISelectFieldProps
  extends IFieldProps<ISelectFieldConfig<any>, string> {
  options: Array<IOption>;
}

const SelectField: React.FC<ISelectFieldProps> = ({
  field,
  value,
  options,
  onChange,
}) => (
  <FieldWrapper field={field}>
    <label htmlFor={`field-${field.id}`}>{field.label}</label>
    <select
      id={`field-${field.id}`}
      className={'form-control'}
      value={value || undefined}
      onChange={(event) => onChange(event.target.value)}
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
