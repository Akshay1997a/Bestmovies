import {MODIFY_CONFIG, CHANGE_VIEW} from './FilterTypes';

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
