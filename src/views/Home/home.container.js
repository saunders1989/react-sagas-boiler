import { connect } from 'react-redux';

import actions from '../../actions';
import Home from './home.component';

function mapStateToProps(state) {
  const { home: { count } } = state;

  return {
    count,
  };
}

function mapDispatchToProps(dispatch) {
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
