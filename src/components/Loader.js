import { useEffect } from "react";
import NyAnimator from "./NyAnimator";
const Loader = ({
  active = false,
  nullVal = null,
  setResource,
  resourceGetter,
}) => {
  useEffect(() => {
    if (resourceGetter && setResource) {
      resourceGetter()
        .then((res) => {
          setResource(res);
        })
        .catch(() => {
          setResource(nullVal);
        });
    }
  }, [nullVal, setResource, resourceGetter]);
  return active && <NyAnimator loader={true} />;
};

export default Loader;
