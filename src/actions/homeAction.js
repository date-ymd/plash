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
