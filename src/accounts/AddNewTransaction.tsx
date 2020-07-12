import * as React from 'react';
import { connect } from 'react-redux'
import { RootState } from '../store';
import './AddNewTransaction.css';

interface IAddNewTransactionProps {
    match: {
        params: {
          id: string;
        };
      };
      history: {
        goBack: () => any | void;
      };
}

type Props = ReturnType<typeof mapStateToProps> & IAddNewTransactionProps;

const AddNewTransaction: React.FunctionComponent<Props> = (props) => {
    const id = props.match.params.id;
    const acount = props.accounts.docs.get(id);
  
    const goback = () => {
      props.history.goBack();
    };
  
    if (acount)
      return (
        <div className="AddNewTransaction Account">
          {console.log("props", props)}
          <h1 className="header-title">
            <span onClick={goback} className="back-button">{`<`}</span>
            {acount?.name}
          </h1>
          <h2 className="header-subtitle">Add a transaction</h2>

        </div>
      );
  
    return <div>Loading</div>;
};

const mapStateToProps = (state: RootState) => {
    return {
        accounts: state.accounts,
    };
}

export default connect(mapStateToProps)(AddNewTransaction);