import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import authReducer from '../reducers';

export default AuthStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const storeEnhancer =
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'undefined'
      ? applyMiddleware(sagaMiddleware)
      : compose(
          applyMiddleware(sagaMiddleware, logger),
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__(),
        );

  return {
    ...createStore(authReducer, storeEnhancer),
    runSaga: sagaMiddleware.run,
  };
};
