import * as React from 'react';

import { IFieldProps } from './../../typings';
import { ISetMap, ISetIdFieldConfig, FieldType } from './../../../typings';
import Text from './../Text';
import Select from './../Select';

interface ISetIdFieldProps extends IFieldProps<ISetIdFieldConfig<any>, string> {
  sets: ISetMap | null;
}

const SetIdField: React.FC<ISetIdFieldProps> = ({
  sets,
  field,
  ...restProps
}) => {
  React.useEffect(() => {
    if (
      sets &&
      Object.keys(sets).length > 0 &&
      (!restProps.value || restProps.value.length < 1)
    ) {
      restProps.onChange(Object.keys(sets)[0]);
    }
  });

  if (!sets) {
    return (
      <Text
        {...restProps}
        field={{
          ...field,
          type: FieldType.Text,
        }}
      />
    );
  }

  return (
    <Select
      {...restProps}
      field={{
        ...field,
        type: FieldType.Select,
      }}
      options={Object.keys(sets).map((setId) => ({
        value: setId,
        label: sets[setId],
      }))}
    />
  );
};

export default SetIdField;
