import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store.index';
import AppNavigator from './src/navigation/navigation.index';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
