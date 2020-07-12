import { RecordsState, } from "./records.types";
import { RecordActionTypes } from "./records.actions";
import record from "./record";

const initialState: RecordsState = {
  records: [
    { name:'test name'}
  ],
};

export function recordsReducer(
  state = initialState,
  action: RecordActionTypes
): RecordsState {
  switch (action.type) {
    // case GET_RECORDS:
    //   return {
    //     records: [...state.records, ...action.payload],
    //   };
    default:
      return state;
  }
}
