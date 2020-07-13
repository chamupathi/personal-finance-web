import * as React from "react";
import "./AccountSummary.css";
import { currency } from "../../../constants";

export interface IAccountSummaryProps {
  sum: number;
  sum_prev_m: number;
  vs: number;
  prev_month_label: string;
  description: string;
  onOpenToggle?: () => any | undefined;
  open?: boolean;
  secondary?: boolean;
}

export function AccountSummary(props: IAccountSummaryProps) {
  return (
    <div
      className={`AccountSummary ${props.secondary ? "secondary" : ""} ${
        props.open ? "open" : ""
      }`}
    >
      <div
        className="data"
        onClick={props.onOpenToggle ? props.onOpenToggle : () => null}
      >
        <div className="wide-row top">
          {!Number.isNaN(props.sum) && props.sum !== null && (
            <div className="amount">
              {props.sum.toLocaleString()}
              {currency}
            </div>
          )}

          {!Number.isNaN(props.vs) && props.vs !== null && (
            <div className={`percentage ${props.vs > 0 ? "pos" : "neg"}`}>
              {props.vs.toFixed(2)}%{props.secondary}
            </div>
          )}
        </div>

        <div className="wide-row bottom">
          <div className="acc_type">{props.description}</div>
          <div className="from_dec">From {props.prev_month_label}</div>
        </div>
      </div>

      {props.onOpenToggle && (
        <div
          className={`expantion-button ${props.open ? "open" : "closed"}`}
          onClick={props.onOpenToggle}
        >
          ^
        </div>
      )}
    </div>
  );
}
