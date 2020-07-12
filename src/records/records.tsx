import * as React from 'react';
import { connect } from 'react-redux'
import { RootState } from '../store';

export interface IRecordsProps {
}

class Records extends React.Component<IRecordsProps> {
  public render() {
    return (
      <div>
        records
      </div>
    );
  }
}

const mapState2Props = (state:RootState) => {
  return {
    records : state.records
  };
}

export default connect(mapState2Props)(Records);
