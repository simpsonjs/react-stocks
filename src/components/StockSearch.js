import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
import debounce from 'lodash.debounce';
import { BASE_URL } from '../actions/types';

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <div>{suggestion.name + ' (' + suggestion.exchDisp + ') - ' + suggestion.typeDisp}</div>
);

class StockSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: []
    }
  }

  searchResults = debounce(ticker => {
    const url = `${BASE_URL}/api/stocks/${ticker}`;
    axios.get(url).then(res => {
      this.setState({suggestions: res.data.ResultSet.Result});
    }).catch(er => {
      console.log(er);
    });
  }, 300)

  onChange = (event, { newValue }) => {
    this.setState({ value: newValue }, () => {
      this.setState({suggestions: []});
      if (newValue.length > 0) {
        this.searchResults(newValue);
      }
    });
  }

  onSuggestionsFetchRequested = () => { }

  onSuggestionsClearRequested = () => { }

  onSuggestionSelected = (event, item) => {
    this.props.addTicker(item.suggestion.symbol);
    this.setState({value: ''});
  }

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Select a ticker...',
      value,
      onChange: this.onChange
    };

    return (
      <div className="StockSearch">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          onSuggestionSelected={this.onSuggestionSelected}
          focusInputOnSuggestionClick={false}
        />
      </div>
    );
  }

}

export default StockSearch;
