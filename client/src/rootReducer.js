import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import * as flare from './modules/global/flare';
import * as application from './modules/application';

const rootReducer = combineReducers({
  form,
  [flare.constants.STATE_KEY]: flare.reducer,
  [application.constants.STATE_KEY]: application.reducer
});

export default rootReducer;