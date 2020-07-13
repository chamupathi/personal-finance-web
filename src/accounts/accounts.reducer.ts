import { AccountsState, Account } from "./accounts.types";
import { AccountsActionTypes } from "./accounts.actions";



const getDummyMap = () => {
    const docs = new Map<string, Account>()
    const dummydoc = {
        "month_label": "06/2020",
        "account_id": 51,
        "name": "Bank account 1",
        "sum": 12250,
        "sum_prev_m": 11250,
        "vs": 0.08888888888888889,
        "prev_month_label": "05/2020",
        "transaction_types": [
            {
                "id": 1,
                "name": "Income",
                "sum": 2500,
                "account_id": 51
            },
            {
                "id": 3,
                "name": "Transfer",
                "sum": -1200,
                "account_id": 51
            },
            {
                "id": 2,
                "name": "Cost",
                "sum": -300,
                "account_id": 51
            }
        ],
        "transactions": [
            {
                "id": 16,
                "description": "Income transaction",
                "date": "2020-06-26",
                "amount": 2500,
                "trans_type_id": 1,
                "created_by": null,
                "account_id": 51
            },
            {
                "id": 17,
                "description": "Internal Transfer 3",
                "date": "2020-06-26",
                "amount": -600,
                "trans_type_id": 3,
                "created_by": null,
                "account_id": 51
            },
            {
                "id": 19,
                "description": "Internal Transfer 4",
                "date": "2020-06-26",
                "amount": -600,
                "trans_type_id": 3,
                "created_by": null,
                "account_id": 51
            },
            {
                "id": 21,
                "description": "Cost transaction",
                "date": "2020-06-26",
                "amount": -300,
                "trans_type_id": 2,
                "created_by": null,
                "account_id": 51
            }
        ]
    }
    docs.set('37', dummydoc)
    docs.set('38', dummydoc)
    docs.set('46', dummydoc)
    docs.set('50', dummydoc)
    docs.set('51', dummydoc)
    docs.set('52', dummydoc)
    docs.set('53', dummydoc)
    docs.set('54', dummydoc)

    return docs
}

const initialState: AccountsState = {
//   docs : new Map(), // TODO : remove this whe api integrate
    docs : getDummyMap(),
    transactionDisplayTypes : [
        {
            "value": 1,
            "displayValue": "Income"
        },
        {
            "value": 2,
            "displayValue": "Cost"
        },
        {
            "value": 3,
            "displayValue": "Internal Transfer"
        }
    ]
};

export function accountsReducer(
  state = initialState,
  action: AccountsActionTypes
): AccountsState {
  switch (action.type) {
    // case GET_RECORDS:
    //   return {
    //     records: [...state.records, ...action.payload],
    //   };
    default:
      return state;
  }
}

