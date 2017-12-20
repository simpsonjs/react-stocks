import { combineReducers } from 'redux';
import TickerData from './ticker';
import UserInfo from './user';

const rootReducer = combineReducers({
  tickerData: TickerData,
  userInfo: UserInfo
});

export default rootReducer;
