import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";

const Signup = () => {
  const paperStyle = {
    padding: "30px 20px",
    height: "70vh",
    width: 320,
    margin: "auto",
  };
  const avatarStyle = { backgroundColor: "#d72323" };
  const btnStyle = { margin: "8px 0" };
  const headerStyle = { margin: 0 };
  

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h3 style={headerStyle}>Sign up</h3>
          <Typography variant="caption" className="text-warning">
            please fill this form to create an account !
          </Typography>
        </Grid>
        <TextField label="Name" placeholder="Enter Name" fullWidth required />
        <TextField label="Email" placeholder="Enter Email" fullWidth required />
        <TextField
          label="Password"
          placeholder="Enter Password"
          fullWidth
          required
        />
        <TextField
          label="Confirm Password"
          placeholder="Enter Confirm Password"
          fullWidth
          required
        />
        <Button
          style={btnStyle}
          variant="outlined"
          className="bg-danger"
          fullWidth
        >
          Sign up
        </Button>
      </Paper>
    </Grid>
  );
};

export default Signup;
