import { useState, useEffect } from "react";
import Skylines from "./Skylines";
import useMousePosition from "../hooks/useMousePosition";

const NyAnimator = ({ followMouse }) => {
  const position = useMousePosition();
  const [x, setX] = useState(0);
  useEffect(() => {
    if (followMouse) setX(position.xmid);
  }, [followMouse, position.xmid]);
  return (
    <>
      <svg
        width="15in"
        height="15in"
        version="1.1"
        viewBox="0 0 131.33 131.33"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", marginTop: 200 }}
      >
        {<Skylines x={x} />}
      </svg>
    </>
  );
};

export default NyAnimator;
