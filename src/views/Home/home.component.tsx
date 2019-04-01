import React from 'react';
import PropTypes from 'prop-types';

import DummyComponent from '../../components/atoms/dummy-component';
import TestHook from '../../components/atoms/test-hook';
import Tooltip from '../../components/atoms/tooltip';
import dummy from '../../assets/illustrations/dummy.png';
import { ReactComponent as Lamp } from '../../assets/illustrations/lamp.svg';

interface IProps {
  getContent: () => null,
  count: 0,
  onClick: () => null,
}

interface DispatchProps {
  getContent: () => void
}

class Home extends React.Component<IProps & DispatchProps, any> {
  public static propTypes = {
    getContent: PropTypes.func,
    count: PropTypes.number,
    onClick: PropTypes.func,
  };

  constructor(props: IProps) {
    super(props);

    props.getContent();
  }

  public render() {
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

export default Home;
