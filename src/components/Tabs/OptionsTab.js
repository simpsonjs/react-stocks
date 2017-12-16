import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import moment from 'moment';

const OptionsTab = ({ optionsData, getOptionData }) => {

  if (!optionsData.data) return null;
  if (!optionsData.data.options[0]) return null;

  function dropDownOnSelect(index) {
    getOptionData(optionsData.data.expirationDates[index]);
  }

  function dateFormat(date) {
    return moment.unix(date).format('MMM Do YYYY');
  }

  function mapItems(items) {
    return items.map((item) => {
      return (
        <tr key={item.contractSymbol} className={item.inTheMoney ? 'in-the-money': ''}>
          <td>{item.strike}</td>
          <td>{item.contractSymbol}</td>
          <td>{item.lastPrice.toFixed(2)}</td>
          <td>{item.change.toFixed(2)}</td>
          <td>{item.volume}</td>
          <td>{item.openInterest}</td>
          <td>{item.impliedVolatility.toFixed(2)}</td>
        </tr>
      );
    });
  }

  const { calls, puts, expirationDate } = optionsData.data.options[0];

  const dropDown = optionsData.data.expirationDates.map((item, index) => {
    return (
      <MenuItem eventKey={index} key={item}>{dateFormat(item)}</MenuItem>
    );
  });

  return (
    <div>

      <div className="options-header">
        <div className="in-the-money-div">
          In The Money
        </div>

        <div className="options-drop-down">
          <DropdownButton 
            bsStyle="default" 
            title="Select expiry date" 
            id="dropdown-1" 
            onSelect={(i) => dropDownOnSelect(i)}>
            {dropDown}
          </DropdownButton>
        </div>

      </div>

      <h3 className="optoins-header blue-header">Calls for {dateFormat(expirationDate)}</h3>
      <div className="col-md-12">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Strike</th>
              <th>Contract Name</th>
              <th>Last Price</th>
              <th>Change</th>
              <th>Volume</th>
              <th>Open Interest</th>
              <th>Implied Volatility</th>
            </tr>
          </thead>
          <tbody>
            {mapItems(calls)}
          </tbody>
        </table>
      </div>

      <h3 className="options-header blue-header">Puts for {dateFormat(expirationDate)}</h3>
      <div className="col-md-12">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Strike</th>
              <th>Contract Name</th>
              <th>Last Price</th>
              <th>Change</th>
              <th>Volume</th>
              <th>Open Interest</th>
              <th>Implied Volatility</th>
            </tr>
          </thead>
          <tbody>
            {mapItems(puts)}
          </tbody>
        </table>
      </div>

    </div>
  );

}

export default OptionsTab;
