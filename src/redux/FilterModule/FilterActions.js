import {
  MODIFY_CONFIG,
  CHANGE_VIEW,
  UPDATE_COUNTRIES,
  UPDATE_SORT_BY,
  CLEAR_FILTERS,
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
