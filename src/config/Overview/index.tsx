import * as React from 'react';

import { FIELD_TYPES, SHORTCODE_TYPES } from '../constants';
import { IShortcodeModel, IShortcodeConfig } from '../../typings';

type THighlightValue = 'nothing' | 'period' | 'day';

export interface IOverviewModel extends IShortcodeModel {
  show_closed_days: boolean;
  show_description: boolean;
  highlight: THighlightValue;
  compress: true;
  short: true;
  include_io: true;
  include_holidays: true;
  caption_closed: string;
  week_offset: number;
  highlighted_period_class: string;
  highlighted_day_class: string;
  time_format: string;
}

const shortcodeConfig: IShortcodeConfig<IOverviewModel> = {
  id: SHORTCODE_TYPES.OVERVIEW,
  label: 'Overview',
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
      id: 'show_closed_days',
      label: 'Show closed days',
      description: 'Whether to show closed days/rows in the table.',
      default: 'Disabled',
      type: FIELD_TYPES.CHECKBOX,
    },
    {
      id: 'show_description',
      label: 'Show set description',
      description: 'Whether to show the description of the set above the opening hours',
      default: 'Disabled',
      type: FIELD_TYPES.CHECKBOX,
    },
    {
      id: 'highlight',
      label: 'Highlight',
      description: 'Which items should be highlighted',
      default: 'Nothing',
      type: FIELD_TYPES.SELECT,
      options: [
        {
          value: 'nothing',
          label: 'Nothing',
        },
        {
          value: 'period',
          label: 'Active periods',
        },
        {
          value: 'day',
          label: 'Active day',
        },
      ],
    },
    {
      id: 'compress',
      label: 'Compress days',
      description: 'Whether to combine days with mutual opening hours',
      default: 'Disabled',
      type: FIELD_TYPES.CHECKBOX,
    },
    {
      id: 'short',
      label: 'Use weekday abbreviations',
      description: 'Abbreviations will be translated to you WordPress language.',
      default: 'Disabled',
      type: FIELD_TYPES.CHECKBOX,
    },
    {
      id: 'include_io',
      label: 'Include irregular openings',
      description: 'Whether to include irregular openings in the table',
      default: 'Disabled',
      type: FIELD_TYPES.CHECKBOX,
    },
    {
      id: 'include_holidays',
      label: 'Include holidays',
      description: 'Whether to include holidays in the table',
      default: 'Disabled',
      type: FIELD_TYPES.CHECKBOX,
    },
    {
      id: 'caption_closed',
      label: 'Caption when closed',
      description: 'Label to show in rows corresponding to closed days',
      default: 'Closed (translated)',
      type: FIELD_TYPES.TEXT,
    },
    {
      id: 'week_offset',
      label: 'Week offset',
      description:
        'Number of weeks that the view should be shifted (positive for future weeks, negative for past weeks)',
      default: <code>0</code>,
      type: FIELD_TYPES.TEXT,
      attributes: {
        type: 'number',
        step: 1,
      } as any,
    },
    {
      id: 'highlighted_period_class',
      label: 'CSS class for highlighted periods',
      default: <code>highlighted</code>,
      type: FIELD_TYPES.TEXT,
    },
    {
      id: 'highlighted_day_class',
      label: 'CSS class for highlighted days',
      default: <code>highlighted</code>,
      type: FIELD_TYPES.TEXT,
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
      id: 'before_widget',
      label: 'Before widget',
      description: 'HTML markup before widget',
      type: FIELD_TYPES.TEXT,
      default: <code>{'<div class="op-overview-shortcode">'}</code>,
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
      default: <code>{'<h3 class="op-overview-title">'}</code>,
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
