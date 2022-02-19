import Skylines from "./Skylines";
import { animated, useSpring, config } from "react-spring";

const NyAnimator = ({ followMouse, leave, loader }) => {
  const loaderSpring = useSpring({
    from: {
      opacity: 0,
      rotateZ: 0,
      scale: 0.3,
    },
    to: async (next) => {
      await next({ opacity: 1 });
      await next({
        loop: true,
        rotateZ: 360,
        config: { ...config.wobbly, tension: 60 },
        delay: 500,
      });
    },
  });
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <animated.svg
        width="100%"
        version="1.1"
        viewBox={loader ? "0 0 132 132" : "0 -66 132 132"}
        xmlns="http://www.w3.org/2000/svg"
        style={{
          ...(loader && loaderSpring),
          position: loader ? "static" : "fixed",
          bottom: 0,
          overflow: "overlay",
          pointerEvents: "none",
        }}
      >
        {
          <Skylines
            followMouse={followMouse}
            leave={leave}
            disableTrans={loader}
          />
        }
      </animated.svg>
    </div>
  );
};

export default NyAnimator;
