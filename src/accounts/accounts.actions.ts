// @author Chamupathi Mendis.
// email chamupathi2008@gmail.com

import { GET_ACCOUNTS } from "../actionTypes"
import { Account } from "./accounts.types"


interface getAccountsAction {
  type: typeof GET_ACCOUNTS
  payload: Account[]
}

export type AccountsActionTypes = getAccountsAction

