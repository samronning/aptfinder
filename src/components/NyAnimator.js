import Skylines from "./Skylines";
import { animated, useSpring, config } from "react-spring";

const NyAnimator = ({ followMouse, leave, loader }) => {
  const loaderSpring = useSpring({
    from: { opacity: 0, scale: 0.3, top: -400, rotateZ: 0 },
    to: async (next) => {
      await next({ opacity: 1 });
      await next({
        rotateZ: 360,
        loop: true,
        config: { ...config.wobbly, tension: 100 },
      });
    },
  });
  return (
    <animated.svg
      width="15in"
      height="15in"
      version="1.1"
      viewBox="0 0 131.33 131.33"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        ...(loader && loaderSpring),
        width: "100%",
        position: "fixed",
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
  );
};

export default NyAnimator;
