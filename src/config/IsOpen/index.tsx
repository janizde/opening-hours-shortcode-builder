import * as React from 'react';
import * as Yup from 'yup';

import {
  IVisualShortcodeModel,
  IShortcodeConfig,
  ShortcodeType,
  FieldType,
} from '../../typings';

export interface IIsOpenModel extends IVisualShortcodeModel {
  open_text: string;
  closed_text: string;
  closed_holiday_text: string;
  show_next: boolean;
  next_format: string;
  next_period_classes: string;
  show_today: string;
  today_format: string;
  date_format: string;
  time_format: string;
  open_class: string;
  closed_class: string;
}

const shortcodeConfig: IShortcodeConfig<IIsOpenModel> = {
  id: ShortcodeType.IsOpen,
  label: 'Is Open',
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
      id: 'open_text',
      label: 'Open text',
      description:
        'Text that will be shown when the selected set is currently open',
      type: FieldType.Text,
      default: `We're currently open.`,
    },
    {
      id: 'closed_text',
      label: 'Closed text',
      description:
        'Text that will be shown when the selected set is currently closed',
      type: FieldType.Text,
      default: `We're currently closed.`,
    },
    {
      id: 'closed_holiday_text',
      label: 'Closed holiday text',
      description:
        'Text that will be shown when the selected set is currently closed due to a holiday',
      type: FieldType.Text,
      default: (
        <span>
          We're currently closed for <code>%1$s</code>.
        </span>
      ),
      placeholders: [
        {
          key: '%1$s',
          label:
            'The name of the holiday due to which the set is currently closed',
        },
      ],
    },
    {
      id: 'show_next',
      label: 'Show next open period',
      description: 'Whether to show the next open period when closed or not',
      type: FieldType.Checkbox,
      default: 'Disabled',
    },
    {
      id: 'next_format',
      label: 'Next format',
      description: 'Text format of next open period.',
      type: FieldType.Text,
      default: (
        <span>
          We're open again on <code>%2$s</code> (<code>%1$s</code>) from{' '}
          <code>%3$s</code> to <code>%4$s</code>
        </span>
      ),
      placeholders: [
        {
          key: '%1$s',
          label: 'The formatted date of the next open period',
        },
        {
          key: '%2$s',
          label: 'The name of the weekday of the next open period',
        },
        {
          key: '%3$s',
          label: 'The formatted start time of the next open period',
        },
        {
          key: '%4$s',
          label: 'The formatted end time of the next open period',
        },
      ],
      show: (model) => model.show_next === true,
    },
    {
      id: 'next_period_classes',
      label: 'Next period CSS class',
      type: FieldType.Text,
      show: (model) => model.show_next === true,
    },
    {
      id: 'show_today',
      label: `Show today's opening hours`,
      description: `Specify in which cases today's opening hours shall be displayed in the widget`,
      type: FieldType.Select,
      options: [
        {
          value: 'never',
          label: 'Never',
        },
        {
          value: 'open',
          label: 'When is open',
        },
        {
          value: 'always',
          label: 'Always',
        },
      ],
      default: 'Never',
    },
    {
      id: 'today_format',
      label: 'Today format',
      description: `Text format of today's opening hours`,
      type: FieldType.Text,
      default: (
        <span>
          Opening Hours today: <code>%1$s</code>
        </span>
      ),
      placeholders: [
        {
          key: '%1$s',
          label: 'The formatted time ranges of all periods',
        },
        {
          key: '%2$s',
          label: 'The formatted start time of the first period',
        },
        {
          key: '%3$s',
          label: 'The formatted end time of the last period',
        },
      ],
      show: (model) => model.show_today !== 'never',
    },
    {
      id: 'date_format',
      label: 'Date format',
      description: (
        <span>
          <span>PHP date format for the date of the next open period.</span>
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
          <span>
            PHP date format for the start and end time of the next open period.
          </span>
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
      id: 'open_class',
      label: 'CSS class when open',
      default: <code>op-open</code>,
      type: FieldType.Text,
    },
    {
      id: 'closed_class',
      label: 'CSS class when closed',
      default: <code>op-closed</code>,
      type: FieldType.Text,
    },
    {
      id: 'before_widget',
      label: 'Before widget',
      description: 'HTML markup before widget',
      type: FieldType.Text,
      default: <code>{'<div class="op-is-open-shortcode">'}</code>,
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
      default: <code>{'<h3 class="op-is-open-title">'}</code>,
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
