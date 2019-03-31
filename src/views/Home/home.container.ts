import { connect } from 'react-redux';

import actions from '../../actions';
import getApiContent from '../../thunks';
import Home from './home.component';

function mapStateToProps(state: any) {
  const { home: { count } } = state;

  return {
    count,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    getContent() {
      dispatch(getApiContent());
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
