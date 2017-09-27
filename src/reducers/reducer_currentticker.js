import { CHANGE_CURRENT_INDEX } from '../actions/index';

const INIT_STATE = {
  index: null
};

export default function(state = INIT_STATE, action) {

  switch(action.type) {
    case CHANGE_CURRENT_INDEX:
      return {
        ...state,
        index: action.payload
      };
    default:
      return state;
  }

}
