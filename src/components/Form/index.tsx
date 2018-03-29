import * as React from 'react'

import { SHORTCODE_TYPES, FIELD_TYPES } from '../../config/constants';
import ShortcodeConfigs from './../../config';
import formatShortcode from './../../formatter';
import parseOptions from './../../optionParser';

import ShortcodeSelect from './ShortcodeSelect';
import ShortcodeDisplay from './ShortcodeDisplay';
import Text from './../Fields/Text';
import Checkbox from './../Fields/Checkbox';
import Select from './../Fields/Select';
import SetId from './../Fields/SetId';

const createEmptyModel = fields =>
  fields.map(field => field.id).reduce(
    (model, fieldId) => ({
      ...model,
      [fieldId]: null,
    }),
    {}
  );

const options = parseOptions();

export default class Form extends React.PureComponent<any> {
  constructor(props) {
    super(props);

    const initialShortcodeId = options.shortcode && Object.values(SHORTCODE_TYPES).indexOf(options.shortcode) > -1 ? options.shortcode : SHORTCODE_TYPES.OVERVIEW;

    this.state = {
      shortcode: initialShortcodeId,
      model: createEmptyModel(ShortcodeConfigs[initialShortcodeId].fields),
    };

    this.handleChangeShortcodeType = this.handleChangeShortcodeType.bind(this);
    this.handleChangeModelValue = this.handleChangeModelValue.bind(this);
  }

  handleChangeShortcodeType(newType) {
    this.setState(prevState => ({
      ...prevState,
      shortcode: newType,
      model: createEmptyModel(ShortcodeConfigs[newType].fields),
    }));
  }

  handleChangeModelValue(key, value) {
    this.setState(prevState => ({
      ...prevState,
      model: {
        ...prevState.model,
        [key]: value,
      },
    }));
  }

  renderField(field) {
    const { model } = this.state;

    switch (field.type) {
      case FIELD_TYPES.TEXT:
        return <Text field={field} value={model[field.id]} onChange={value => this.handleChangeModelValue(field.id, value)} />;

      case FIELD_TYPES.CHECKBOX:
        return <Checkbox field={field} value={model[field.id]} onChange={value => this.handleChangeModelValue(field.id, value)} />;

      case FIELD_TYPES.SELECT:
        return (
          <Select field={field} options={field.options} value={model[field.id]} onChange={value => this.handleChangeModelValue(field.id, value)} />
        );

      case FIELD_TYPES.SET_ID:
        return <SetId field={field} value={model[field.id]} sets={options.sets} onChange={value => this.handleChangeModelValue(field.id, value)} />;

      default:
        return null;
    }
  }

  render() {
    const { shortcode, model } = this.state;
    const shortcodeConfig = ShortcodeConfigs[shortcode];

    return (
      <div className={'card mt-5 mb-5'}>
        <div className={'card-header'}>
          <ShortcodeSelect
            options={Object.values(ShortcodeConfigs).map(config => ({
              id: config.id,
              label: config.label,
            }))}
            value={shortcode}
            onChange={this.handleChangeShortcodeType}
          />
        </div>

        <div className={'card-body'}>
          <ShortcodeDisplay shortcode={formatShortcode(shortcodeConfig.id, model)} />
        </div>

        <ul className="list-group list-group-flush">
          {shortcodeConfig.fields.filter(field => !field.show || field.show(model)).map(field => (
            <li className={'list-group-item'} key={field.id}>
              {this.renderField(field)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
