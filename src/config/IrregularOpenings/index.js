import React from 'react';
import { FIELD_TYPES, SHORTCODE_TYPES } from '../constants';

export default {
  id: SHORTCODE_TYPES.IRREGULAR_OPENINGS,
  label: 'Irregular Openings',
  shortcode: 'op-irregular-openings',
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
      id: 'before_widget',
      label: 'Before widget',
      description: 'HTML markup before widget',
      type: FIELD_TYPES.TEXT,
      default: <code>{'<div class="op-irregular-openings-shortcode">'}</code>,
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
      default: <code>{'<h3 class="op-irregular-openings-title">'}</code>,
    },
    {
      id: 'after_title',
      label: 'After title',
      description: 'HTML markup after title',
      type: FIELD_TYPES.TEXT,
      default: <code>{'</h3>'}</code>,
    },
    {
      id: 'highlight',
      label: 'Highlight',
      description: 'Highlight active irregular opening',
      type: FIELD_TYPES.CHECKBOX,
      default: 'Disabled',
    },
    {
      id: 'include_past',
      label: 'Include past irregular openings',
      type: FIELD_TYPES.CHECKBOX,
      default: 'Disabled',
    },
    {
      id: 'date_format',
      label: 'Date format',
      description: (
        <span>
          <span>PHP date format for the date of irregular openings.</span>
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
          <span>PHP time format for the time of irregular openings.</span>
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
      id: 'class_highlighted',
      label: 'CSS class for highlighted irregular openings',
      default: <code>highlighted</code>,
      type: FIELD_TYPES.TEXT,
    }
  ],
};
