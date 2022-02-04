import React, { useState, useEffect } from "react";
import { ReactComponent as NycSvg } from "../assets/inkscapes/nyc_fixed_opt.svg";

const NyAnimator = () => {
  const [cname, setCname] = useState();
  useEffect(() => {
    setTimeout(() => setCname("spin-left"), 1000);
    setTimeout(() => setCname("spin-right"), 8000);
  }, []);

  return <NycSvg className={cname} style={{ width: "100%" }} />;
};

export default NyAnimator;
