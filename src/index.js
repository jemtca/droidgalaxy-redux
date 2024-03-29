import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

import { searchDroids, requestDroids } from './reducers';

// const logger = createLogger();
const rootReducers = combineReducers({ searchDroids, requestDroids });
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Provider store={store}>
				<App />
			</Provider>);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
