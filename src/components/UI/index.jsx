import React from 'react';
import PropTypes from 'prop-types';

export const createComponentWithClassName = (className, displayName) => {
  const ClassNameComponent = ({ children, ...restProps }) => (
    <div className={className} {...restProps}>{children}</div>
  );

  ClassNameComponent.displayName = displayName;

  ClassNameComponent.propTypes = {
    children: PropTypes.node,
  };

  return ClassNameComponent;
};

export const Row = createComponentWithClassName('row', 'Row');
export const LeftCol = createComponentWithClassName('col-12 col-md-4', 'LeftCol');
export const RightCol = createComponentWithClassName('col-12 col-md-8', 'RightCol');
export const FullCol = createComponentWithClassName('col-12', 'FullCol');