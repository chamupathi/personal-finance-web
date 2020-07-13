// @author Chamupathi Mendis.
// email chamupathi2008@gmail.com

import { createStore, applyMiddleware } from 'redux';

import { rootReducer } from './index';


const store = createStore(
	rootReducer,
	{},
	applyMiddleware(
		// logger,
	)
);

export { store };

