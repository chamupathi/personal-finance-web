import * as React from "react";
import { connect } from "react-redux";
import { RootState } from "../store";
import "./AddNewTransaction.css";

import Dropdown, { Option } from "react-dropdown";
import "react-dropdown/style.css";
import { routes } from "../routes";
import { access } from "fs";

interface IAddNewTransactionProps {
editMode? : boolean,
  match: {
    params: {
      id: string;
      mode: string;
      txnId? :string;
    };
  };
  history: {
    goBack: () => any | void;
  };
}

type Props = ReturnType<typeof mapStateToProps> & IAddNewTransactionProps;

const AddNewTransaction: React.FunctionComponent<Props> = (props) => {
  const id = props.match.params.id;
  const mode = props.match.params.mode;
  const acount = props.accounts.docs.get(id);

  const [transactionType, setTransactionType] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [date, setDate] = React.useState<string>("");
  const [amount, setAmount] = React.useState<number>(0);
  
  const editMode = mode === 'edit';

  const handleTransactionTypeChange = (arg: Option) => {
    setTransactionType(arg.value)
  }

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value)
  }

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value)
  }

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number.parseFloat(event.target.value))
  }

  const goback = () => {
    props.history.goBack();
  };

  const handleSave = () => {
    // TODO handle save
    goback()
  }

  React.useEffect(() => {
    // if edit mode populate data
    if(editMode){
        const transaction = acount?.transactions.find(txn => txn.id.toString() === props.match.params.txnId)
        
        if(transaction){
            setTransactionType(transaction?.trans_type_id.toString())
            setDescription(transaction.description)
            setDate(transaction.date)
            setAmount(transaction.amount)
        }
    }
    }, [])

  const options = props.transactionDisplayTypes.map(type => {
      return {
          value : type.value.toString(),
          label : type.displayValue
      }
  })

  if (acount)
    return (
      <div className="AddNewTransaction Account">
        {console.log("editMode", props.match.params.mode)}
        <h1 className="header-title">
          <span onClick={goback} className="back-button">{`<`}</span>
          {acount?.name}
        </h1>
        <h1 className="header-subtitle">{`${editMode ? 'Edit ' : 'Add a '}transaction`}</h1>

        <div className="input-label">Transaction Type</div>
        <Dropdown
          options={options}
          onChange={handleTransactionTypeChange}
          value={transactionType}
          placeholder="Select an option"
          className='dropdown'
        />

        <div className="input-label">Description</div>
        <input type="text" name="name" 
        value={description}
        onChange={handleDescriptionChange}
        />

        <div className="input-label">Date</div>
        <input type="date" name="name" 
        value={date}
        onChange={handleDateChange}
        />

        <div className="input-label">Amount</div>
        <input type="number" name="name" 
        value={amount}
        onChange={handleAmountChange}/>

        <div className="save-button" onClick={handleSave}>{editMode ? 'Save Changes' : 'Save'}</div>
      </div>
    );

  return <div>Loading</div>;
};

const mapStateToProps = (state: RootState) => {
  return {
    accounts: state.accounts,
    transactionDisplayTypes : state.accounts.transactionDisplayTypes,
  };
};

export default connect(mapStateToProps)(AddNewTransaction);
