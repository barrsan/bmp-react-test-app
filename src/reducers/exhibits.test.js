import { Map, List } from 'immutable';
import { actionTypes } from '../constants';
import reducer, { INITIAL_STATE } from './exhibits';


describe('Exhibits reducer', () => {
  test('Should return the initial state', () => {
    expect(
      reducer(undefined, {}),
    ).toEqual(INITIAL_STATE);
  });


  test('Should handle EXHIBIT_CREATE', () => {
    const initialState = Map({
      items: List([]),
    });

    const initialStateItemsNotEmpty = Map({
      items: List([
        {
          name: 'Test',
        },
      ]),
    });

    const action = {
      type: actionTypes.EXHIBIT_CREATE,
      payload: {
        name: 'Test name',
      },
    };

    expect(reducer(initialState, action)).toEqual(
      Map({
        items: List([action.payload]),
      }),
    );

    expect(reducer(initialStateItemsNotEmpty, action)).toEqual(
      Map({
        items: List([
          action.payload,
          {
            name: 'Test',
          },
        ]),
      }),
    );
  });


  test('Should handle EXHIBITS_SET_SEARCH_STRING', () => {
    const initialState = Map({
      searchString: '',
    });

    const action = {
      type: actionTypes.EXHIBITS_SET_SEARCH_STRING,
      payload: {
        searchString: 'Search string',
      },
    };

    expect(reducer(initialState, action)).toEqual(
      Map({
        searchString: action.payload.searchString,
      }),
    );
  });


  test('Should handle EXHIBITS_SET_FILTER', () => {
    const initialState = Map({
      filter: Map({
        place: '',
      }),
    });

    const action = {
      type: actionTypes.EXHIBITS_SET_FILTER,
      payload: {
        type: 'place',
        value: 'Test value',
      },
    };

    expect(reducer(initialState, action)).toEqual(
      Map({
        filter: Map({
          [action.payload.type]: action.payload.value,
        }),
      }),
    );
  });
});
