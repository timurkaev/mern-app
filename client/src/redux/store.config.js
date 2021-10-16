import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {product} from './reducers/productReducer';
import { users } from './reducers/usersReducer'

const logger = createLogger({
  diff: true,
  collapsed: true
});

export const store = createStore(
    combineReducers({product, users}),
    applyMiddleware(thunk, logger)
);