import Menu from "@mui/material/Menu";

const FilterMenu = ({ anchorEl, onClose }) => {
  return (
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
      Hello
    </Menu>
  );
};

export default FilterMenu;
