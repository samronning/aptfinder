import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
const QuietLoader = ({ active }) => {
  return (
    <Backdrop open={active}>
      <CircularProgress />
    </Backdrop>
  );
};

export default QuietLoader;
