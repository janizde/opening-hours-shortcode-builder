import * as React from 'react';

import { IFieldProps } from './../../typings';
import { ISetMap, ISetIdFieldConfig } from './../../../typings';
import Text from './../Text';
import Select from './../Select';

interface ISetIdFieldProps extends IFieldProps<ISetIdFieldConfig<any>, string> {
  sets: ISetMap | null;
}

export default class SetIdField extends React.PureComponent<ISetIdFieldProps> {
  componentWillMount() {
    const { sets, value, onChange } = this.props;

    if (sets && Object.keys(sets).length > 0 && (!value || value.length < 1)) {
      onChange(Object.keys(sets)[0]);
    }
  }

  render() {
    const { sets, field, ...restProps } = this.props;

    if (!sets) {
      return (
        <Text
          {...restProps}
          field={{
            ...field,
            type: 'TEXT',
          }}
        />
      );
    }

    return (
      <Select
        {...restProps}
        field={{
          ...field,
          type: 'SELECT',
        }}
        options={Object.keys(sets).map(setId => ({
          value: setId,
          label: sets[setId],
        }))}
      />
    );
  }
}
