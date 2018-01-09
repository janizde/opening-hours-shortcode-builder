import React, { PureComponent } from 'react';

import { SHORTCODE_TYPES, FIELD_TYPES } from '../../config/constants';
import ShortcodeConfigs from './../../config';
import formatShortcode from './../../formatter';

import ShortcodeSelect from './ShortcodeSelect';
import ShortcodeDisplay from './ShortcodeDisplay';
import Text from './../Fields/Text';
import Checkbox from './../Fields/Checkbox';
import Select from './../Fields/Select';

const Aux = props => props.children;

const createEmptyModel = fields =>
  fields.map(field => field.id).reduce(
    (model, fieldId) => ({
      ...model,
      [fieldId]: null,
    }),
    {}
  );

export default class Form extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      shortcode: SHORTCODE_TYPES.IS_OPEN,
      model: createEmptyModel(ShortcodeConfigs[SHORTCODE_TYPES.IS_OPEN].fields),
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
          <ShortcodeDisplay shortcode={formatShortcode(shortcodeConfig.shortcode, model)} />
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
