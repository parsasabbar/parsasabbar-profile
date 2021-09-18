import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { EasingType } from "tsparticles";
import { IAllReducersType, PageMovingStateType } from "../../redux/AllReducers";
import { easeCubicOut } from "d3-ease";

function EffectivePageMove(props: any) {
  //variables
  const [firstTime, setFirstTime] = useState(true);
  const pagemove = useSelector<IAllReducersType, PageMovingStateType>(
    (state) => state.PageMovingReducer
  );
  const duration = 200;
  let loc = useLocation();

  const [springStyle, setSpringStyle] = useSpring(() => ({
    // from: {
    //   transform: "scale(0.5,0.5)",
    //   opacity: 0,
    // },
    // to: {
    //   transform: "scale(1,1)",
    //   opacity: 1,
    // },
    // config: {
    //   // duration: duration,
    //   easing: (t) => t + 1,
    // },
  }));

  //useEffects
  useEffect(() => {
    setSpringStyle.start({
      from: {
        transform: "scale(0.5,0.5)",
        opacity: 0,
      },
      to: {
        transform: "scale(1,1)",
        opacity: 1,
      },
      config: {
        duration: duration,
        easing: (t) => easeCubicOut(t),
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
          easing: (t) => easeCubicOut(t),
        },
      });
    }
    setFirstTime(false);
  }, [pagemove]);

  return (
    <div>
      <animated.div style={springStyle}>{props.children}</animated.div>
    </div>
  );
}

export default EffectivePageMove;
