import * as React from 'react';

import { IPlaceholder } from './../../../typings';

interface IPlaceholderTableProps {
  placeholders: Array<IPlaceholder>;
}

/**
 * Table component for string template placeholders
 */
export default class PlaceholderTable extends React.PureComponent<IPlaceholderTableProps> {
  render() {
    const { placeholders } = this.props;

    return (
      <div className={'mt-4'}>
        <h5>Placeholders</h5>
        <table className={'table table-sm table-bordered mt-2'}>
          <tbody>
            {placeholders.map(({ key, label }) => (
              <tr key={key}>
                <th scope={'row'}>
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
