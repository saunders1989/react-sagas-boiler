import { connect } from 'react-redux';

import actions from '../../actions';
// import getApiContent from '../../thunks';
import Home from './home.component';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';

// interface MyProps {
//   count: number;
//   onClick: () => null;
// }

interface MyStateProps {
  count: number;
}

interface MyDispatchProps {
  getContent: () => void;
  onClick: () => void;
}

// interface MyOwnProps {
//   count: number;
//   getContent: () => void;
//   onClick: () => void;
// }

// interface Home = {
//   getContent: () => void;
//   onClick: () => void;
// }

function mapStateToProps(state: any) {
  const { home: { count } } = state;

  return {
    count,
  };
}

// Dispatch<actions.HomeAcionts>
function mapDispatchToProps(dispatch:  Dispatch<AnyAction>) {
  return {
    getContent() {
      // dispatch(getApiContent());
    },
    onClick() {
      dispatch(actions.increment());
    },
  };
}

const HomeContainer = connect<MyStateProps, MyDispatchProps, Home>(
  mapStateToProps,
  mapDispatchToProps,
)(Home as any);

export default HomeContainer;
