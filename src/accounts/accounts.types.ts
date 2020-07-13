// @author Chamupathi Mendis.
// email chamupathi2008@gmail.com

export interface Transaction {
    id: string | number,
    description:string,
    date:string,
    amount: number,
    trans_type_id: number,
    created_by?: string | void | null,
    account_id: string | number
}

export interface TransactionType {
    id: number,
    name: string,
    sum: number,
    account_id: number,
}

export interface Account {
    month_label: string,
    account_id:string | number,
    name: string;
    sum: number;
    sum_prev_m: number;
    vs: number;
    prev_month_label: string;
    transaction_types: TransactionType[]
    transactions: Transaction[]
  }

  export interface TransactionDisplayType {
    value: number,
    displayValue : string,
  }
  
  export interface AccountsState {
    docs : Map<string,Account>,
    transactionDisplayTypes : TransactionDisplayType[]
}
  