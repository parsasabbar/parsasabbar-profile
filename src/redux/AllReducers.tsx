import { combineReducers } from "redux";
import PageMovingReducer from "./PageMovingReducer";

export enum ActionTypes {
  PAGE_MOVING = "page-moving",
}

export interface IActionModel<T> {
  type: ActionTypes;
  data: T;
}

export interface IAllReducersType {
  PageMovingReducer: PageMovingStateType;
}

export type PageMovingStateType = boolean;

const AllReducers = combineReducers({ PageMovingReducer });

export default AllReducers;
