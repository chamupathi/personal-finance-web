import { RecordsState } from "./records.types";
import { RecordActionTypes } from "./records.actions";
import record from "./record";

const initialState: RecordsState = {
  total: {
    sum: -35323,
    sum_prev_m: -37480,
    vs: -0.05755069370330843,
    prev_month_label: "05/2020",
  },
  records: [
    {
      id: 1,
      name: "Money",
      sum: 12251,
      sum_prev_m: 11250,
      vs: 0.08897777777777778,
      prev_month_label: "05/2020",
      accounts: [
        {
          id: 50,
          name: "Bank account 2",
          sum: 1,
          sum_prev_m: null,
          vs: null,
          prev_month_label: "05/2020",
        },
        {
          id: 51,
          name: "Bank account 1",
          sum: 12250,
          sum_prev_m: 11250,
          vs: 0.08888888888888889,
          prev_month_label: "05/2020",
        },
      ],
    },
    {
      id: 2,
      name: "Investment",
      sum: 1325,
      sum_prev_m: 725,
      vs: 0.8275862068965517,
      prev_month_label: "05/2020",
      accounts: [
        {
          id: 52,
          name: "Investment 1",
          sum: 1325,
          sum_prev_m: 725,
          vs: 0.8275862068965517,
          prev_month_label: "05/2020",
        },
        {
          id: 37,
          name: "Investment 2",
          sum: null,
          sum_prev_m: null,
          vs: null,
          prev_month_label: null,
        },
      ],
    },
    {
      id: 3,
      name: "Debt",
      sum: -49000,
      sum_prev_m: -49550,
      vs: -0.011099899091826439,
      prev_month_label: "05/2020",
      accounts: [
        {
          id: 53,
          name: "Mortgage",
          sum: -49000,
          sum_prev_m: -49550,
          vs: -0.011099899091826439,
          prev_month_label: "05/2020",
        },
        {
          id: 46,
          name: "Debt",
          sum: -2000,
          sum_prev_m: null,
          vs: null,
          prev_month_label: null,
        },
        {
          id: 38,
          name: "Credit Card",
          sum: null,
          sum_prev_m: null,
          vs: null,
          prev_month_label: null,
        },
      ],
    },
    {
      id: 4,
      name: "Other",
      sum: 101,
      sum_prev_m: 95,
      vs: 0.06315789473684211,
      prev_month_label: "05/2020",
      accounts: [
        {
          id: 54,
          name: "Artwork",
          sum: 501,
          sum_prev_m: 95,
          vs: 0.06315789473684211,
          prev_month_label: "05/2020",
        },
      ],
    },
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
