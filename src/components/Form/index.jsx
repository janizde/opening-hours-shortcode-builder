import React, { PureComponent } from "react";

import { SHORTCODE_TYPES, FIELD_TYPES } from "../../config/constants";
import ShortcodeConfigs from "./../../config";

import ShortcodeSelect from "./ShortcodeSelect";
import Text from "./../Fields/Text";
import Checkbox from "./../Fields/Checkbox";

const Aux = props => props.children;

const createEmptyModel = fields =>
  fields.map(field => field.id).reduce(
    (model, fieldId) => ({
      ...model,
      [fieldId]: null
    }),
    {}
  );

export default class Form extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      shortcode: SHORTCODE_TYPES.IS_OPEN,
      model: createEmptyModel(ShortcodeConfigs[SHORTCODE_TYPES.IS_OPEN].fields)
    };

    this.handleChangeShortcodeType = this.handleChangeShortcodeType.bind(this);
    this.handleChangeModelValue = this.handleChangeModelValue.bind(this);
  }

  handleChangeShortcodeType(newType) {
    this.setState(prevState => ({
      ...prevState,
      shortcode: newType,
      model: createEmptyModel(ShortcodeConfigs[newType].fields)
    }));
  }

  handleChangeModelValue(key, value) {
    this.setState(prevState => ({
      ...prevState,
      model: {
        ...prevState.model,
        [key]: value
      }
    }));
  }

  renderField(field) {
    const { model } = this.state;

    switch (field.type) {
      case FIELD_TYPES.TEXT:
        return (
          <Text
            key={field.id}
            field={field}
            value={model[field.id]}
            onChange={value => this.handleChangeModelValue(field.id, value)}
          />
        );

      case FIELD_TYPES.CHECKBOX:
        return (
          <Checkbox
            key={field.id}
            field={field}
            value={model[field.id]}
            onChange={value => this.handleChangeModelValue(field.id, value)}
          />
        );

      default:
        return null;
    }
  }

  render() {
    const { shortcode } = this.state;
    const shortcodeConfig = ShortcodeConfigs[shortcode];

    return (
      <form>
        <ShortcodeSelect
          options={Object.values(ShortcodeConfigs).map(config => ({
            id: config.id,
            label: config.label
          }))}
          value={shortcode}
          onChange={this.handleChangeShortcodeType}
        />

        {shortcodeConfig.fields.map(field => (
          <Aux>
            {this.renderField(field)}
            <hr className={"divider"} />
          </Aux>
        ))}
      </form>
    );
  }
}
