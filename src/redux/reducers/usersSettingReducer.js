// Initial State
import {SET_USER_SETTING, RESET_USER_SETTING} from '../const'
const initialState = {
    setting: {},
  };
  const usersSettingReducer = (state = initialState, action) => {
    console.log("Reducer Call ", action.type, action.value)
    switch (action.type) {
      case SET_USER_SETTING: {
        return {
          ...state,
          setting: action.value,
        };
      }
      case RESET_USER_SETTING: {
        return {
          ...state,
          setting: {},
        };
      }
      default: {
        return {...state};
      }
    }
  };
  export default usersSettingReducer;