import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';

function reduxStore(initialState) {
  // const store = createStore(reducers, initialState,
    // window.devToolsExtension && window.devToolsExtension());
  const store = createStore(
    reducers,
    initialState,
    compose(applyMiddleware(thunk))
  );
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      // We need to require for hot reloadign to work properly.
      const nextReducer = require('../reducers');  // eslint-disable-line global-require

      store.replaceReducer(nextReducer);
    });
  }
  return store;
}

export default reduxStore;
