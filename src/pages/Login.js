// ChristmasLogin.js

import React, { useState } from 'react';
import { Paper, Typography, TextField, Button, Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#0B5345', // Christmas Green background
  },
  paper: {
    padding: '32px',
    width: '300px',
    textAlign: 'center',
    background: '#ECF0F1', // Snow White background
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  title: {
    color: '#C0392B', // Christmas Red
	  fontFamily: "'Mountains of Christmas', cursive !important", 
    marginBottom: '16px',
  },
  textField: {
    marginBottom: '16px', // Adjust the spacing between text fields
    '& label.Mui-focused': {
      color: '#C0392B', // Christmas Red when focused
	    fontFamily: "'Mountains of Christmas', cursive !important", 
    },
    '& :not(label.Mui-focused)': {
	    fontFamily: "'Mountains of Christmas', cursive !important", 
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#C0392B', // Christmas Red for the border
        borderWidth: '2px', // Increased border width
      },
      '&:hover fieldset': {
        borderColor: '#C0392B', // Christmas Red on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: '#C0392B', // Christmas Red when focused
      },
    },
  },
  button: {
    marginTop: '16px',
    backgroundColor: '#2E86C1', // Dark blue for the button
    color: '#FFFFFF',
    borderRadius: '25px',
    padding: '15px 25px',
    fontSize: '5rem',
    fontWeight: 'bold',
    backgroundImage: 'linear-gradient(45deg, #3498db, #2ecc71)', // Gradient background
    border: 'none',
    '&:hover': {
      backgroundColor: '#3498db', // Lighter blue on hover
    },
  }
});

const ChristmasLogin = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [openErrorDialog, setOpenErrorDialog] = useState(false);

  const handleLogin = () => {
    // Check if username is "abc" and password is "abcd"
    if (username === 'abc' && password === 'abcd') {
      // Redirect to /hi route
      navigate('/password');
    } else {
      // Show error dialog for incorrect login
      setOpenErrorDialog(true);
    }
  };

  const handleCloseErrorDialog = () => {
    setOpenErrorDialog(false);
  };

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h3" className={classes.title}>
          🎄 Login 🎅
        </Typography>
        <Box mb={2} />
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          className={classes.textField}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
		  
        />
        <Box mb={2} />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          className={classes.textField}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Box mb={2} />
        <Button
          variant="contained"
          className={classes.button}
          fullWidth
          onClick={handleLogin}
        >
          <Typography variant="h4">
          🎁
        </Typography>
        </Button>

        {/* Error Dialog */}
        <Dialog open={openErrorDialog} onClose={handleCloseErrorDialog}>
          <DialogTitle>Error</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Incorrect password. Please try again.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseErrorDialog}>OK</Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </div>
  );
};

export default ChristmasLogin;
