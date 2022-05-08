import Dollar from "@mui/icons-material/AttachMoney";
import TextField from "@mui/material/TextField";
const PriceInput = ({ label, onUpdate }) => {
  return (
    <TextField
      onChange={onUpdate}
      margin="dense"
      label={label}
      InputProps={{
        startAdornment: <Dollar />,
      }}
      type="number"
    />
  );
};

export default PriceInput;
