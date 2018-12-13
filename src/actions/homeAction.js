export const INIT_PAGE = 'INIT_PAGE';
import * as actionTypes from '../util/actionType';


export const toggleModal = (value, marker) => ({
  type: actionTypes.OPEN_MODAL,
  payload: value,
  marker: marker
});

export const changeLayout = (type) => ({
  type: 'changeLayout',
  payload: type
});

export const changeLayoutFooter = (type, width, height) => ({
  type: 'changeLayoutFooter',
  payload: {
    type: type,
    width: width,
    height: height
  }
})

export const changeLayoutText = () => ({
  type: 'changeLayoutText',
})

export const setMyLocation = (value) => ({
  type: actionTypes.SET_MY_LOCATION_TOP,
  payload: {
    lat: value.coords.latitude? value.coords.latitude : 34.6497048,
    lng: value.coords.longitude? value.coords.longitude : 134.9991259
  }
})

export const loadingTop = (value) => ({
  type: actionTypes.LOADING_TOP,
  payload: value
})
