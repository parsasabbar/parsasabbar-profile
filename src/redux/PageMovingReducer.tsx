import React from "react";
import { ActionTypes, IActionModel, PageMovingStateType } from "./AllReducers";

const initialState: PageMovingStateType = true;
function PageMovingReducer(
  state = initialState,
  action: IActionModel<PageMovingStateType>
) {
  if (action.type === ActionTypes.PAGE_MOVING) {
    if (action.data) return true;
    else return false;
  } else {
    return state;
  }
}

export default PageMovingReducer;
