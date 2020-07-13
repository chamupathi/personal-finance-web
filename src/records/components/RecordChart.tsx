// @author Chamupathi Mendis.
// email chamupathi2008@gmail.com

import * as React from 'react';
import './RecordChart.css'
import {Line} from 'react-chartjs-2';

export interface IRecordChartProps {
  data : {
    labels: string[],
    datasets: any[],
  }
}

export function RecordChart (props: IRecordChartProps) {
  return (
    <div className='RecordChart'>
      <Line data={props.data} />
    </div>
  );
}

