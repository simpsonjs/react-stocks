import React from 'react';
import ReactHighStock from 'react-highcharts/ReactHighstock.src';

const Chart = ({ chartData, ticker, isPositive }) => {
  if (!chartData.data) {
    return null;
  }

  function getColor() {
    if (isPositive >= 0) return '#2ecc71';
    else return '#e67e22';
  }

  const config = {
    chart: {
      backgroundColor: 'transparent',
      type: 'line',
      height: '400px'
    },
    credits: {
      enabled: false
    },
    navigator: {
      enabled: true,
      series: {
        color: getColor()
      }
    },
    scrollbar: {
      barBackgroundColor: 'gray',
      barBorderRadius: 7,
      barBorderWidth: 0,
      buttonBackgroundColor: 'gray',
      buttonBorderWidth: 0,
      buttonBorderRadius: 7,
      trackBackgroundColor: 'none',
      trackBorderWidth: 1,
      trackBorderRadius: 8,
      trackBorderColor: '#CCC'
    },
    plotOptions: {
      categories: {
        turboThreshold: 50000
      },
      series: {
        turboThreshold: 50000
      }
    },
    series: [
      {
        animation: true,
        color: getColor(),
        name: ticker,
        data: chartData.data,
        tooltip: {
          valueDecimals: 2
        }
      }
    ]
  };

  return <ReactHighStock config={config} />;
};

export default Chart;
