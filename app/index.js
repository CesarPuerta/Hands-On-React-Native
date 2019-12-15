import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';

import Navigator from './navigator';

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
