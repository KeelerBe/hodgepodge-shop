import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { fetchInit } from './actions'
import './index.css'
import App from './containers/App'
import configureStore from './config/configureStore'

const store = configureStore()
store.dispatch(fetchInit())

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
