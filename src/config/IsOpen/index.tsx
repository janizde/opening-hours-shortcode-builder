import * as React from 'react';

import { FIELD_TYPES, SHORTCODE_TYPES } from '../constants';
import { IShortcodeModel, IShortcodeConfig } from '../../typings';

export interface IIsOpenModel extends IShortcodeModel {
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
  id: SHORTCODE_TYPES.IS_OPEN,
  label: 'Is Open',
  fields: [
    {
      id: 'set_id',
      label: 'Set ID',
      description: 'ID of the set for which this shortcode should be used',
      type: FIELD_TYPES.SET_ID,
    },
    {
      id: 'title',
      label: 'Title',
      description: 'Shortcode header title',
      type: FIELD_TYPES.TEXT,
    },
    {
      id: 'open_text',
      label: 'Open text',
      description: 'Text that will be shown when the selected set is currently open',
      type: FIELD_TYPES.TEXT,
      default: "We're currently open.",
    },
    {
      id: 'closed_text',
      label: 'Closed text',
      description: 'Text that will be shown when the selected set is currently closed',
      type: FIELD_TYPES.TEXT,
      default: "We're currently closed.",
    },
    {
      id: 'closed_holiday_text',
      label: 'Closed holiday text',
      description: 'Text that will be shown when the selected set is currently closed due to a holiday',
      type: FIELD_TYPES.TEXT,
      default: (
        <span>
          We're currently closed for <code>%1$s</code>.
        </span>
      ),
      placeholders: [
        {
          key: '%1$s',
          label: 'The name of the holiday due to which the set is currently closed',
        },
      ],
    },
    {
      id: 'show_next',
      label: 'Show next open period',
      description: 'Whether to show the next open period when closed or not',
      type: FIELD_TYPES.CHECKBOX,
      default: 'Disabled',
    },
    {
      id: 'next_format',
      label: 'Next format',
      description: 'Text format of next open period.',
      type: FIELD_TYPES.TEXT,
      default: (
        <span>
          We're open again on <code>%2$s</code> (<code>%1$s</code>) from <code>%3$s</code> to <code>%4$s</code>
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
      show: model => model.show_next === true,
    },
    {
      id: 'next_period_classes',
      label: 'Next period CSS class',
      type: FIELD_TYPES.TEXT,
      show: model => model.show_next === true,
    },
    {
      id: 'show_today',
      label: "Show today's opening hours",
      description: "Specify in which cases today's opening hours shall be displayed in the widget",
      type: FIELD_TYPES.SELECT,
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
      description: "Text format of today's opening hours",
      type: FIELD_TYPES.TEXT,
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
      show: model => model.show_today !== 'never',
    },
    {
      id: 'date_format',
      label: 'Date format',
      description: (
        <span>
          <span>PHP date format for the date of the next open period.</span>
          &nbsp;
          <a href={'http://php.net/manual/en/function.date.php'} target={'_blank'}>
            More on PHP date and time formats
          </a>
        </span>
      ),
      type: FIELD_TYPES.TEXT,
      default: 'WordPress setting',
    },
    {
      id: 'time_format',
      label: 'Time format',
      description: (
        <span>
          <span>PHP date format for the start and end time of the next open period.</span>
          &nbsp;
          <a href={'http://php.net/manual/en/function.date.php'} target={'_blank'}>
            More on PHP date and time formats
          </a>
        </span>
      ),
      type: FIELD_TYPES.TEXT,
      default: 'WordPress setting',
    },
    {
      id: 'open_class',
      label: 'CSS class when open',
      default: <code>op-open</code>,
      type: FIELD_TYPES.TEXT,
    },
    {
      id: 'closed_class',
      label: 'CSS class when closed',
      default: <code>op-closed</code>,
      type: FIELD_TYPES.TEXT,
    },
    {
      id: 'before_widget',
      label: 'Before widget',
      description: 'HTML markup before widget',
      type: FIELD_TYPES.TEXT,
      default: <code>{'<div class="op-is-open-shortcode">'}</code>,
    },
    {
      id: 'after_widget',
      label: 'After widget',
      description: 'HTML markup after widget',
      type: FIELD_TYPES.TEXT,
      default: <code>{'</div>'}</code>,
    },
    {
      id: 'before_title',
      label: 'Before title',
      description: 'HTML markup before title',
      type: FIELD_TYPES.TEXT,
      default: <code>{'<h3 class="op-is-open-title">'}</code>,
    },
    {
      id: 'after_title',
      label: 'After title',
      description: 'HTML markup after title',
      type: FIELD_TYPES.TEXT,
      default: <code>{'</h3>'}</code>,
    },
  ],
};

export default shortcodeConfig;
