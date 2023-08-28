export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const addOne = () => {
  return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
  return ({ type: APPLY_NUMBER, payload: number });
}

// ChangeOperation eklendi ...

export const changeOperation = (operation) =>{
  return ({type:CHANGE_OPERATION, payload: operation})
}

export const clearDisplay = (total) =>{
  return ({type:CLEAR_DISPLAY,payload:total})
}