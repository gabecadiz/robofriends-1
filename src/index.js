import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';
const logger = createLogger()
const rootReducer = combineReducers({ searchRobots, requestRobots })
//store uses root reducer to create the store
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
//provider component takes care of passing store to all components down the component tree from App, uses connect to finish the connection
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
