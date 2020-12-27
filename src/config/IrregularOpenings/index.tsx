import * as React from 'react';

import {
  IVisualShortcodeModel,
  IShortcodeConfig,
  ShortcodeType,
  FieldType,
} from '../../typings';

export interface IIrregularOpeningsModel extends IVisualShortcodeModel {
  highlight: boolean;
  include_past: boolean;
  date_format: string;
  time_format: string;
  class_highlighted: string;
}

const shortcodeConfig: IShortcodeConfig<IIrregularOpeningsModel> = {
  id: ShortcodeType.IrregularOpenings,
  label: 'Irregular Openings',
  fields: [
    {
      id: 'set_id',
      label: 'Set ID',
      description: 'ID of the set for which this shortcode should be used',
      type: FieldType.SetId,
      attributes: {
        required: true,
      },
    },
    {
      id: 'title',
      label: 'Title',
      description: 'Shortcode header title',
      type: FieldType.Text,
    },
    {
      id: 'highlight',
      label: 'Highlight',
      description: 'Highlight active irregular opening',
      type: FieldType.Checkbox,
      default: 'Disabled',
    },
    {
      id: 'include_past',
      label: 'Include past irregular openings',
      type: FieldType.Checkbox,
      default: 'Disabled',
    },
    {
      id: 'date_format',
      label: 'Date format',
      description: (
        <span>
          <span>PHP date format for the date of irregular openings.</span>
          &nbsp;
          <a
            href={'http://php.net/manual/en/function.date.php'}
            target={'_blank'}
          >
            More on PHP date and time formats
          </a>
        </span>
      ),
      type: FieldType.Text,
      default: 'WordPress setting',
    },
    {
      id: 'time_format',
      label: 'Time format',
      description: (
        <span>
          <span>PHP time format for the time of irregular openings.</span>
          &nbsp;
          <a
            href={'http://php.net/manual/en/function.date.php'}
            target={'_blank'}
          >
            More on PHP date and time formats
          </a>
        </span>
      ),
      type: FieldType.Text,
      default: 'WordPress setting',
    },
    {
      id: 'class_highlighted',
      label: 'CSS class for highlighted irregular openings',
      default: <code>highlighted</code>,
      type: FieldType.Text,
    },
    {
      id: 'before_widget',
      label: 'Before widget',
      description: 'HTML markup before widget',
      type: FieldType.Text,
      default: <code>{'<div class="op-irregular-openings-shortcode">'}</code>,
    },
    {
      id: 'after_widget',
      label: 'After widget',
      description: 'HTML markup after widget',
      type: FieldType.Text,
      default: <code>{'</div>'}</code>,
    },
    {
      id: 'before_title',
      label: 'Before title',
      description: 'HTML markup before title',
      type: FieldType.Text,
      default: <code>{'<h3 class="op-irregular-openings-title">'}</code>,
    },
    {
      id: 'after_title',
      label: 'After title',
      description: 'HTML markup after title',
      type: FieldType.Text,
      default: <code>{'</h3>'}</code>,
    },
  ],
};

export default shortcodeConfig;
