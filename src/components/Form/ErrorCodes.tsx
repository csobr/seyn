import * as ErrorMessages from './CustomErrorMessages';

export const getFirebaseMessage = (code) => {
  let message = '';

  switch (code) {
    case 'auth/email-already-in-use':
      message = ErrorMessages.EMAIL_ALREADY_EXISTS;
      break;
    case 'auth/invalid-email':
      message = ErrorMessages.INVALID_EMAIL;
      break;
    case 'auth/wrong-password':
      message = ErrorMessages.WRONG_PASSWORD;
      break;
    case 'auth/user-not-found':
      message = ErrorMessages.USER_NOT_FOUND;
      break;
    case 'auth/user-disabled':
      message = ErrorMessages.USER_DISABLED;
      break;
  }
  return message;
};
