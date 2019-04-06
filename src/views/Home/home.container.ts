import { connect } from 'react-redux';

import actions from '../../actions';
import Home from './home.component';
import { Dispatch } from 'react';

interface HomeState {
  count: number;
}

interface TestState {
  test: boolean;
}

interface ApplicationState {
  home: HomeState;
  test: TestState
}

interface StateProps {
  count: number;
}

interface DispatchProps {
  getContent: () => void;
  onClick: () => void;
}

function mapStateToProps(state: ApplicationState): StateProps {
  const { home: { count } } = state;

  return {
    count,
  };
}

// Dispatch<actions.HomeAcionts>
function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  console.log(dispatch);
  return {
    getContent() {
      dispatch(actions.getContent());
    },
    onClick() {
      dispatch(actions.increment());
    },
  };
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default HomeContainer;
