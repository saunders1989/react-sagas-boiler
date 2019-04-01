import { connect } from 'react-redux';

import actions from '../../actions';
import getApiContent from '../../thunks';
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

function mapStateToProps(state: ApplicationState) {
  const { home: { count } } = state;

  return {
    count,
  };
}

// Dispatch<actions.HomeAcionts>
function mapDispatchToProps(dispatch: Dispatch<any>): DispatchProps {
  return {
    getContent() {
      dispatch(getApiContent());
    },
    onClick() {
      dispatch(actions.increment());
    },
  };
}

const HomeContainer = connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default HomeContainer;
