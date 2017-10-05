import { combineReducers } from 'redux';
import TickerData from './TickerData';
import UserInfo from './UserInfo';

const rootReducer = combineReducers({
  tickerData: TickerData,
  userInfo: UserInfo,
});

export default rootReducer;
