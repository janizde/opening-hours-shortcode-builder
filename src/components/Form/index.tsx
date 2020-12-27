import * as React from 'react';

import { SHORTCODE_TYPES } from '../../config/constants';
import ShortcodeConfigs from './../../config';
import formatShortcode from './../../formatter';
import parseOptions from './../../optionParser';

import {
  EmptyModel,
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
const createEmptyModel = <
  M extends IShortcodeModel,
  C extends IShortcodeConfig<M>
>(
  config: C
): EmptyModel<M> =>
  config.fields
    .map((field) => field.id)
    .reduce(
      (model, fieldId) => ({
        ...model,
        [fieldId]: null,
      }),
      {}
    ) as EmptyModel<M>;

/** The options passed in the hash portion of the url */
const options = parseOptions();

/**
 * Base component of the shortcode form holding the whole application state
 */
function Form<M extends IShortcodeModel, C extends IShortcodeConfig<M>>() {
  const [shortcode, setShortcode] = React.useState(
    options && options.shortcode ? options.shortcode : SHORTCODE_TYPES.OVERVIEW
  );
  const [model, setModel] = React.useState(
    createEmptyModel(ShortcodeConfigs[shortcode])
  );

  const shortcodeConfig = ShortcodeConfigs[shortcode];

  /**
   * Handles changes to the currently selected shortcode tag.
   * Updates `shortcode` in state according to `newType` and creates a new empty
   * model for the `model` state field based on `newType`.
   *
   * @param     newType     The new shortcode type
   */
  const handleChangeShortcodeType = (nextShortcode: TShortcodeType) => {
    setShortcode(nextShortcode);
    setModel(createEmptyModel(ShortcodeConfigs[nextShortcode]));
  };

  /**
   * Handles changes to any field of the current shortcode model model
   *
   * @param       key       Key of the shortcode attribute to change
   * @param       value     New shortcode attribute value
   */
  const handleChangeModelValue = (
    key: string | number | symbol,
    value: TAnyModelValue
  ) => {
    setModel((prevModel) => ({ ...prevModel, [key]: value }));
  };

  return (
    <div className={'card mt-5 mb-5'}>
      <div className={'card-header'}>
        <ShortcodeSelect
          options={Object.keys(ShortcodeConfigs)
            .map((shortcodeKey) => ShortcodeConfigs[shortcodeKey])
            .map((config) => ({
              id: config.id,
              label: config.label,
            }))}
          value={shortcode}
          onChange={handleChangeShortcodeType}
        />
      </div>

      <div className={'card-body'}>
        <ShortcodeDisplay
          shortcode={formatShortcode(shortcodeConfig.id, model)}
        />
      </div>

      <ul className="list-group list-group-flush">
        {shortcodeConfig.fields
          .filter((field) => !field.show || field.show(model))
          .map((field) => (
            <li className={'list-group-item'} key={field.id}>
              <Field
                config={field}
                value={model[field.id]}
                handleChangeValue={handleChangeModelValue}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Form;

type TAnyModelValue = string | number | boolean | null;

interface IFieldProps<M extends IShortcodeModel> {
  config: TAnyFieldConfig<M>;
  value: TAnyModelValue;
  handleChangeValue: <K extends keyof M>(key: K, value: M[K]) => void;
}

/**
 * Renders a form field according to its `type` and populates it with
 * the current model value for that field
 */
function Field<M extends IShortcodeModel>({
  config,
  value,
  handleChangeValue,
}: IFieldProps<M>) {
  switch (config.type) {
    case 'TEXT':
      const textField = config as ITextFieldConfig<M>;
      return (
        <Text
          field={textField}
          value={value as string | null}
          onChange={(nextValue) => handleChangeValue(textField.id, nextValue as any)}
        />
      );

    case 'CHECKBOX':
      const checkboxField = config as ICheckboxFieldConfig<M>;
      return (
        <Checkbox
          field={checkboxField}
          value={value as boolean | null}
          onChange={(nextValue) =>
            handleChangeValue(checkboxField.id, nextValue as any)
          }
        />
      );

    case 'SELECT':
      const selectField = config as ISelectFieldConfig<M>;
      return (
        <Select
          field={selectField}
          options={selectField.options || []}
          value={value as string | null}
          onChange={(nextValue) => handleChangeValue(selectField.id, nextValue as any)}
        />
      );

    case 'SET_ID':
      const setIdField = config as ISetIdFieldConfig<M>;
      return (
        <SetId
          field={setIdField}
          value={value as string | null}
          sets={options && options.sets}
          onChange={(nextValue) => handleChangeValue(setIdField.id, nextValue as any)}
        />
      );

    default:
      return null;
  }
}
