import * as React from 'react';

import { Row, LeftCol, RightCol } from './../../UI';
import { IFieldConfig } from './../../../typings';

import PlaceholderTable from './../PlaceholderTable';

interface IFieldWrapperProps {
  field: IFieldConfig<any>;
  children?: React.ReactNode;
}

export default class FieldWrapper extends React.PureComponent<IFieldWrapperProps> {
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

          {field.placeholders && <PlaceholderTable placeholders={field.placeholders} />}
        </RightCol>
      </Row>
    );
  }
}
