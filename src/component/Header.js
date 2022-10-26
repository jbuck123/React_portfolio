import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import Profile from "../assets/profile-pic.png";

import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { color } from "@mui/system";


export default function Header() {
  const settings = ["Home", "About Me", "Skills", "Education", "Projects", "Contact Me"];
  
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 1,}}>
      <AppBar position="static" sx={{bgcolor: 'rgb(0, 0, 0)'}}>
        <Toolbar style={{
          paddingTop: '5px',
          paddingBottom: '5px'
        }} >
          <Box sx={{ flexGrow: 1 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <FingerprintIcon sx={{ color: "rgba(230, 255, 110, 0.9)", width: '30px', height: '30px' }}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            James Buchmann
          </Typography> */}
          <Avatar
            alt="Remy Sharp"
          
            sx={{ width: 76, height: 76 }}
            src={Profile}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

{
  /* <IconButton
size="large"
edge="start"
color="inherit"
aria-label="menu"
sx={{ mr: 2 }}
> */
}
