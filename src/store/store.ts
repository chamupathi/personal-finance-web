import { createStore, applyMiddleware } from 'redux';
// import { apiMiddleware } from 'redux-api-middleware';
// import createDebounce from 'redux-debounced';
// import logger from 'redux-logger';

import { rootReducer } from './index';


const store = createStore(
	rootReducer,
	{},
	applyMiddleware(
		// logger,
	)
);

export { store };

