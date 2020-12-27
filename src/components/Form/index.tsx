import * as React from 'react';
import { useFormik } from 'formik';

import ShortcodeConfigs from './../../config';
import formatShortcode from './../../formatter';
import parseOptions from './../../optionParser';

import {
  EmptyModel,
  IShortcodeConfig,
  IShortcodeModel,
  ShortcodeType,
  TAnyFieldConfig,
  FieldType,
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
        [fieldId]: '',
      }),
      {}
    ) as EmptyModel<M>;

/** The options passed in the hash portion of the url */
const options = parseOptions();

/**
 * Base component of the shortcode form holding the whole application state
 */
const FormContainer: React.FC = () => {
  const [shortcode, setShortcode] = React.useState(
    options && options.shortcode ? options.shortcode : ShortcodeType.Overview
  );

  /**
   * Handles changes to the currently selected shortcode tag.
   * Updates `shortcode` in state according to `newType` and creates a new empty
   * model for the `model` state field based on `newType`.
   *
   * @param     newType     The new shortcode type
   */
  const handleChangeShortcodeType = (nextShortcode: ShortcodeType) => {
    setShortcode(nextShortcode);
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

      <Form
        shortcode={shortcode}
        /* Explicitly setting a key to force a re-mount when the shortcode type changes */
        key={shortcode}
      />
    </div>
  );
};

export default FormContainer;

const Form: React.FC<{ shortcode: ShortcodeType }> = ({ shortcode }) => {
  const { values, handleChange, handleBlur } = useFormik({
    initialValues: createEmptyModel(ShortcodeConfigs[shortcode]),
    onSubmit: () => undefined,
  });

  const shortcodeConfig = ShortcodeConfigs[shortcode];

  return (
    <>
      <div className={'card-body'}>
        <ShortcodeDisplay
          shortcode={formatShortcode(shortcodeConfig.id, values)}
        />
      </div>

      <ul className="list-group list-group-flush">
        {shortcodeConfig.fields
          .filter((field) => !field.show || field.show(values))
          .map((field) => (
            <li className={'list-group-item'} key={field.id}>
              <Field
                config={field}
                value={values[field.id]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </li>
          ))}
      </ul>
    </>
  );
};

interface IFieldProps<M extends IShortcodeModel> {
  config: TAnyFieldConfig<M>;
  value: string;
  onChange: React.ChangeEventHandler<HTMLElement>;
  onBlur: React.FocusEventHandler<HTMLElement>;
}

/**
 * Renders a form field according to its `type` and populates it with
 * the current model value for that field
 */
function Field<M extends IShortcodeModel>({
  config,
  ...restProps
}: IFieldProps<M>) {
  switch (config.type) {
    case FieldType.Text:
      return <Text field={config} {...restProps} />;

    case FieldType.Checkbox:
      return <Checkbox field={config} {...restProps} />;

    case FieldType.Select:
      return (
        <Select field={config} options={config.options || []} {...restProps} />
      );

    case FieldType.SetId:
      return (
        <SetId field={config} sets={options && options.sets} {...restProps} />
      );

    default:
      return null;
  }
}
