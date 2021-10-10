import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {product} from './reducers/product';

const logger = createLogger({
  diff: true,
  collapsed: true
})

export const store = createStore(
    combineReducers({product}),
    applyMiddleware(thunk, logger)
)