import {
  MODIFY_CONFIG,
  CHANGE_VIEW,
  VIEW_STYLE,
  SORT_BY_FILTER,
  UPDATE_COUNTRIES,
  UPDATE_SORT_BY,
  CLEAR_FILTERS,
  UPDATE_PROVIDERS,
  UPDATE_YEAR,
  YEARS_TYPE,
  UPDATE_LANGUAGES,
  UPDATE_WATCHED,
  UPDATE_PRIVIOUSLY_BROWSED,
} from './FilterTypes';

export const FilterInitialState = {
  viewStyle: VIEW_STYLE.GRID_VIEW,
  sortBy: SORT_BY_FILTER.RATING,
  providerConfig: {
    selectedProviders: [],
    freeStreamingServiceWithAd: false,
    rentStreamingService: false,
    localMovieTheaters: false,
  },
  year: {
    type: YEARS_TYPE.ANY,
    from: null,
    to: null,
  },
  countries: [],
  languages: [],
  watched: false,
  previouslyBrowsed: false,
};

export default function FilterReducer(state = FilterInitialState, action) {
  console.log(action);
  switch (action.type) {
    case MODIFY_CONFIG:
      return {
        ...state,
        ...action.payload,
      };

    case UPDATE_WATCHED:
      return {
        ...state,
        watched: action.payload,
      };

    case UPDATE_PRIVIOUSLY_BROWSED:
      return {
        ...state,
        previouslyBrowsed: action.payload,
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

    case UPDATE_PROVIDERS:
      return {
        ...state,
        providerConfig: action.payload,
      };

    case UPDATE_YEAR:
      return {
        ...state,
        year: action.payload,
      };

    case UPDATE_LANGUAGES:
      return {
        ...state,
        languages: action.payload,
      };

    default:
      return state;
  }
}
