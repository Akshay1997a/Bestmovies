import {
  MODIFY_CONFIG,
  CHANGE_VIEW,
  VIEW_STYLE,
  SORT_BY_FILTER,
  UPDATE_COUNTRIES,
  UPDATE_SORT_BY,
  CLEAR_FILTERS,
} from './FilterTypes';

export const FilterInitialState = {
  viewStyle: VIEW_STYLE.GRID_VIEW,
  sortBy: SORT_BY_FILTER.ALL,
  providers: [],
  year: [],
  countries: [],
  languages: [],
};

export default function FilterReducer(state = FilterInitialState, action) {
  console.log(action);
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

    case UPDATE_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };

    case UPDATE_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };

    case CLEAR_FILTERS:
      return FilterInitialState;

    default:
      return state;
  }
}
