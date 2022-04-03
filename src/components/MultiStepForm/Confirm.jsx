import React from "react";
import {
  Button,
  TextField,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./form.css";
export const Confirm = (props) => {
  const { nextStep, prevStep, values } = props;
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Back = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <div className="formClass">
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Confirm
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div className="formField">
        <List>
          <ListItem>
            <ListItemText primary="first name" secondary={values.firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="last name" secondary={values.lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="email" secondary={values.email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="occupation" secondary={values.occupation} />
          </ListItem>
          <ListItem>
            <ListItemText primary="bio" secondary={values.bio} />
          </ListItem>
          <ListItem>
            <ListItemText primary="city" secondary={values.city} />
          </ListItem>
        </List>
        <br></br>
        <div class="buttonClass">
          <Button variant="contained" onClick={Continue}>
            Confirm & Submit
          </Button>
          <Button variant="outlined" onClick={Back}>
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};
