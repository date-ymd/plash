import { Record } from 'immutable';
import files from '../util/file';

const initialState = Record({
  page: 'home',
  isModal: false,
  showImage: files.img[0],
  showLat: '',
  showLong: '',
  mapHeight: {height:'90%'},
});

export default class homeImmu extends initialState {
  du() {
    return 'homeImmu';
  }
}
