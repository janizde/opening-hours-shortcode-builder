import * as React from 'react';
import * as Yup from 'yup';

import {
  IVisualShortcodeModel,
  IShortcodeConfig,
  ShortcodeType,
  FieldType,
} from '../../typings';

export interface IHolidaysModel extends IVisualShortcodeModel {
  highlight: boolean;
  include_past: boolean;
  date_format: string;
  class_holidays: string;
  class_highlighted: string;
}

const shortcodeConfig: IShortcodeConfig<IHolidaysModel> = {
  id: ShortcodeType.Holidays,
  label: 'Holidays',
  fields: [
    {
      id: 'set_id',
      label: 'Set ID',
      description: 'ID of the set for which this shortcode should be used',
      type: FieldType.SetId,
      attributes: {
        required: true,
      },
      schema: Yup.string().required('You have to at least provide a Set ID'),
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
      description: 'Highlight active holidays',
      type: FieldType.Checkbox,
      default: 'Disabled',
    },
    {
      id: 'include_past',
      label: 'Include past holidays',
      type: FieldType.Checkbox,
      default: 'Disabled',
    },
    {
      id: 'date_format',
      label: 'Date format',
      description: (
        <span>
          <span>PHP date format for the date of holidays.</span>
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
      id: 'class_holidays',
      label: 'CSS class for holiday',
      default: <code>op-holiday</code>,
      type: FieldType.Text,
    },
    {
      id: 'class_highlighted',
      label: 'CSS class for highlighted holidays',
      default: <code>highlighted</code>,
      type: FieldType.Text,
    },
    {
      id: 'before_widget',
      label: 'Before widget',
      description: 'HTML markup before widget',
      type: FieldType.Text,
      default: <code>{'<div class="op-holidays-shortcode">'}</code>,
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
      default: <code>{'<h3 class="op-holidays-title">'}</code>,
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
