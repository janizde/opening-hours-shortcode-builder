import * as React from 'react';

import { SHORTCODE_TYPES } from '../../config/constants';
import ShortcodeConfigs from './../../config';
import formatShortcode from './../../formatter';
import parseOptions from './../../optionParser';

import {
  EmptyModel,
  PartialModel,
  IShortcodeConfig,
  IShortcodeModel,
  TShortcodeType,
  TAnyFieldConfig,
  ISelectFieldConfig,
  ITextFieldConfig,
  ICheckboxFieldConfig,
  ISetIdFieldConfig,
} from './../../typings';

import ShortcodeSelect from './ShortcodeSelect';
import ShortcodeDisplay from './ShortcodeDisplay';
import Text from './../Fields/Text';
import Checkbox from './../Fields/Checkbox';
import Select from './../Fields/Select';
import SetId from './../Fields/SetId';

/**
 * Creates an empty shortcode model from the specified shortcode config
 * @param     config    The configuration of the shortcode for which to create the shortcode model
 * @returns             Empty model containing all available shortcode options set to `null`
 */
const createEmptyModel = <M extends IShortcodeModel, C extends IShortcodeConfig<M>>(config: C): EmptyModel<M> =>
  config.fields.map(field => field.id).reduce(
    (model, fieldId) => ({
      ...model,
      [fieldId]: null,
    }),
    {}
  ) as EmptyModel<M>;

/** The options passed in the hash portion of the url */
const options = parseOptions();

interface IFormState<M extends IShortcodeModel> {
  shortcode: TShortcodeType;
  model: PartialModel<M>;
}

export default class Form<M extends IShortcodeModel, C extends IShortcodeConfig<M>> extends React.PureComponent<
  {},
  IFormState<M>
> {
  constructor(props: {}) {
    super(props);

    const initialShortcodeId = options && options.shortcode ? options.shortcode : SHORTCODE_TYPES.OVERVIEW;

    this.state = {
      shortcode: initialShortcodeId,
      model: createEmptyModel(ShortcodeConfigs[initialShortcodeId]),
    };

    this.handleChangeShortcodeType = this.handleChangeShortcodeType.bind(this);
    this.handleChangeModelValue = this.handleChangeModelValue.bind(this);
  }

  handleChangeShortcodeType(newType: TShortcodeType) {
    this.setState(prevState => ({
      ...prevState,
      shortcode: newType,
      model: createEmptyModel(ShortcodeConfigs[newType]),
    }));
  }

  handleChangeModelValue<K extends keyof M>(key: K, value: M[K]) {
    this.setState(prevState => ({
      ...prevState,
      model: Object.assign({}, prevState.model, { [key]: value }),
    }));
  }

  renderField(field: TAnyFieldConfig<M>) {
    const { model } = this.state;

    type TAnyModelValue = string | number | boolean | null;
    const currentValue = model[field.id] as TAnyModelValue;

    switch (field.type) {
      case 'TEXT':
        const textField = field as ITextFieldConfig<M>;
        return (
          <Text
            field={textField}
            value={currentValue as string | null}
            onChange={value => this.handleChangeModelValue(textField.id, value as any)}
          />
        );

      case 'CHECKBOX':
        const checkboxField = field as ICheckboxFieldConfig<M>;
        return (
          <Checkbox
            field={checkboxField}
            value={currentValue as boolean | null}
            onChange={value => this.handleChangeModelValue(checkboxField.id, value as any)}
          />
        );

      case 'SELECT':
        const selectField = field as ISelectFieldConfig<M>;
        return (
          <Select
            field={selectField}
            options={selectField.options || []}
            value={currentValue as string | null}
            onChange={value => this.handleChangeModelValue(selectField.id, value as any)}
          />
        );

      case 'SET_ID':
        const setIdField = field as ISetIdFieldConfig<M>;
        return (
          <SetId
            field={setIdField}
            value={currentValue as string | null}
            sets={options && options.sets}
            onChange={value => this.handleChangeModelValue(setIdField.id, value as any)}
          />
        );

      default:
        return null;
    }
  }

  render() {
    const { shortcode, model } = this.state;
    const shortcodeConfig: C = ShortcodeConfigs[shortcode] as C;

    return (
      <div className={'card mt-5 mb-5'}>
        <div className={'card-header'}>
          <ShortcodeSelect
            options={Object.keys(ShortcodeConfigs)
              .map(shortcodeKey => ShortcodeConfigs[shortcodeKey])
              .map(config => ({
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
