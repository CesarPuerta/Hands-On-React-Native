import { each } from 'lodash';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import sagas from './sagas';
import Reactotron from 'HandsOn/ReactotronConfig';

function configureStore() {
  const sagaMonitor = Reactotron.createSagaMonitor();
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  const allMiddlewares = [sagaMiddleware];

  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...allMiddlewares), Reactotron.createEnhancer())
  );

  each(sagas, saga => {
    sagaMiddleware.run(saga);
  });
  return store;
}

export default configureStore();
