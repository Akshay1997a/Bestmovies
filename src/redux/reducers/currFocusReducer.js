// Initial State
import {SET_CURR_FOCUS, RESET_CURR_FOCUS} from '../const'
const initialState = {
    focus: -1,
  };
  const counterReducer = (state = initialState, action) => {
    console.log("Reducer Call ", action.type, action.value)
    switch (action.type) {
      case SET_CURR_FOCUS: {
        return {
          ...state,
          focus: action.value,
        };
      }
      case RESET_CURR_FOCUS: {
        return {
          ...state,
          focus: -1,
        };
      }
      default: {
        return {...state};
      }
    }
  };
  export default counterReducer;