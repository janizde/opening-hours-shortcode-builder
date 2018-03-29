import * as React from 'react';

export const createComponentWithClassName = (className: string, displayName: string) => {
  const ClassNameComponent: React.SFC<React.DOMAttributes<HTMLDivElement>> = ({ children, ...restProps }) => (
    <div className={className} {...restProps}>{children}</div>
  );

  ClassNameComponent.displayName = displayName;

  return ClassNameComponent;
};

export const Row = createComponentWithClassName('row w-100', 'Row');
export const LeftCol = createComponentWithClassName('col-12 col-md-6', 'LeftCol');
export const RightCol = createComponentWithClassName('col-12 col-md-6', 'RightCol');
export const FullCol = createComponentWithClassName('col-12', 'FullCol');
