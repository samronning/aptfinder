import NyAnimator from "./NyAnimator";
const Loader = ({ active = false }) => {
  return active && <NyAnimator loader={true} />;
};

export default Loader;
