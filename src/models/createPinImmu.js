import { Record } from 'immutable';

const initialState = Record({
  page: 'createPin',
  lat: null,
  lng: null,
});

export default class createPinImmu extends initialState {
  du() {
    return 'cretePinImmu';
  }
}
