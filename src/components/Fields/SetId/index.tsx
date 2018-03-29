import * as React from 'react';
import PropTypes from 'prop-types';

import CustomPropTypes from './../../../prop-types';
import Text from './../Text';
import Select from './../Select';

export default class SetIdField extends React.PureComponent<any> {
  static propTypes = {
    field: CustomPropTypes.fieldConfig.isRequired,
    sets: PropTypes.objectOf(PropTypes.string.isRequired),
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  componentWillMount() {
    const { sets, value, onChange } = this.props;

    if (sets && sets.length > 0 && (!value || value.length < 1)) {
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
        options={Object.entries(sets).map(([setId, name]) => ({
          value: setId,
          label: name,
        }))}
      />
    );
  }
}
