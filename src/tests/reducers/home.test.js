import home from '../../reducers/home';
import {
  INCREMENT,
  STORE_CONTENT
} from '../../actions/home';

describe('Initial state', () => {
  test('returns the correct state', () => {
    const initialState = {
      count: 0,
      todos: []
    };

    expect(home(undefined, {})).toEqual(initialState);
  });
});

describe('INCREMENT', () => {
  test('returns the correct state', () => {
    const action = { type: 'INCREMENT', payload: 1 };
    const expectedState = {
      count: 1,
      todos: []
    };

    expect(home(undefined, action)).toEqual(expectedState);
  });
});

describe('STORE_CONTENT', () => {
  test('returns the correct state when storing content', () => {
    const action = {
      type: 'STORE_CONTENT',
      payload: [
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false
        }
      ]
    };
    const expectedState = {
      count: 0,
      todos: [
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false
        }
      ]
    };

    expect(home(undefined, action)).toEqual(expectedState);
  });

  describe('ERROR_FETCHING_CONTENT', () => {
    test('returns the correct state', () => {
      const action = { type: 'ERROR_FETCHING_CONTENT', payload: 'error' };
      const expectedState = {
        count: 0,
        todos: 'error'
      };

      expect(home(undefined, action)).toEqual(expectedState);
    });
  });
});
