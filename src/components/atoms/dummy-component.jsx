import React from 'react';
import PropTypes from 'prop-types';

const DummyComponent = ({ onClick }) => (
  <button
    onClick={onClick}
    type="button"
  >
    Click to increment
  </button>
);

DummyComponent.defaultProps = {
  onClick: () => {},
};

DummyComponent.propTypes = {
  onClick: PropTypes.func,
};

export default DummyComponent;
