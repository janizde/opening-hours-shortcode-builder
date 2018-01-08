import { FIELD_TYPES, SHORTCODE_TYPES } from "../constants";

export default {
  type: SHORTCODE_TYPES.IS_OPEN,
  name: 'Is Open',
  fields: [
    {
      id: 'before_widget',
      label: 'Before widget',
      description: 'HTML markup before widget',
      type: FIELD_TYPES.TEXT,
      default: '<div class="op-is-open-shortcode">',
    },
    {
      id: 'after_widget',
      label: 'After widget',
      description: 'HTML markup after widget',
      type: FIELD_TYPES.TEXT,
      default: '</div>',
    },
    {
      id: 'before_title',
      label: 'Before title',
      description: 'HTML markup before title',
      type: FIELD_TYPES.TEXT,
      default: '<div class="op-is-open-shortcode">',
    },
    {
      id: 'after_widget',
      label: 'After title',
      description: 'HTML markup after title',
      type: FIELD_TYPES.TEXT,
      default: '</div>',
    },
    {
      id: 'open_text',
      label: 'Open text',
      description: 'Text that will be shown when the selected set is currently open',
      type: FIELD_TYPES.TEXT,
      default: 'We\'re currently open.',
    },
    {
      id: 'closed_text',
      label: 'Closed text',
      description: 'Text that will be shown when the selected set is currently closed',
      type: FIELD_TYPES.TEXT,
      default: 'We\'re currently closed.',
    },
    {
      id: 'closed_holiday_text',
      label: 'Closed holiday text',
      description: 'Text that will be shown when the selected set is currently closed due to a holiday',
      type: FIELD_TYPES.TEXT,
      default: 'We\'re currently closed for %1$s.',
      placeholders: {
        '%1$s': 'The name of the holiday due to which the set is currently closed',
      },
    },
    {
      id: 'show_next',
      label: 'Show next open period',
      description: 'Whether to show the next open period when closed or not',
      type: FIELD_TYPES.CHECKBOX,
      default: false,
    },
  ]
};
