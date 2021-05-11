import React, { useState, useEffect, useContext } from "react";
import EnhancedEncryptionOutlinedIcon from "@material-ui/icons/EnhancedEncryptionOutlined";
import {
  Typography,
  Grid,
  Paper,
  Avatar,
  Button,
  TextField,
} from "@material-ui/core";
import { Redirect, Link } from "react-router-dom";
import {StaffContext } from "../contexts/StaffContext"

const Signin = ({ handleChange, location, history }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {staffInfo, loginStaff}=useContext(StaffContext)
  // const redirect = location.search
  //   ? location.search.split("=")[1]
  //   : ;
  useEffect(() => {
    if (staffInfo) {
     <Redirect to="/patients"/>
    }
  }, [ staffInfo]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const staff = {
      email,
      password,
    };
    loginStaff(staff);
  };
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 320,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#d72323" };
  const btnStyle = { margin: "15px 0" };
  const headerStyle = { margin: 0 };

  return (
    <Grid>
      <Paper onSubmit={handleSubmit} elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <EnhancedEncryptionOutlinedIcon />
          </Avatar>
          <h3 style={headerStyle}>Sign in</h3>
        </Grid>
        <TextField
          label="Email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
        />
        <Button
          style={btnStyle}
          variant="outlined"
          className="bg-danger"
          fullWidth
        >
          Sign in
        </Button>
        <Typography>
          <Link href="#">Forgot password?</Link>
        </Typography>
        <Typography>
          Do you have an account?
          <Link href="#" onClick={() => handleChange("event", 1)}>
            sign up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Signin;
