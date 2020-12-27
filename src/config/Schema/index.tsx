import * as React from 'react';

import {
  IShortcodeModel,
  IShortcodeConfig,
  ShortcodeType,
  FieldType,
} from '../../typings';

export interface ISchemaModel extends IShortcodeModel {
  exclude_holidays: boolean;
  exclude_irregular_openings: boolean;
  schema_attr_type: string;
  schema_attr_name: string;
  schema_attr_description: string;
}

const shortcodeConfig: IShortcodeConfig<ISchemaModel> = {
  id: ShortcodeType.Schema,
  label: 'Schema.org',
  fields: [
    {
      id: 'set_id',
      label: 'Set ID',
      description: 'ID of the set to represent in the JSON-LD record',
      type: FieldType.SetId,
      attributes: {
        required: true,
      },
    },
    {
      id: 'exclude_holidays',
      label: 'Exclude Holidays',
      description: 'Whether to exclude holidays from the specification',
      default: 'Disabled',
      type: FieldType.Checkbox,
    },
    {
      id: 'exclude_irregular_openings',
      label: 'Exclude Irregular Openings',
      description:
        'Whether to exclude irregular openings from the specification',
      default: 'Disabled',
      type: FieldType.Checkbox,
    },
    {
      id: 'schema_attr_type',
      label: (
        <>
          <code>@Type</code> property of the schema specification
        </>
      ),
      default: (
        <a href="https://schema.org/Place" target="_blank">
          Place
        </a>
      ),
      type: FieldType.Text,
    },
    {
      id: 'schema_attr_name',
      label: (
        <>
          <code>name</code> property of the schema specification
        </>
      ),
      default: 'Name of the selected Set',
      type: FieldType.Text,
    },
    {
      id: 'schema_attr_description',
      label: (
        <>
          <code>description</code> property of the schema specification
        </>
      ),
      default: 'Description of the selected Set',
      type: FieldType.Text,
    },
  ],
};

export default shortcodeConfig;
