import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTickerInfo, removeTicker, addTicker, getUserData, changeCurrentIndex } from '../actions/index';
import StockSearch from '../components/stocksearch';
import TickerList from '../components/tickerlist';
import '../css/stocklist.css';

class StockList extends Component {

  componentDidMount() {
    this.props.getUserData('jush');
  }

  refreshTickers = () => {
    this.props.getTickerInfo(this.props.userInfo.tickers.join(','));
  }

  changeIndex = (index) => {
    this.props.changeCurrentIndex(index);
  }

  removeTicker = (index) => {
    this.props.removeTicker(index);
    if (this.props.userInfo.tickers.length - 1 === index) {
      this.props.changeCurrentIndex(index - 1);
    }
    this.props.addNotification('Success!', `Successfully removed ticker: ${this.props.userInfo.tickers[index]}`, 'success');
  }

  addTicker = (ticker) => {
    if (this.props.userInfo.tickers.indexOf(ticker) !== -1) {
      this.props.addNotification('Error!', `Ticker has already been added: ${ticker}`, 'error');
      return false;
    }
    this.props.addTicker(ticker);
    this.props.addNotification('Success!', `Successfully added ticker: ${ticker}`, 'success');
  }

  render() {
    return (
      <div className="col-md-5 full-height left-section-padding">
        <div className="section-container">

        <StockSearch
          addTicker={this.addTicker} />

        <div className="hide-scroll-container-left">
          <div className="inner-container">

            <TickerList
              tickerInfo={this.props.tickerData.tickerInfo}
              removeTicker={this.removeTicker}
              refreshTickers={this.refreshTickers}
              changeIndex={this.changeIndex} />

          </div>
        </div>

        </div>
      </div>
    );
  }
}

function mapStateToProps ({ userInfo, tickerData, currentTicker }) {
  return {
    userInfo,
    tickerData,
    currentTicker
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getTickerInfo,
    removeTicker,
    addTicker,
    getUserData,
    changeCurrentIndex,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StockList);
