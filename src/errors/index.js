const { createError } = require('apollo-errors');

export const UnknownError = createError('UnknownError', {
  message: 'An unknown error has occurred. Please, try again later!'
});

export const AuthenticationRequiredError = createError('AuthenticationRequiredError', {
  message: 'You must be logged in to do this action!'
});

export const AlreadyAuthenticatedError = createError('AuthenticationRequiredError', {
  message: 'You are already logged in!'
});

export const StaffAuthenticationRequiredError = createError('StaffAuthenticationRequiredError', {
  message: 'You should be a staff member to do this action!'
});

export const OwnerAuthenticationRequiredError = createError('OwnerAuthenticationRequiredError', {
  message: 'You should be an onwer to do this action!'
});

export const UserAlreadyExistError = createError('UserAlreadyExistError', {
  message: 'A user with that username or email already exists!'
});

export const PasswordConfirmationError = createError('PasswordConfirmationError', {
  message: 'The password confirmation does not match the password!'
});

export const NotValidEmailError = createError('NotValidEmailError', {
  message: 'The entered email is not valid!'
});