// @author Chamupathi Mendis.
// email chamupathi2008@gmail.com

import { Record } from "./records.types"
import { GET_RECORDS } from "../actionTypes"


interface getRecordsAction {
  type: typeof GET_RECORDS
  payload: Record[]
}

export type RecordActionTypes = getRecordsAction

