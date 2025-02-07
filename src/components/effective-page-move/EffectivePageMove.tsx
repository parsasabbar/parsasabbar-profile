import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { EasingType } from "tsparticles";
import { IAllReducersType, PageMovingStateType } from "../../redux/AllReducers";
import { easeCubicInOut } from "d3-ease";

function EffectivePageMove(props: any) {
  //variables
  const [firstTime, setFirstTime] = useState(true);
  const pagemove = useSelector<IAllReducersType, PageMovingStateType>(
    (state) => state.PageMovingReducer
  );
  const duration = 200;
  let loc = useLocation();

  const [springStyle, setSpringStyle] = useSpring(() => ({}));

  //useEffects
  useEffect(() => {
    setSpringStyle.start({
      from: {
        transform: "scale(0.3,0.3)",
        opacity: 0,
      },
      to: {
        transform: "scale(1,1)",
        opacity: 1,
      },
      config: {
        duration: duration + 100,
        easing: (t) => easeCubicInOut(t),
      },
    });
  }, [loc.pathname]);

  useEffect(() => {
    if (!firstTime) {
      setSpringStyle.start({
        from: {
          transform: "scale(1,1)",
          opacity: 1,
        },
        to: {
          transform: "scale(1.5,1.5)",
          opacity: 0,
        },
        config: {
          duration: duration,
          easing: (t) => easeCubicInOut(t),
        },
      });
    }
    setFirstTime(false);
  }, [pagemove]);

  return (
    <div style={{ overflow: "hidden" }}>
      <animated.div style={springStyle}>{props.children}</animated.div>
    </div>
  );
}

export default EffectivePageMove;
