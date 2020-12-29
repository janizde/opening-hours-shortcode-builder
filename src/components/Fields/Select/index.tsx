import * as React from 'react';
import { as } from 'class-bound-components';

import { IFieldProps } from '../../typings';
import { IOption, ISelectFieldConfig } from '../../../typings';

import FieldWrapper from './../FieldWrapper';
import { Control } from './../../UI';

interface ISelectFieldProps extends IFieldProps<ISelectFieldConfig<any>> {
  options: Array<IOption>;
}

const SelectControl = as(Control, 'select');

const SelectField: React.FC<ISelectFieldProps> = ({
  field,
  options,
  error,
  ...restProps
}) => (
  <FieldWrapper field={field}>
    <label htmlFor={`field-${field.id}`}>{field.label}</label>
    <SelectControl id={`field-${field.id}`} name={field.id} {...restProps}>
      {options.map(({ value: optionValue, label }) => (
        <option key={optionValue} value={optionValue}>
          {label}
        </option>
      ))}
    </SelectControl>
  </FieldWrapper>
);

export default SelectField;
