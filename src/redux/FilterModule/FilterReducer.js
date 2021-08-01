import {MODIFY_CONFIG, CHANGE_VIEW} from './FilterTypes';

export const VIEW_STYLE = {
  FULL_VIEW: 'FULL_VIEW',
  GRID_VIEW: 'GRID_VIEW',
};

const initialState = {
  viewStyle: VIEW_STYLE.GRID_VIEW,
};

export default function FilterReducer(state = initialState, action) {
  switch (action.type) {
    case MODIFY_CONFIG:
      return {
        ...state,
        ...action.payload,
      };

    case CHANGE_VIEW:
      return {
        ...state,
        viewStyle: action.payload,
      };

    default:
      return state;
  }
}
