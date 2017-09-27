import { REMOVE_TICKER , ADD_TICKER, GET_USER_DATA, UPDATE_USER_DATA} from '../actions/index';

const INIT_STATE = {
  _id: 0,
  username: '',
  password: '',
  tickers: []
};

export default function(state = INIT_STATE, action) {

  switch(action.type) {
    case REMOVE_TICKER:
      return {
        ...state,
        tickers: state.tickers.filter((_, i) => i !== action.payload)
      };
    case ADD_TICKER:
      return {
        ...state,
        tickers: state.tickers.concat(action.payload)
      };
    case UPDATE_USER_DATA:
      return state;
    case GET_USER_DATA:
      return action.payload;
    default:
      return state;
  }

}
