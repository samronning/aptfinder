import { useEffect } from "react";
import NyAnimator from "./NyAnimator";
const Loader = ({ active, nullVal, setResource, resourceGetter }) => {
  useEffect(() => {
    resourceGetter()
      .then((res) => {
        setResource(res);
      })
      .catch(() => {
        setResource(nullVal);
      });
  }, [setResource, resourceGetter]);
  return active && <NyAnimator loader={true} />;
};

export default Loader;
