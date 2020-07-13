import * as React from 'react';
import { connect } from 'react-redux'
import { RootState } from '../store';
import './Records.css';
import RecortListItem from './components/recort-list-item';
import { RecordChart } from './components/RecordChart';
import { AccountSummary } from './components/AccountSummary/AccountSummary';
import { getDummyChartData } from './getDummyChartData';

interface IRecordsProps {
}

type Props = ReturnType<typeof mapStateToProps> & IRecordsProps;

const Records: React.FunctionComponent<Props> = (props) => {
  return (
    <div className='Records'>
      <h1 className="header-title">Records</h1>
      <RecordChart data={ getDummyChartData() }/>
      <AccountSummary {...props.total} description="In total" />

      <h2 className="header-title">Your finance</h2>
      {
        props.records.map((record) => <RecortListItem record={record} key={record.id}/>)
      }
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    records : state.records.records,
    total : state.records.total,
  };
}

export default connect(mapStateToProps)(Records);