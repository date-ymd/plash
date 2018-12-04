export const INIT_PAGE = 'INIT_PAGE';


export const initPage = (value) => ({
  type: actionTypes.INIT_PAGE,
  payload: value
});

export const toggleModal = (value, marker) => ({
  type: 'openModal',
  payload: value,
  marker: marker
});
