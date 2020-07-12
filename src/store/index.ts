import { combineReducers } from 'redux';

import { recordsReducer } from '../records/records.reducer'

export const rootReducer = combineReducers ({
  records: recordsReducer,
})

export type RootState = ReturnType<typeof rootReducer>