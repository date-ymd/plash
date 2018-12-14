import immutable from '../models/homeImmu';
import { Platform } from 'react-native';
import * as actionTypes from '../util/actionType';

export default (state = new immutable(), action) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      if(action.payload) {
        return state
          .set('isModal', action.payload)
          .set('showImage', action.marker.img)
          .set('showLat', action.marker.latitude)
          .set('showLong', action.marker.longitude)
          // .set('mapHeight', {height:'45%'});
      } else {
        return state
          .set('isModal', action.payload)
          // .set('mapHeight', {height:'90%'});
      }

    case 'changeLayout' :
      if (action.payload == 'open') {
        return state
          .set('imgHeight', {height:'45%'})
          .set('mapHeight', {height:'45%',flex:1})
          .set('imgCloseStyle', {opacity:1});
      } else {
        return state
          .set('imgHeight', {height:0})
          .set('mapHeight', {height:'90%',flex:1})
          .set('imgCloseStyle', {opacity:0})
          .set('showImage', []);
      }

    case 'changeLayoutFooter':
      if(action.payload.type === 'open') {
        return state
          .set('footerState', 'open')
          .set('btnStyle', {width:action.payload.width - 50, height: 50})
          .set('footerStyle', {transform: [{'rotate':(Platform.OS==='ios') ? '45deg' : 45}]})
          .set('menuStyle', {width:action.payload.width, height:action.payload.height, borderRadius:10});
      } else {
        return state
          .set('footerStyle', {width: 50, height: 50, transform: [{rotate:(Platform.OS==='ios') ? '0deg' : 0}]})
          .set('footerState', 'close')
          .set('textStyle', {opacity:0})
          .set('btnStyle', {width:0, height:0})
          .set('menuStyle', {width:0, height:0});
      }

    case 'changeLayoutText':
      return state
        .set('textStyle', {opacity:1});

    case actionTypes.SET_MY_LOCATION_TOP:
      return state
        .set('lat', action.payload.lat)
        .set('lng', action.payload.lng)
        .set('latDel', action.payload.latDel)
        .set('lngDel', action.payload.lngDel);

    case actionTypes.LOADING_TOP:
      return state
        .set('isLoading', action.payload);

    case actionTypes.DELETE_SHOW_IMAGE:
      return state
        .set('showImage', action.payload);

    default:
      return state;
  }
}
