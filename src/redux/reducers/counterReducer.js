// Initial State
import {SET_COUNTER, INCREASE_COUNTER, DECREASE_COUNTER} from '../const'
const initialState = {
    counter: 0,
  };
  // Redux: Counter Reducer
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case INCREASE_COUNTER: {
        return {
          ...state,
          counter: state.counter + action.value,
        };
      }
      case DECREASE_COUNTER: {
        return {
          ...state,
          counter: state.counter - action.value,
        };
      }
      case SET_COUNTER: {
        return {
          ...state,
          counter: action.value,
        };
      }
      default: {
        return {...state};
      }
    }
  };
  // Exports
  export default counterReducer;