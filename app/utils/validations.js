export function validateEmail(input) {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (validRegex.test(input)) {
    return true;
  }
  return false;
}

export function validatePassword(input) {
  const validRegex = /^.{6,12}$/;
  if (validRegex.test(input)) {
    return true;
  }
  return false;
}
