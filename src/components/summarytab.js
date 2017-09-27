import React from 'react';
import { isPositive } from '../helpers/index';

const SummaryTab = ({ tickerInfo }) => {

  if (!tickerInfo) return null;

  return (
    <div>

      <div className="section-heading">
        <h3>{tickerInfo.name}</h3>

        <h3>{tickerInfo.price} <span className={isPositive(tickerInfo.change) ? "green-text" : "red-text" }>
          {tickerInfo.change} ({tickerInfo.percentChange})</span></h3>
      </div>

      <div className="col-md-4">
        <table className="table">
          <tbody>
            <tr>
              <td className="leftPull">Market Price:</td>
              <td className="rightPull">{tickerInfo.price}</td>
            </tr>
            <tr>
              <td className="leftPull">Last Close:</td>
              <td className="rightPull">{tickerInfo.previousClose}</td>
            </tr>
            <tr>
              <td className="leftPull">Open:</td>
              <td className="rightPull">{tickerInfo.open}</td>
            </tr>
            <tr>
              <td className="leftPull">Bid:</td>
              <td className="rightPull">{tickerInfo.bid}</td>
            </tr>
            <tr>
              <td className="leftPull">Ask:</td>
              <td className="rightPull">{tickerInfo.ask}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="col-md-4">
        <table className="table">
          <tbody>
            <tr>
              <td className="leftPull">Day High:</td>
              <td className="rightPull">{tickerInfo.dayHigh}</td>
            </tr>
            <tr>
              <td className="leftPull">Day Low:</td>
              <td className="rightPull">{tickerInfo.dayLow}</td>
            </tr>
            <tr>
              <td className="leftPull">EPS:</td>
              <td className="rightPull">{tickerInfo.eps}</td>
            </tr>
            <tr>
              <td className="leftPull">Volume:</td>
              <td className="rightPull">{tickerInfo.volume}</td>
            </tr>
            <tr>
              <td className="leftPull">Avg Volume:</td>
              <td className="rightPull">{tickerInfo.avgVolume}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="col-md-4">
        <table className="table">
          <tbody>
            <tr>
              <td className="leftPull">52wk High:</td>
              <td className="rightPull">{tickerInfo.yearHigh}</td>
            </tr>
            <tr>
              <td className="leftPull">52wk Low:</td>
              <td className="rightPull">{tickerInfo.yearLow}</td>
            </tr>
            <tr>
              <td className="leftPull">Mrkt Cap:</td>
              <td className="rightPull">{tickerInfo.marketCap}</td>
            </tr>
            <tr>
              <td className="leftPull">Div/Yield:</td>
              <td className="rightPull">{tickerInfo.dividendYield}</td>
            </tr>
            <tr>
              <td className="leftPull">P/E:</td>
              <td className="rightPull">{tickerInfo.PERatio}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default SummaryTab;
