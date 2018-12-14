import { Record } from 'immutable';
import files from '../util/file';

const initialState = Record({
  page: 'home',
  isModal: false,
  showImage: [files.img[0]],
  showLat: '',
  showLong: '',
  mapHeight: {height:'90%',flex:1},
  imgHeight: {height:0},
  footerStyle: {
    width: 50,
    height: 50
  },
  footerState: 'close',
  plusStyle: {width:50},
  btnStyle: {width: 0},
  menuStyle: {width: 0, height: 0},
  textStyle: {opacity:0},
  lat: null,
  lng: null,
  isLoading: true,
  imgCloseStyle: {opacity:0},
  latDel: 1,
  lngDel: 1

});

export default class homeImmu extends initialState {
  du() {
    return 'homeImmu';
  }
}
