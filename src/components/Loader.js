import { useEffect } from "react";
import NyAnimator from "./NyAnimator";
const Loader = ({ active, nullVal, setResource, resourceGetter }) => {
  console.log(active);
  useEffect(() => {
    resourceGetter()
      .then((res) => {
        setResource(res);
      })
      .catch(() => {
        setResource(nullVal);
      });
  }, []);
  return active && <NyAnimator loader={true} />;
};

export default Loader;
