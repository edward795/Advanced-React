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

export const PersonalDetailsForm = (props) => {
  const { nextStep, prevStep, handleChange, values } = props;
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
            User Details Form
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div className="formField">
        <TextField
          helperText="Enter your occupation"
          label="occupation"
          name="occupation"
          onChange={handleChange}
          defaultValue={values.occupation}
          fullWidth
        />
        <br></br>
        <TextField
          helperText="Enter your city"
          label="city"
          name="city"
          onChange={handleChange}
          defaultValue={values.city}
          fullWidth
        />
        <br></br>
        <TextField
          helperText="Enter your bio"
          label="bio"
          name="bio"
          onChange={handleChange}
          defaultValue={values.bio}
          fullWidth
        />
        <br></br>
        <div class="buttonClass">
          <Button variant="contained" onClick={Continue}>
            Continue
          </Button>
          <Button variant="outlined" onClick={Back}>
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};
