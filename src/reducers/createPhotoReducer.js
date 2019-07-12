import immutable from '../models/createPhotoImmu';
import * as actionTypes from '../util/actionType';

export default (state = new immutable(), action) => {
  switch (action.type) {
    case actionTypes.GET_CAMERAROLL:
      return state
        .set('images', action.payload.images);

    default:
      return state;
  }
}
