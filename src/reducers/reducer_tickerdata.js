import { FETCH_TICKER_DATA, GET_OPTION_DATA, GET_COMPANY_DATA,
  GET_COMPANY_STATS, GET_NEWS_DATA, GET_CHART_DATA } from '../actions/index';

const INIT_STATE = {
  tickerInfo: [],
  optionsInfo: [],
  companyInfo: [],
  companyStats: [],
  newsInfo: [],
  chartData: []
};

export default function(state = INIT_STATE, action) {

  switch(action.type) {
    case FETCH_TICKER_DATA:
      return {
        ...state,
        tickerInfo: action.payload.data.items
      };
    case GET_OPTION_DATA:
      return {
        ...state,
        optionsInfo: action.payload
      };
    case GET_COMPANY_DATA:
      return {
        ...state,
        companyInfo: action.payload
      }
    case GET_COMPANY_STATS:
      return {
        ...state,
        companyStats: action.payload
      }
    case GET_NEWS_DATA:
      return {
        ...state,
        newsInfo: action.payload
      }
    case GET_CHART_DATA:
      return {
        ...state,
        chartData: action.payload
      }
    default:
      return state;
  }

}
