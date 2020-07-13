// @author Chamupathi Mendis.
// email chamupathi2008@gmail.com

import { combineReducers } from 'redux';

import { recordsReducer } from '../records/records.reducer'
import { accountsReducer } from '../accounts/accounts.reducer';

export const rootReducer = combineReducers ({
  accounts : accountsReducer,
  records: recordsReducer,
})

export type RootState = ReturnType<typeof rootReducer>