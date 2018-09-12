import { push } from 'connected-react-router';
import { actionTypes } from '../constants';


const createExhibit = data => (dispatch) => {
  dispatch({
    type: actionTypes.EXHIBIT_CREATE,
    payload: data,
  });
  return Promise.resolve(dispatch(push('/?page=1')));
};


const setExhibitsSearchString = data => (dispatch) => {
  dispatch({
    type: actionTypes.EXHIBITS_SET_SEARCH_STRING,
    payload: data,
  });
  return Promise.resolve(dispatch(push('/?page=1')));
};


const setExhibitsFilter = data => (dispatch) => {
  dispatch({
    type: actionTypes.EXHIBITS_SET_FILTER,
    payload: data,
  });
  return Promise.resolve(dispatch(push('/?page=1')));
};


export default {
  createExhibit,
  setExhibitsSearchString,
  setExhibitsFilter,
};
