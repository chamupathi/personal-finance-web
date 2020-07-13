const chartdata = {
  visualLabels: [
    "07/2020",
    "08/2020",
    "09/2020",
    "10/2020",
    "11/2020",
    "12/2020",
    "01/2021",
    "02/2021",
    "03/2021",
    "04/2021",
    "05/2021",
  ],
  datasets: [
    {
        fill: false,
        lineTension: 0.2,
        backgroundColor: 'rgba(75,192,192,0.4)',
        // borderColor: 'rgba(75,192,192,1)',
        borderColor: '#00C45B', //green color
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
      data: [
        10000,
        11000,
        12000,
        13000,
        14000,
        15000,
        16000,
        17000,
        18000,
        19000,
        20000,
      ],
      label: "Amount",
    },
  ],
};

export const getDummyChartData = () => {
  return {
    labels: [...chartdata.visualLabels],
    datasets: [...chartdata.datasets],
  };
};
