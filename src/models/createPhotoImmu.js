import { Record } from 'immutable';

const initialState = Record({
  page: 'createPhoto',

  images: null,
});

export default class createPhotoImmu extends initialState {
  du() {
    return 'cretePhotoImmu';
  }
}
