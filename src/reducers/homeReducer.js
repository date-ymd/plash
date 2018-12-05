import immutable from '../models/homeImmu';

export default (state = new immutable(), action) => {
  switch (action.type) {
    case 'openModal' :
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
          .set('mapHeight', {height:'45%',flex:1});
      } else {
        return state
          .set('imgHeight', {height:0})
          .set('mapHeight', {height:'90%',flex:1});
      }

    default:
      return state;
  }
}
