import * as React from 'react';

import { IFieldProps } from './../../typings';
import { ISetMap } from './../../../typings';
import Text from './../Text';
import Select from './../Select';

interface ISetIdFieldProps extends IFieldProps {
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
    const { sets, ...restProps } = this.props;

    if (!sets) {
      return <Text {...restProps} />;
    }

    return (
      <Select
        {...restProps}
        options={Object.keys(sets).map(setId => ({
          value: setId,
          label: sets[setId],
        }))}
      />
    );
  }
}
