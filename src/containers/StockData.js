import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getOptionData, getCompanyData, getCompanyStats,
  getNewsData, getChartData } from '../actions/index';
import Chart from '../components/Chart';
import { Tabs, Tab } from 'react-bootstrap';
import '../css/StockData.css';

import SummaryTab from '../components/SummaryTab';
import CompanyTab from '../components/CompanyTab';
import NewsTab from '../components/NewsTab';
import StatsTab from '../components/StatsTab';
import OptionsTab from '../components/OptionsTab';

class StockData extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.tickerData.index !== this.props.tickerData.index) {
      if (nextProps.userInfo) {
        const ticker = nextProps.userInfo.tickers[nextProps.tickerData.index];
        nextProps.getOptionData(ticker, null);
        nextProps.getCompanyData(ticker);
        nextProps.getCompanyStats(ticker);
        nextProps.getNewsData(ticker);
        nextProps.getChartData(ticker);
      }
    }
  }

  getNewOptionData = (date) => {
    const ticker = this.props.userInfo.tickers[this.props.tickerData.index];
    this.props.getOptionData(ticker, date);
  }

  render() {

    const { tickerData, userInfo } = this.props;

    return (
      <div className="col-md-7 full-height right-section-padding">
        <div className="section-container">

          <Tabs defaultActiveKey={1} id="stocks-info-tabs">

            <Tab eventKey={1} title="SUMMARY">
              <div className="hide-scroll-container-right">
                <div className="inner-container">
                  <SummaryTab
                    tickerInfo={ tickerData.tickerInfo[tickerData.index] } />
                  <Chart
                    chartData={ tickerData.chartData }
                    ticker={ userInfo.tickers[tickerData.index] }
                    isPositive={ tickerData.tickerInfo[tickerData.index] ?
                      tickerData.tickerInfo[tickerData.index].change : 0 } />
                </div>
              </div>
            </Tab>

            <Tab eventKey={2} title="STATISTICS">
              <div className="hide-scroll-container-right">
                <div className="inner-container">
                  <StatsTab
                    companyStats={ tickerData.companyStats }
                    tickerInfo={ tickerData.tickerInfo[tickerData.index] }/>
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

function mapStateToProps({tickerData, userInfo}) {
  return {
    tickerData,
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
