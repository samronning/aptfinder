import { useEffect, useState } from "react";
import { throttle } from "lodash";

const useMousePosition = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    xmid: 0,
    ymid: 0,
  });

  useEffect(() => {
    const setFromEvent = throttle(
      (e) =>
        setPosition({
          x: e.clientX,
          y: e.clientY,
          xmid: e.clientX - window.innerWidth / 2,
          ymid: e.clientY - window.innerHeight,
        }),
      100
    );
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return position;
};
export default useMousePosition;
