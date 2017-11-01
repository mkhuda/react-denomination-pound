import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer'
import { createLogger } from 'redux-logger'

let finalCreateStore = compose(
    applyMiddleware(createLogger({
      collapsed: true
    }))
)(createStore)

export default function configureStore(initialState = { results: [] }) {
    return finalCreateStore(reducer, initialState, window.devToolsExtension && window.devToolsExtension())
}