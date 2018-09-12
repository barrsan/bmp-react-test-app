import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { push } from 'connected-react-router';
import actions from './exhibits';
import { actionTypes } from '../constants';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('Exhibits actions', () => {
  test('Should create an action to create exhibit', () => {
    const expectedActions = [
      {
        type: actionTypes.EXHIBIT_CREATE,
        payload: { name: 'Test' },
      },
      push('/?page=1'),
    ];

    const store = mockStore({});

    return store
      .dispatch(actions.createExhibit({ name: 'Test' }))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });


  test('Should create an action to set search string', () => {
    const expectedActions = [
      {
        type: actionTypes.EXHIBITS_SET_SEARCH_STRING,
        payload: { searchString: 'Test' },
      },
      push('/?page=1'),
    ];

    const store = mockStore({});

    return store
      .dispatch(actions.setExhibitsSearchString({ searchString: 'Test' }))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });


  test('Should create an action to set search string', () => {
    const expectedActions = [
      {
        type: actionTypes.EXHIBITS_SET_FILTER,
        payload: {
          type: 'place',
          value: 'Test',
        },
      },
      push('/?page=1'),
    ];

    const store = mockStore({});

    return store
      .dispatch(actions.setExhibitsFilter({
        type: 'place',
        value: 'Test',
      }))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });
});
