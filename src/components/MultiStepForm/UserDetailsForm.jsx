import React from "react";
import {
  Button,
  TextField,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./form.css";
export const UserDetailsForm = (props) => {
  const { nextStep, prevStep, handleChange, values } = props;
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
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
            User Details Form
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div className="formField">
        <TextField
          helperText="Enter your FirstName"
          label="first name"
          name="firstName"
          onChange={handleChange}
          defaultValue={values.firstName}
          fullWidth
        />
        <br></br>
        <TextField
          helperText="Enter your lastName"
          label="first name"
          name="lastName"
          onChange={handleChange}
          defaultValue={values.lastName}
          fullWidth
        />
        <br></br>
        <TextField
          helperText="Enter your Email"
          label="email"
          name="email"
          onChange={handleChange}
          defaultValue={values.email}
          fullWidth
        />
        <br></br>
        <Button variant="contained" onClick={Continue}>
          Continue
        </Button>
      </div>
    </div>
  );
};
