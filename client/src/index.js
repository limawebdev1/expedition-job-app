import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import rootReducer from './rootReducer';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);
ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
          <Router />
        </MuiThemeProvider>
    </Provider>
    , document.querySelector('#root'));
registerServiceWorker();