/**
 * @format
 */
import React from 'react'
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './store/reducers/rootReducer'

const store = createStore(rootReducer, applyMiddleware(thunk));
const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)


AppRegistry.registerComponent(appName, () => ReduxApp);
