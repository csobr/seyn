import {Types} from './user/actionTypes';

const initalState = {
  profile: {
    firstName: '',
    lastName: '',
    email: '',
    profileImage: '',
    state: '',
  },
  formSubmitted: false,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case Types.LOGIN:
      console.log('login', action.payload.user);
      return {
        ...state,
        profile: action.payload.user,
        formSubmitted: false,
      };
    case Types.ADD_USER:
      return {
        ...state,
        profile: action.payload.user,
        formSubmitted: false,
      };
    case Types.UPDATE_PROFILE_PICTURE:
      return {
        ...state,
        profile: {
          ...state.profile,
          profileImage: action.payload.image,
        },
      };
    case Types.FORM_SUMBMITION_STATUS:
      return {
        ...state,
        formSubmitted: action.payload.status,
      };

    default:
      return state;
  }
};

export default reducer;
