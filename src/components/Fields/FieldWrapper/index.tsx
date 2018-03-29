import * as React from 'react';

import { Row, LeftCol, RightCol } from './../../UI';
import { TAnyFieldConfig, IShortcodeModel, ITextFieldConfig } from './../../../typings';

import PlaceholderTable from './../PlaceholderTable';

interface IFieldWrapperProps<M extends IShortcodeModel, F extends TAnyFieldConfig<M>> {
  field: F;
  children?: React.ReactNode;
}

export default class FieldWrapper<M extends IShortcodeModel, F extends TAnyFieldConfig<M>> extends React.PureComponent<
  IFieldWrapperProps<M, F>
> {
  renderPlaceholderTable(field: TAnyFieldConfig<M>) {
    if (field.type !== 'TEXT') {
      return null;
    }

    const textField = field as ITextFieldConfig<M>;
    return textField.placeholders ? <PlaceholderTable placeholders={textField.placeholders} /> : null;
  }

  render() {
    const { field, children } = this.props;

    return (
      <Row>
        <LeftCol>
          {children}

          {field.description && <span className={'form-text text-muted'}>{field.description}</span>}
        </LeftCol>
        <RightCol>
          {field.default && (
            <span>
              <span className={'badge badge-primary'}>Default</span> {field.default}
            </span>
          )}

          {this.renderPlaceholderTable(field)}
        </RightCol>
      </Row>
    );
  }
}
