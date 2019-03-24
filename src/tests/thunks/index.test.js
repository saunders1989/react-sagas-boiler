import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import actions, { types } from '../../actions';
import getApiContent from '../../thunks';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates STORE_CONTENT when fetching todos has been done', () => {
    fetchMock.getOnce('https://jsonplaceholder.typicode.com/todos', {
      body: { todos: ['do something'] },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [
      {
        type: types.STORE_CONTENT,
        payload: {
          todos: ['do something']
        }
      }
    ];

    const store = mockStore({ todos: [] });

    return store.dispatch(getApiContent()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    })
  });

  it('creates an error if it fails to fetch content', () => {
    fetchMock.getOnce('https://jsonplaceholder.typicode.com/todos',
    {
      throws: { message: 'network error' }
    })

    const expectedActions = [
      {
        type: types.ERROR_FETCHING_CONTENT,
        payload: { message: 'network error' }
      }
    ];

    const store = mockStore({ todos: [] });

    return store.dispatch(getApiContent()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    })
  });


  // it('should dispatch SET_FAIL action on failed api call', async () => {
  //   spyOn(getApiContent, 'fetchHelper').and.returnValue(Promise.reject());
  //   const mockDispatch = jest.fn();

  //   await getApiContent()(mockDispatch);

  //   expect(mockDispatch).toHaveBeenCalledWith({
  //     type: SET_FAIL,
  //   });
  // });
})
