import Skylines from "./Skylines";
import { animated, useSpring, config } from "react-spring";

const NyAnimator = ({ followMouse, leave, loader }) => {
  const loaderSpring = useSpring({
    from: {
      opacity: 0,
      rotateZ: 0,
      transform: "scale(0.3) translateY(68%)",
    },
    to: async (next) => {
      await next({ opacity: 1 });
      await next({
        loop: true,
        rotateZ: 360,
        transform: "scale(0.3) translateY(68%)",
        config: { ...config.wobbly, tension: 100 },
      });
    },
  });
  return (
    <animated.svg
      width="100vw"
      height="100vw"
      version="1.1"
      viewBox="0 0 132 132"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: !loader && "translateY(51%)",
        ...(loader && loaderSpring),
        width: "100%",
        position: "fixed",
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
  );
};

export default NyAnimator;
