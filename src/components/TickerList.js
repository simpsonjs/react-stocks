import React from 'react';

const StockList = ({ tickerInfo, removeTicker, refreshTickers, changeIndex }) => {
  if (!tickerInfo) return null;

  function onRemoveTicker(e, index) {
    e.stopPropagation();
    removeTicker(index);
  }

  function items() {
    return tickerInfo.map((item, index) => {
      return (
        <tr key={item.symbol} onClick={() => changeIndex(index)}>
          <td>
            {item.symbol.toUpperCase()}({item.exchange})
          </td>
          <td>{item.price}</td>
          <td>
            {item.dayLow} - {item.dayHigh}
          </td>
          <td className={item.change < 0 ? 'red-text' : 'green-text'}>
            {item.percentChange}
          </td>
          <td>
            <a onClick={e => onRemoveTicker(e, index)}>
              <i className="glyphicon glyphicon-remove" />
            </a>
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
          <th>
            <a onClick={() => refreshTickers()}>
              <i className="glyphicon glyphicon-refresh" />
            </a>
          </th>
        </tr>
      </thead>
      <tbody>{items()}</tbody>
    </table>
  );
};

export default StockList;
