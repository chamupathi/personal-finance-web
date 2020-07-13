// @author Chamupathi Mendis.
// email chamupathi2008@gmail.com

import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "../../store";
import "./RecordListItem.css";
import { AccountSummary } from "./AccountSummary/AccountSummary";
import { Record } from "../records.types";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

interface IRecordListItemProps {
  record: Record;
}

type Props = ReturnType<typeof mapStateToProps> & IRecordListItemProps;

const RecordListItem: React.FunctionComponent<Props> = (props) => {

  const [open, setOpen] = React.useState<boolean>(false);
  
  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className="RecordListItem">
      <AccountSummary
        {...props.record}
        description={`${props.record.name} total`}
        onOpenToggle={toggleOpen}
        open={open}
      />
      {
        open && props.record.accounts && props.record.accounts.map((account) => <Link 
        to={`${routes.records}/${account.id}`} 
        key={account.id}>
          <AccountSummary 
        {...account} 
        secondary={true}
        description = {account.name}
        />
        </Link>
        )
      }
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    records: state.records.records,
  };
};

export default connect(mapStateToProps)(RecordListItem);
