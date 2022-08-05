import * as React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import * as CONSTS from "../../utils/consts";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Divider from '@mui/material/Divider';

//Icons
import MenuIcon from "@mui/icons-material/Menu";
import ForestIcon from "@mui/icons-material/Forest";
import HomeIcon from "@mui/icons-material/Home";
import Trophy from "./toucan-world.png"
//Badge
import Badge from "@mui/material/Badge";
import BasicModal from "../BasicModal";


const pages = ["Countries", "Campaigns", "Community", "Achievements"];
const settings = ["Profile", "Account", "Logout"];

const Navbar = (props) => {

  //User properties from the user session
  const { user, handleLogout } = props

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      className="Navbar"
      
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={Trophy} alt="logo" className="toucan-logo"/>
          {/*<ForestIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />*/}
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".5rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <HomeIcon />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/*Map to create hamburger menu links*/}
              {pages.map((page, index) => (
                <Link key={index} to={`/${page.toLowerCase()}`} className="authLink">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
              {/*Auth forms links*/}
                
                <Link to="/auth/signup" className="authLink">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Signup</Typography>
                  </MenuItem>
                </Link>

                <Link to="/auth/login" className="authLink">
                <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Login</Typography>
                  </MenuItem>
                </Link>

            </Menu>
          </Box>
          <ForestIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h4"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: ".5rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            PhilanTrophy
          </Typography>

          {/*Map to create the pages buttons*/}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} className="box">
            <div className="menu-buttons">
            {pages.map((page, index) => (
              <Link
                key={index} to={`/${page.toLowerCase()}`} className="pageLink">
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    fontSize: "20px",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
            </div>

            {/*Show and hide sign up and login buttons depending on the user session*/}
            {!user && (
              <>
            {/*Auth forms links*/}
              <div className="authLinksContainer">
                <Link to="/auth/signup" className="authLink">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    fontSize: "20px",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  Signup
                  </Button>
                </Link>

                <Link to="/auth/login" className="authLink">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    fontSize: "20px",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  Login
                  </Button>
                </Link>
              </div>
              </>
            )}

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/*Profile picture and badge*/}
            {user && (
            <Box sx={{ flexGrow: 1, display: "flex" }}>
            <Typography variant="h6" textAlign="center" sx={{mr: 2}}>
              {user.username}
            </Typography>
            
            
            <Tooltip title="Open settings">
              <Badge color="secondary" overlap="circular" badgeContent=" ">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={user.picture} />
                </IconButton>
              </Badge>
            </Tooltip>
            </Box>
          )}
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
                <Link key={setting} to={`/${setting.toLowerCase()}`} className="authLink">
                  <MenuItem onClick={handleCloseUserMenu}>
                    {setting === "Logout" ? (<span onClick={handleLogout}><Typography>{setting}</Typography></span>) 
                    : <Typography>{setting}</Typography>}
                    {/*props?.user?.username*/}
                    
                  </MenuItem>
                </Link>
              ))}

              {/* Menu Item calling a Modal with a formularie*/}
              {user?.role === "admin"  && 
              <React.Fragment>
              <Divider />
                  <MenuItem onClick={handleCloseUserMenu}>
                  <Typography><BasicModal user={user}/></Typography>
                  </MenuItem>
              </React.Fragment>
              }
                  
            </Menu>

          </Box>
        </Toolbar>
      </Container>
      
    </AppBar>
  );
};
export default Navbar;
