import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class PlaceholderTable extends PureComponent {
  static propTypes = {
    placeholders: PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  };

  render() {
    const { placeholders } = this.props;

    return (
      <div className={'mt-4'}>
        <h5>Placeholders</h5>
        <table className={"table table-sm table-bordered mt-2"}>
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

      </div>
    );
  }
}
