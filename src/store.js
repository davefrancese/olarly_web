import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import appReducer from './reducers/appReducer'; // the value from combineReducers
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {SIGN_OUT} from './actions/actionTypes';

// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: storage,
  stateReconciler: autoMergeLevel2
  // Whitelist (Save Specific Reducers)
};
// Middleware: Redux Persist Persisted Reducer

const rootReducer = ( state, action ) => {
  if ( action.type === SIGN_OUT ) {
    storage.removeItem('persist:root')
    state = undefined;
  }

  return appReducer(state, action)
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(thunk,logger),
);
// Middleware: Redux Persist Persister
let persistor = persistStore(store);
// Exports
export {
  store,
  persistor,
};
