import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  onClick?: () => void;
}

// public static defaultProps: Partial<IProps> = {
//   countBy: 1,
// };

const DummyComponent = ({ onClick }: Props) => (
  <button
    onClick={onClick}
    type="button"
  >
    Click to increment
  </button>
);

DummyComponent.propTypes = {
  onClick: PropTypes.func,
};

export default DummyComponent;
