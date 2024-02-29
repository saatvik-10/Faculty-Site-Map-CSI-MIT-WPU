import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import img from "./images/mit.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  m: 1,
  borderColor: "text.primary",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const drawerWidth = 240;
const navItems = ["About Us", "Contact Us", "Resource", "Login/Signup"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <div className="font-body">FindMyFaculty</div>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" style={{ backgroundColor: "#22356F" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <div className="font-body">FindMyFaculty</div>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 1 }}>
        <Toolbar />
        <Grid container>
          <Grid item xs={12} md={8}>
            <Typography>
              <div className="ml-4">
                <img src={img} alt="campus map" className="h-[98vh]" />
              </div>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <MediaCard />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export function MediaCard() {
  return (
    <Card
      sx={{
        maxWidth: 650,
        backgroundColor: "#2B3144",
        maxHeight: 1000,
        borderRadius: 5,
        mr: 1,
      }}
    >
      <CardContent sx={{ color: "white", textAlign: "center" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ marginTop: 2, fontSize: "33px", fontWeight: 650 }}
        >
          Book Appointment
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <TextField
            id="outlined-basic"
            label="Teacher Name"
            variant="outlined"
            sx={{
              backgroundColor: "#D9D9D9",
              justifyContent: "center",
              borderRadius: "20px",
              width: "100%",
              Maxwidth: 370,
              marginTop: 9,
              border: "none",
            }}
          />
          <TextField
            id="outlined-basic"
            label="Appointment Date"
            variant="outlined"
            sx={{
              backgroundColor: "#D9D9D9",
              justifyContent: "center",
              borderRadius: "20px",
              width: "100%",
              Maxwidth: 370,
              marginTop: 5,
            }}
          />
          <TextField
            id="outlined-basic"
            label="Reason"
            variant="outlined"
            sx={{
              backgroundColor: "#D9D9D9",
              justifyContent: "center",
              borderRadius: "20px",
              marginTop: 5,
              width: "100%",
              Maxwidth: 370,
            }}
          />
        </Typography>
      </CardContent>
      <CardActions
        sx={{ justifyContent: "center", marginTop: 8, marginBottom: 10 }}
      >
        <Button
          variant="contained"
          color="error"
          sx={{ width: 370, borderRadius: 10, fontWeight: 700 }}
        >
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
