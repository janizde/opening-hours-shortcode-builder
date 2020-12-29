import * as React from 'react';

import { IFieldProps } from './../../typings';
import { ITextFieldConfig } from './../../../typings';

import FieldWrapper from './../FieldWrapper';
import { Control } from './../../UI';

const TextField: React.FC<IFieldProps<ITextFieldConfig<any>>> = ({
  field,
  error,
  ...restProps
}) => (
  <FieldWrapper field={field} error={error}>
    <label htmlFor={`field-${field.id}`}>{field.label}</label>
    <Control
      type="text"
      isInvalid={!!error}
      {...field.attributes}
      id={`field-${field.id}`}
      name={field.id}
      {...restProps}
    />
  </FieldWrapper>
);

export default TextField;
