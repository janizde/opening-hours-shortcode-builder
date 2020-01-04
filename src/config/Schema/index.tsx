import * as React from 'react';

import { FIELD_TYPES, SHORTCODE_TYPES } from '../constants';
import { IShortcodeModel, IShortcodeConfig } from '../../typings';

export interface ISchemaModel extends IShortcodeModel {
  exclude_holidays: boolean;
  exclude_irregular_openings: boolean;
  schema_attr_type: string;
  schema_attr_name: string;
  schema_attr_description: string;
}

const shortcodeConfig: IShortcodeConfig<ISchemaModel> = {
  id: SHORTCODE_TYPES.SCHEMA,
  label: 'Schema.org',
  fields: [
    {
      id: 'set_id',
      label: 'Set ID',
      description: 'ID of the set to represent in the JSON-LD record',
      type: FIELD_TYPES.SET_ID,
    },
    {
      id: 'exclude_holidays',
      label: 'Exclude Holidays',
      description: 'Whether to exclude holidays from the specification',
      default: 'Disabled',
      type: FIELD_TYPES.CHECKBOX,
    },
    {
      id: 'exclude_irregular_openings',
      label: 'Exclude Irregular Openings',
      description: 'Whether to exclude irregular openings from the specification',
      default: 'Disabled',
      type: FIELD_TYPES.CHECKBOX,
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
      type: FIELD_TYPES.TEXT,
    },
    {
      id: 'schema_attr_name',
      label: (
        <>
          <code>name</code> property of the schema specification
        </>
      ),
      default: 'Name of the selected Set',
      type: FIELD_TYPES.TEXT,
    },
    {
      id: 'schema_attr_description',
      label: (
        <>
          <code>description</code> property of the schema specification
        </>
      ),
      default: 'Description of the selected Set',
      type: FIELD_TYPES.TEXT,
    },
  ],
};

export default shortcodeConfig;
