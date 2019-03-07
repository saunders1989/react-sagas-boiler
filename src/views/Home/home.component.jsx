import React from 'react';
import PropTypes from 'prop-types';

import DummyComponent from '../../components/atoms/dummy-component';
import TestHook from '../../components/atoms/test-hook';
import Tooltip from '../../components/atoms/tooltip';
import dummy from '../../assets/illustrations/dummy.png';
import { ReactComponent as Lamp } from '../../assets/illustrations/lamp.svg';


class Home extends React.Component {
  constructor(props) {
    super(props);

    props.getContent();
  }

  render() {
    const { count, onClick } = this.props;

    return (
      <div>
        <p>React thunk home</p>
        <br />
        <br />
        <p>
          This is the count
          {count}
        </p>
        <br />
        <img src={dummy} alt="lamp" />
        <Lamp alt="wibble" />
        <br />
        <DummyComponent
          onClick={onClick}
        />
        <br />
        <br />
        <br />
        <TestHook />
        <br />
        <br />
        <br />
        <br />
        <Tooltip
          id="default"
          text="Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet"
        />
      </div>
    );
  }
}

Home.defaultProps = {
  getContent: () => {},
  count: 0,
  onClick: () => {},
};

Home.propTypes = {
  getContent: PropTypes.func,
  count: PropTypes.number,
  onClick: PropTypes.func,
};

export default Home;
