import * as actionTypes from '../util/actionType';

export const getCameraRoll = (value) => ({
  type: actionTypes.GET_CAMERAROLL,
  payload: {
    images: value
  }
});
