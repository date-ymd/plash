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

    case 'changeLayoutFooter':
      if(action.payload.type == 'open') {
        return state
          .set('footerStyle', {width: action.payload.width, height: action.payload.height, borderRadius: 10, backgroundColor:'rgba(0,0,0,0.6)'})
          .set('footerState', 'open')
          .set('plusStyle', {opacity:0})
          .set('btnStyle', {width:action.payload.width - 50, height: 50});
      } else {
        return state
          .set('footerStyle', {width: 50, height: 50})
          .set('footerState', 'close')
          .set('plusStyle', {opacity:1})
          .set('btnStyle', {width:0, height:0});
      }

    default:
      return state;
  }
}
