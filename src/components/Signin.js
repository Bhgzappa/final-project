import React, { useState } from "react";
import EnhancedEncryptionOutlinedIcon from "@material-ui/icons/EnhancedEncryptionOutlined";
import {
  Typography,
  Grid,
  Paper,
  Avatar,
  Button,
  TextField,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const Signin = ({ handleChange }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const redirect = location.search
  //   ? location.search.split("=")[1]
  //   : "/patients";
  // useEffect(() => {
  //   if (staffInfo) {
  //     history.push(redirect);
  //   }
  // }, [history, staffInfo, redirect]);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const staff = {
  //     email,
  //     password,
  //   };
  //   loginStaff(staff);
  // };
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
      <Paper elevation={10} style={paperStyle}>
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
