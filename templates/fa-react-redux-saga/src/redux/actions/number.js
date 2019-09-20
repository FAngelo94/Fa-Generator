export const SET_NUMBER = "SET_NUMBER";
export const CHANGE_NUMBER = "CHANGE_NUMBER";

export function setNumber() {
  return ({type: SET_NUMBER});
}

export function changeNumber(n) {
  return ({type: CHANGE_NUMBER, value: n});
}

