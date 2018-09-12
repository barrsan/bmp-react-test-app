import { Map, List } from 'immutable';
import { actionTypes } from '../constants';
import data from '../data.json';


export const INITIAL_STATE = Map({
  items: List(data),
  searchString: '',
  filter: Map({
    place: '',
  }),
});


export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.EXHIBIT_CREATE: {
      return state.updateIn(['items'], items => items.unshift(payload));
    }

    case actionTypes.EXHIBITS_SET_SEARCH_STRING: {
      return state.set('searchString', payload.searchString);
    }

    case actionTypes.EXHIBITS_SET_FILTER: {
      return state.setIn(['filter', payload.type], payload.value);
    }

    default: return state;
  }
};
