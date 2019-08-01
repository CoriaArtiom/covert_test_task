import React, { Component } from 'react';
import LayoutContainer from './components/LayoutContainer';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends Component {

  render () {
    return (
      <Provider store = {store}>
        <LayoutContainer/>
      </Provider>
    );
  }
}
