import axios from 'axios';

export const FETCH_TICKER_DATA = 'FETCH_TICKER_DATA';
export const REMOVE_TICKER = 'REMOVE_TICKER';
export const ADD_TICKER = 'ADD_TICKER';
export const GET_USER_DATA = 'GET_USER_DATA';
export const UPDATE_USER_DATA = 'UPDATE_USER_DATA';
export const CHANGE_CURRENT_INDEX = 'CHANGE_CURRENT_INDEX';
export const GET_OPTION_DATA = 'GET_OPTION_DATA';
export const GET_COMPANY_DATA = 'GET_COMPANY_DATA';
export const GET_COMPANY_STATS = 'GET_COMPANY_STATS';
export const GET_NEWS_DATA = 'GET_NEWS_DATA';
export const GET_CHART_DATA = 'GET_CHART_DATA';

export const BASE_URL = 'http://stocks.thejoshuasimpson.com';

export function getChartData(ticker) {
  const url = `${BASE_URL}/api/stocks/chart/${ticker}`;
  const request = axios.get(url);
  return {
    type: GET_CHART_DATA,
    payload: request
  };
}

export function getNewsData(ticker) {
  const url = `${BASE_URL}/api/stocks/news/${ticker}`;
  const request = axios.get(url);
  return {
    type: GET_NEWS_DATA,
    payload: request
  };
}

export function getCompanyStats(ticker) {
  const url = `${BASE_URL}/api/stocks/stats/${ticker}`;
  const request = axios.get(url);
  return {
    type: GET_COMPANY_STATS,
    payload: request
  };
}

export function getCompanyData(ticker) {
  const url = `${BASE_URL}/api/stocks/company/${ticker}`;
  const request = axios.get(url);
  return {
    type: GET_COMPANY_DATA,
    payload: request
  };
}

export function getOptionData(ticker, date) {
  let url;
  if (date === null) {
    url = `${BASE_URL}/api/stocks/options/${ticker}`;
  } else {
    url = `${BASE_URL}/api/stocks/options/${ticker}?date=${date}`;
  }
  const request = axios.get(url);
  return {
    type: GET_OPTION_DATA,
    payload: request
  };
}

export function getTickerInfo(tickers) {
  const url = `${BASE_URL}/api/stocks/tickerinfo/${tickers}`;
  const request = axios.get(url);
  return {
    type: FETCH_TICKER_DATA,
    payload: request
  };
}

export function getUserData(user) {
  const url = `${BASE_URL}/api/users/${user}`;
  const request = axios.get(url);
  return (dispatch, getState) => {
    request.then((res) => {
      dispatch({type: GET_USER_DATA, payload: res.data[0]});
      dispatch(getTickerInfo(getState().userInfo.tickers.join(',')));
      dispatch(changeCurrentIndex(0));
    });
  };
}

export function updateUserData(user) {
  const url = `${BASE_URL}/api/users/${user._id}`;
  const request = axios.patch(url, {
    tickers: user.tickers
  });
  return {
    type: UPDATE_USER_DATA,
    payload: request
  };
}

export function removeTicker(index) {
  return (dispatch, getState) => {
    dispatch({type: REMOVE_TICKER, payload: index});
    dispatch(getTickerInfo(getState().userInfo.tickers.join(',')));
    dispatch(updateUserData(getState().userInfo));
  };
}

export function addTicker(ticker) {
  return (dispatch, getState) => {
    dispatch({type: ADD_TICKER, payload: ticker});
    dispatch(getTickerInfo(getState().userInfo.tickers.join(',')));
    dispatch(updateUserData(getState().userInfo));
  };
}

export function changeCurrentIndex(index) {
  return {
    type: CHANGE_CURRENT_INDEX,
    payload: index
  };
}
