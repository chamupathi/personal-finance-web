import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "../store";
import "./Account.css";
import "./transaction-table.css";

import { RecordChart } from "../records/components/RecordChart";
import { Account } from "./accounts.types";
import { AccountSummary } from "../records/components/AccountSummary/AccountSummary";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { getDummyChartData } from "../records/getDummyChartData";
import { currency } from "../constants";

interface IAccountPageProps {
  match: {
    params: {
      id: string;
    };
  };
  history: {
    goBack: () => any | void;
  };
}

type Props = ReturnType<typeof mapStateToProps> & IAccountPageProps;

const AccountPage: React.FunctionComponent<Props> = (props) => {
  const id = props.match.params.id;
  const acount = props.accounts.docs.get(id);

  const goback = () => {
    props.history.goBack();
  };

  if (acount)
    return (
      <div className="Account">
        {console.log("props", props)}
        <h1 className="header-title">
          <span onClick={goback} className="back-button">{`<`}</span>
          {acount?.name}
        </h1>
        <RecordChart data={getDummyChartData()}/>
        <AccountSummary {...acount} description="In total" />

        <h2 className="header-title">Transactions</h2>

        <div className="transaction-summmary">
          <div className="month-label">{acount.month_label}</div>

          {!Number.isNaN(acount.vs) && acount.vs !== null && (
            <div
              className={`transaction-percentage ${
                acount.vs > 0 ? "pos" : "neg"
              }`}
            >
              ({acount.vs.toFixed(2)}%)
            </div>
          )}

          <div className="month-sum">{acount.sum}{currency}</div>
        </div>

        {acount.transaction_types.map((type) => (
          <div key={type.id} className="transaction-type">
            <div className="name">{type.name}</div>
            <div className={`sum ${type.sum > 0 ? "pos" : "neg"}`}>
              {type.sum}{currency}
            </div>
          </div>
        ))}

        <div className="transaction-table">
          <div className="header">
            <div className="date">Date</div>
            <div className="description">Description</div>
            <div className="type">type</div>
            <div className="amount">Amount</div>
          </div>

          {acount.transactions.map((transaction) => (
            <Link
              to={`${routes.records}/${id}${routes.edit}/${transaction.id}`}
              key={transaction.id}
              style={{ textDecoration: "none" }}
            >
              <div className="transaction-data">
                <div className="date">{transaction.date}</div>
                <div className="description">{transaction.description}</div>
                <div className="type">{transaction.trans_type_id}</div>
                <div className="amount">{transaction.amount}{currency}</div>
              </div>
            </Link>
          ))}
        </div>
        <Link
          to={`${routes.records}/${id}${routes.add}`}
          style={{ textDecoration: "none" }}
        >
          <div className="plus">+</div>
        </Link>
      </div>
    );

  return <div>Loading</div>;
};

const mapStateToProps = (state: RootState) => {
  return {
    accounts: state.accounts,
  };
};

export default connect(mapStateToProps)(AccountPage);
