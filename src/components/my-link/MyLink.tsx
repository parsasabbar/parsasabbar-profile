import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  ActionTypes,
  IActionModel,
  IAllReducersType,
  PageMovingStateType,
} from "../../redux/AllReducers";

function MyLink(props: { to: string; children?: any }) {
  let history = useHistory();
  const dispatch = useDispatch();
  const pagemove = useSelector<IAllReducersType, PageMovingStateType>(
    (state) => state.PageMovingReducer
  );
  const onClick = () => {
    dispatch<IActionModel<PageMovingStateType>>({
      type: ActionTypes.PAGE_MOVING,
      data: !pagemove,
    });
    setTimeout(() => {
      history.push(props.to);
    }, 300);
  };
  return <span onClick={onClick}>{props.children}</span>;
}

export default MyLink;
