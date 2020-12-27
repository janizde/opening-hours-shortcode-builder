import * as React from 'react';

import { Row, LeftCol, RightCol } from './../../UI';
import {
  TAnyFieldConfig,
  IShortcodeModel,
  ITextFieldConfig,
  FieldType,
} from './../../../typings';

import PlaceholderTable from './../PlaceholderTable';

interface IFieldWrapperProps<
  M extends IShortcodeModel,
  F extends TAnyFieldConfig<M>
> {
  field: F;
  children?: React.ReactNode;
}

/**
 * Component wrapping an actual form field with the field's
 * `description`, `default` value and `placeholders`
 */
function FieldWrapper<M extends IShortcodeModel, F extends TAnyFieldConfig<M>>({
  children,
  field,
}: IFieldWrapperProps<M, F>) {
  return (
    <Row>
      <LeftCol>
        {children}

        {field.description && (
          <span className={'form-text text-muted'}>{field.description}</span>
        )}
      </LeftCol>
      <RightCol>
        {field.default && (
          <span>
            <span className={'badge badge-primary'}>Default</span>{' '}
            {field.default}
          </span>
        )}

        {field.type === FieldType.Text &&
          (field as ITextFieldConfig<M>).placeholders && (
            <PlaceholderTable
              placeholders={(field as ITextFieldConfig<M>).placeholders!}
            />
          )}
      </RightCol>
    </Row>
  );
}

export default FieldWrapper;
