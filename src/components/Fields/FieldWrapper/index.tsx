import * as React from 'react';
import PropTypes from 'prop-types';

import { Row, LeftCol, RightCol } from './../../UI';
import CustomPropTypes from './../../../prop-types';

import PlaceholderTable from './../PlaceholderTable';

export default class FieldWrapper extends React.PureComponent<any> {
  static propTypes = {
    field: CustomPropTypes.fieldConfig.isRequired,
    children: PropTypes.node,
  };

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
