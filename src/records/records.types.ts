export interface Record {
  id: number;
  name: string;
  sum: number;
  sum_prev_m: number;
  vs: number;
  prev_month_label: string;
  accounts: any[];
}

export interface RecordsState {
  total: {
    sum: number;
    sum_prev_m: number;
    vs: number;
    prev_month_label: string;
  };
  records: Record[];
}
