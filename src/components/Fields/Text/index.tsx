import * as React from 'react';

import { IFieldProps } from './../../typings';
import { ITextFieldConfig } from './../../../typings';

import FieldWrapper from './../FieldWrapper';

export default class TextField extends React.PureComponent<IFieldProps<ITextFieldConfig<any>, string>> {
  render() {
    const { field, value, onChange } = this.props;

    return (
      <FieldWrapper field={field}>
        <label htmlFor={`field-${field.id}`}>{field.label}</label>
        <input
          type={'text'}
          className={'form-control'}
          {...field.attributes}
          id={`field-${field.id}`}
          value={value || ''}
          onChange={event => onChange(event.target.value)}
        />
      </FieldWrapper>
    );
  }
}
