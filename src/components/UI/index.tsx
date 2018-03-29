import * as React from 'react';

/**
 * Creates a stateless functional react component rendering a `div` element
 * with the specified class name.
 *
 * @param       className       The default `className` string to set as the `div`'s `className`
 * @param       displayName     The SFC's `displayName`
 */
export const createComponentWithClassName = (className: string, displayName: string) => {
  const ClassNameComponent: React.SFC<React.DOMAttributes<HTMLDivElement>> = ({ children, ...restProps }) => (
    <div className={className} {...restProps}>
      {children}
    </div>
  );

  ClassNameComponent.displayName = displayName;

  return ClassNameComponent;
};

export const Row = createComponentWithClassName('row w-100', 'Row');
export const LeftCol = createComponentWithClassName('col-12 col-md-6', 'LeftCol');
export const RightCol = createComponentWithClassName('col-12 col-md-6', 'RightCol');
export const FullCol = createComponentWithClassName('col-12', 'FullCol');
