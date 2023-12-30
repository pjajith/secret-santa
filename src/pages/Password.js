// ChristmasLogin.js

import React, { useState } from 'react';
import { Paper, Typography, TextField, Button, Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

function validatePassword(inputStr) {
  // Rule 1: Minimum length of 5 characters
  if (inputStr.length < 5) {
    return false;
  }

  // Rule 2: At least one numeric character
  if (!/\d/.test(inputStr)) {
    return false;
  }

  // Rule 3: At least one uppercase letter
  if (!/[A-Z]/.test(inputStr)) {
    return false;
  }

  // Rule 4: At least one special character
  if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(inputStr)) {
    return false;
  }

  // Rule 5: Digits add up to 25
  const digitSum = inputStr.replace(/\D/g, '').split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  if (digitSum !== 25) {
    return false;
  }

  // Rule 6: Include a month of the year
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  if (!months.some(month => inputStr.toLowerCase().includes(month.toLowerCase()))) {
    return false;
  }

  // Rule 7: Include one of 'pepsi,' 'starbucks,' or 'shell'
  const requiredTerms = ["pepsi", "starbucks", "shell"];
  const matchingTerms = requiredTerms.filter(term => inputStr.toLowerCase().includes(term.toLowerCase()));
  if (matchingTerms.length === 0) {
    return false;
  }

  // Rule 8: Include a Roman numeral that multiplies to 35
  const romanNumeralMatches = inputStr.match(/[IVXLCDM]+/g);
  if (!romanNumeralMatches) {
    return false;
  }
  const product = romanNumeralMatches.reduce((acc, romanNumeral) => {
    const value = convertRomanToNumber(romanNumeral);
    return acc * value;
  }, 1);
  if (product !== 35) {
    return false;
  }

  // All rules passed, input is valid
  return true;
}

// Helper function to convert Roman numerals to numbers
function convertRomanToNumber(roman) {
  const romanNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const currentSymbol = romanNumerals[roman[i]];
    const nextSymbol = romanNumerals[roman[i + 1]];

    if (nextSymbol && currentSymbol < nextSymbol) {
      result += nextSymbol - currentSymbol;
      i++; // Skip the next symbol since it has already been considered
    } else {
      result += currentSymbol;
    }
  }

  return result;
}

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

const Password = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [openErrorDialog, setOpenErrorDialog] = useState(false);

  const handleChange = () => {
    // Check if username is "abc" and password is "abcd"
    if (validatePassword(password)) {
      // Redirect to /hi route
      navigate('/human');
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
        <Typography variant="h4" className={classes.title}>
          🎄 Weak Password 👿
        </Typography>
        <Box mb={2} />
        <Box mb={2} />
        <TextField
          label="New Password"
          variant="outlined"
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
          onClick={handleChange}
        >
          <Typography variant="h4">
            ....
          </Typography>
        </Button>

        {/* Error Dialog */}
        <Dialog open={openErrorDialog} onClose={handleCloseErrorDialog}>
          <DialogTitle >Error</DialogTitle>
          <DialogContent>
            <DialogContentText style={{ fontFamily: 'Mountains of Christmas' }}>
              <b>Not strong enough.</b> Use <a href='https://neal.fun/password-game' target="_blank" rel="noreferrer">Password Game</a> to generate password
            </DialogContentText>

            <DialogContentText>
              <h3>Note: Atleast till <b>Rule #9</b></h3>
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

export default Password;
