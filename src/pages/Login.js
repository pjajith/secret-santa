// ChristmasLogin.js

import React from 'react';
import { Paper, Typography, TextField, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

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
    marginBottom: '16px',
    fontFamily: 'cursive', // Cursive font for a festive touch
  },
  textField: {
    marginBottom: '16px', // Adjust the spacing between text fields
    '& label.Mui-focused': {
      color: '#C0392B', // Christmas Red when focused
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
    marginTop: '16px', // Add spacing between text fields and button
    backgroundColor: '#E74C3C', // Christmas Red for the button
    color: '#FFFFFF', // White text
    borderRadius: '25px', // Rounded edges
    padding: '10px 20px', // Padding
    fontSize: '1rem', // Font size
    fontWeight: 'bold', // Bold text
    '&:hover': {
      backgroundColor: '#C0392B', // Darker red on hover
    },
  },
});

const ChristmasLogin = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h5" className={classes.title}>
          🎄 Christmas Login 🎅
        </Typography>
        <Box mb={2} /> {/* Add spacing above the text fields */}
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          className={classes.textField}
        />
        <Box mb={2} /> {/* Add spacing between text fields */}
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          className={classes.textField}
        />
        <Box mb={2} /> {/* Add spacing between text fields and button */}
        <Button
          variant="contained"
          className={classes.button}
          fullWidth
        >
          Login
        </Button>
      </Paper>
    </div>
  );
};

export default ChristmasLogin;
