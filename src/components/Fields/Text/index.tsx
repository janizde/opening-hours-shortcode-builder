import * as React from 'react';

import { IFieldProps } from './../../typings';
import { ITextFieldConfig } from './../../../typings';

import FieldWrapper from './../FieldWrapper';

const TextField: React.FC<IFieldProps<ITextFieldConfig<any>, string>> = ({
  field,
  value,
  onChange,
}) => (
  <FieldWrapper field={field}>
    <label htmlFor={`field-${field.id}`}>{field.label}</label>
    <input
      type={'text'}
      className={'form-control'}
      {...field.attributes}
      id={`field-${field.id}`}
      value={value || ''}
      onChange={(event) => onChange(event.target.value)}
    />
  </FieldWrapper>
);

export default TextField;
