import immutable from '../models/createPinImmu';
import * as actionTypes from '../util/actionType';

export default (state = new immutable(), action) => {
  switch (action.type) {
    case actionTypes.SET_MY_LOCATION:
      console.log('action');
      return state
      .set('lat', action.payload.lat)
      .set('lng', action.payload.lng)
      ;

    default:
      return state;
  }
}
