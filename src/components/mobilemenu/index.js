import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import AcUnitIcon from '@material-ui/icons/AcUnit';

import RowingIcon from '@material-ui/icons/Rowing';
import "./style.css";


export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuOutlinedIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/">
          <MenuItem className={"dropdownmenu"} onClick={handleClose}>
            <HomeIcon />
          </MenuItem>
        </Link>
        <Link to="/cart">
        <MenuItem className={"dropdownmenu"} onClick={handleClose}>
          <ShoppingCartIcon />
        </MenuItem>
        </Link>
         <MenuItem className={"dropdownmenu"} onClick={()=>{window.location.href = "/bike"}}>
          <DirectionsBikeIcon /> 
        </MenuItem> 
         <MenuItem className={"dropdownmenu"} onClick={()=>{window.location.href = "/hike"}}>
          <DirectionsWalkIcon /> 
        </MenuItem> 
         <MenuItem className={"dropdownmenu"} onClick={()=>{window.location.href = "/raft"}}>
          <RowingIcon  /> 
        </MenuItem> 
        <MenuItem className={"dropdownmenu"} onClick={()=>{window.location.href = "/ski"}}>
          <AcUnitIcon  /> 
        </MenuItem> 
        
      </Menu>
    </div>
  );
}
