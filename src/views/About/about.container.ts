import { connect } from 'react-redux';

import actions from '../../actions';
// import getApiContent from '../../thunks';
import About from './about.component';
import { IHomeState } from 'src/store/types/home';
import { Dispatch } from 'redux';

function mapStateToProps(state: IHomeState) {
  const { count } = state;

  return {
    count,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    getContent() {
      // dispatch(getApiContent());
    },
    onClick() {
      dispatch(actions.increment());
    },
  };
}

const AboutContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(About);

export default AboutContainer;
