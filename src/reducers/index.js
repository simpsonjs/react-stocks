import { combineReducers } from 'redux';
import TickerData from './reducer_tickerdata';
import UserInfo from './reducer_userinfo';
import CurrentTicker from './reducer_currentticker';

const rootReducer = combineReducers({
  tickerData: TickerData,
  userInfo: UserInfo,
  currentTicker: CurrentTicker
});

export default rootReducer;
