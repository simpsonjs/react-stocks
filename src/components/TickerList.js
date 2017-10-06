import React from 'react';
import { isPositive } from '../helpers/index';

const StockList = ({tickerInfo, removeTicker, refreshTickers, changeIndex}) => {

  if (!tickerInfo) return null;

  function items () {
    return tickerInfo.map((item, index) => {
      return (
        <tr key={item.symbol} onClick={() => changeIndex(index)}>
          <td>{item.symbol.toUpperCase()}({item.exchange})</td>
          <td>{item.price}</td>
          <td>{item.dayLow} - {item.dayHigh}</td>
          <td className={isPositive(item.change) ? "green-text" : "red-text" }>{item.percentChange}</td>
          <td><a onClick={(e) => {
              e.stopPropagation();
              removeTicker(index);
            }}><i className="glyphicon glyphicon-remove"></i></a>
          </td>
        </tr>
      );
    });
  }

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Ticker</th>
          <th>Price</th>
          <th>Day Range</th>
          <th>Change</th>
          <th><a onClick={() => refreshTickers()}><i className="glyphicon glyphicon-refresh"></i></a></th>
        </tr>
      </thead>
      <tbody>
        {items()}
      </tbody>
    </table>
  );
}

export default StockList;
