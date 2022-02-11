import Skylines from "./Skylines";

const NyAnimator = ({ followMouse, loading, loaded }) => {
  return (
    <svg
      width="15in"
      height="15in"
      version="1.1"
      viewBox="0 0 131.33 131.33"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "100%",
        position: "fixed",
        bottom: -633,
        overflow: "overlay",
        pointerEvents: "none",
      }}
    >
      {<Skylines followMouse={followMouse} loading={loading} loaded={loaded} />}
    </svg>
  );
};

export default NyAnimator;
