import {
  MODIFY_CONFIG,
  CHANGE_VIEW,
  UPDATE_COUNTRIES,
  UPDATE_SORT_BY,
  CLEAR_FILTERS,
  UPDATE_PROVIDERS,
  UPDATE_YEAR,
  UPDATE_LANGUAGES,
  UPDATE_WATCHED,
  UPDATE_PRIVIOUSLY_BROWSED,
  UPDATE_GENERES,
  UPDATE_AGE_RATING,
  UPDATE_PRICING,
} from './FilterTypes';

export function modifyConfig(data) {
  return {
    type: MODIFY_CONFIG,
    payload: data,
  };
}

export function changeView(view) {
  return {
    type: CHANGE_VIEW,
    payload: view,
  };
}

export function updateCountriesAction(countries) {
  return {
    type: UPDATE_COUNTRIES,
    payload: countries,
  };
}

export function updateSortByAction(val) {
  return {
    type: UPDATE_SORT_BY,
    payload: val,
  };
}

export function clearFiltersAction() {
  return {
    type: CLEAR_FILTERS,
  };
}

export function updateProviders(data) {
  return {
    type: UPDATE_PROVIDERS,
    payload: data,
  };
}

export function updateYear({type, from = null, to = null}) {
  return {
    type: UPDATE_YEAR,
    payload: {type, from, to},
  };
}

export function updateLanguages(data) {
  return {
    type: UPDATE_LANGUAGES,
    payload: data,
  };
}

export function updateWatchedValue(data) {
  return {
    type: UPDATE_WATCHED,
    payload: data,
  };
}

export function updatePreviouslyWatchedValue(data) {
  return {
    type: UPDATE_PRIVIOUSLY_BROWSED,
    payload: data,
  };
}

export function updateGenres(data) {
  return {
    type: UPDATE_GENERES,
    payload: data,
  };
}

export function updateAgeRating(data) {
  return {
    type: UPDATE_AGE_RATING,
    payload: data,
  };
}

export function updatePricing(data) {
  return {
    type: UPDATE_PRICING,
    payload: data,
  };
}
