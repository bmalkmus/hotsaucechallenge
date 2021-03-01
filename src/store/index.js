import {createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from '../reducers'
import storage from 'redux-persist/lib/storage';

export function configureStore(preloadedState = {}) {

    const persistConfig = {
      key: 'GET_SAUCE',
      storage: storage,
    }
  
    const pReducer = persistReducer(persistConfig, rootReducer);
  
  
    const store = createStore(pReducer, preloadedState);
  
    persistStore(store);
  
    return store
      
  }