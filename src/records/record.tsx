// @author Chamupathi Mendis.
// email chamupathi2008@gmail.com

import * as React from 'react';
import { connect } from 'react-redux'
import { RootState } from '../store';

interface IRecordProps {
}

type Props = ReturnType<typeof mapState2Props> & IRecordProps;

const Record: React.FunctionComponent<Props> = (props) => {
  return <div>Record {props.records.records[0].name}</div>;
};



const mapState2Props = (state: RootState) => {
  return {
    records : state.records
  };
}

export default connect(mapState2Props)(Record);
