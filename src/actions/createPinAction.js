import * as actionTypes from '../util/actionType';

export const setMyLocation = (value) => ({
  type: actionTypes.SET_MY_LOCATION,
  payload: {
    lat: value.latitude,
    lng: value.longitude
  }
});
