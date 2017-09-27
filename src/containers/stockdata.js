import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getOptionData, getCompanyData, getCompanyStats,
  getNewsData, getChartData } from '../actions/index';
import Chart from '../components/chart';
import { Tabs, Tab } from 'react-bootstrap';
import '../css/stockdata.css';

import SummaryTab from '../components/summarytab';
import CompanyTab from '../components/companytab';
import NewsTab from '../components/newstab';
import StatsTab from '../components/statstab';
import OptionsTab from '../components/optionstab';

class StockData extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentTicker.index !== this.props.currentTicker.index) {
      if (nextProps.userInfo) {
        const ticker = nextProps.userInfo.tickers[nextProps.currentTicker.index];
        nextProps.getOptionData(ticker, null);
        nextProps.getCompanyData(ticker);
        nextProps.getCompanyStats(ticker);
        nextProps.getNewsData(ticker);
        nextProps.getChartData(ticker);
      }
    }
  }

  getNewOptionData = (date) => {
    const ticker = this.props.userInfo.tickers[this.props.currentTicker.index];
    this.props.getOptionData(ticker, date);
  }

  render() {

    const { tickerData, currentTicker, userInfo } = this.props;

    return (
      <div className="col-md-7 full-height right-section-padding">
        <div className="section-container">

          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">

            <Tab eventKey={1} title="SUMMARY">
              <div className="hide-scroll-container-right">
                <div className="inner-container">
                  <SummaryTab
                    tickerInfo={ tickerData.tickerInfo[currentTicker.index] } />
                  <Chart
                    chartData={ tickerData.chartData }
                    ticker={ userInfo.tickers[currentTicker.index] }
                    isPositive={ tickerData.tickerInfo[currentTicker.index] ?
                      tickerData.tickerInfo[currentTicker.index].change : 0 } />
                </div>
              </div>
            </Tab>

            <Tab eventKey={2} title="STATISTICS">
              <div className="hide-scroll-container-right">
                <div className="inner-container">
                  <StatsTab
                    companyStats={ tickerData.companyStats }
                    tickerInfo={ tickerData.tickerInfo[currentTicker.index] }/>
                </div>
              </div>
            </Tab>

            <Tab eventKey={3} title="COMPANY">
              <div className="hide-scroll-container-right">
                <div className="inner-container">
                  <CompanyTab
                    companyInfo={ tickerData.companyInfo } />
                </div>
              </div>
            </Tab>

            <Tab eventKey={4} title="OPTIONS">
              <div className="hide-scroll-container-right">
                <div className="inner-container">
                  <OptionsTab
                    optionsData={ tickerData.optionsInfo }
                    getOptionData={ this.getNewOptionData } />
                </div>
              </div>
            </Tab>

            <Tab eventKey={5} title="NEWS">
              <div className="hide-scroll-container-right">
                <div className="inner-container">
                  <NewsTab
                    newsInfo={ tickerData.newsInfo } />
                </div>
              </div>
            </Tab>

          </Tabs>

        </div>
      </div>
    );
  }
}

function mapStateToProps({tickerData, currentTicker, userInfo}) {
  return {
    tickerData,
    currentTicker,
    userInfo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getOptionData,
    getCompanyData,
    getCompanyStats,
    getNewsData,
    getChartData
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StockData);
