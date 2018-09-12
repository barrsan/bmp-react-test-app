import { createStore, compose, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';


export default function (params) {
  const initialState = params.initialState || {};
  // eslint-disable-next-line
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    connectRouter(params.history)(rootReducer),
    initialState,
    // composeEnhancers(),
    composeEnhancers(
      applyMiddleware(
        thunk,
        routerMiddleware(params.history),
      ),
    ),
  );

  return store;
}
