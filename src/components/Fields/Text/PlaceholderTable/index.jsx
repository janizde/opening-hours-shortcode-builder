import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class PlaceholderTable extends PureComponent {
  static propTypes = {
    placeholders: PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  };

  render() {
    const { placeholders } = this.props;

    return (
      <table className={"table table-sm table-bordered mt-2"}>
        <thead>
          <tr>
            <th colspan={2} scope={"col"}>
              Placeholders
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(placeholders).map(([key, label]) => (
            <tr>
              <th scope={"row"}>
                <pre>{key}</pre>
              </th>
              <td>{label}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
