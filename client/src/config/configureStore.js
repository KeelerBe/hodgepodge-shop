import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export default function configureStore(preloadedState) {   
  const middlewares = [thunk]
  if (process.env.NODE_ENV !== 'production')
    middlewares.push(logger)
  
  const enhancedMiddlewares = applyMiddleware(...middlewares)
  const enhancers = [enhancedMiddlewares]
  const composedEnhancers = compose(...enhancers)
  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}
