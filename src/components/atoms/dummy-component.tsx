import React from 'react';

interface IProps {
  onClick?: () => void;
}

const DummyComponent = ({ onClick }: IProps) => (
  <button
    onClick={onClick}
    type="button"
  >
    Click to increment
  </button>
);

DummyComponent.defaultProps = {
  onClick: () => null
};

export default DummyComponent;
