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

const Wordle = () => {
	const classes = useStyles();
	const navigate = useNavigate();

	const [wordle, setWordle] = useState('');
	const [openErrorDialog, setOpenErrorDialog] = useState(false);

	const handleChange = async () => {

		const currentDate = new Date();

		const currentYear = currentDate.getFullYear();
		const currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1
		const currentDay = currentDate.getDate();

		const wordleData = {
			2023: {
				12: {
					30: "three",
					31: "salty"
				}
			},
			2024: {
				1: {
					1: "mural",
					2: "aging",
					3: "twirl",
					4: "scant"
				}
			}
		}

		const currentWordle = wordleData[currentYear][currentMonth][currentDay]

		if (wordle.toLocaleLowerCase() === currentWordle.toLocaleLowerCase()) {
			// Redirect to /hi route
			navigate('/congrats');
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
					Are you 👤 or 🤖
				</Typography>
				<br />
				<Typography variant="h8" className={classes.title} style={{ color: 'black' }}>
					To prove you are human enter today's <a href='https://www.nytimes.com/games/wordle/index.html' target="_blank" rel="noreferrer">Wordle</a>
				</Typography>
				<Box mb={2} />
				<Box mb={2} />
				<TextField
					label="Today's Wordle"
					variant="outlined"
					fullWidth
					className={classes.textField}
					value={wordle}
					onChange={(e) => setWordle(e.target.value)}
					inputProps={{
						maxLength: 5,
						pattern: '[A-Z]',
						style: { textTransform: "uppercase", textAlign: 'center' }
					}}
					style={{ alignItems: "center", justifyContent: "center", display: 'flex', }}
				/>
				<Box mb={2} />
				<Button
					variant="contained"
					className={classes.button}
					fullWidth
					onClick={handleChange}
				>
					<Typography variant="h4">
						🟩🟨🟥🟦
					</Typography>
				</Button>


				{/* Error Dialog */}
				<Dialog open={openErrorDialog} onClose={handleCloseErrorDialog}>
					<DialogTitle >Error</DialogTitle>
					<DialogContent>
						<DialogContentText style={{ fontFamily: 'Mountains of Christmas' }}>
							Hey, this ain't today's Wordle!
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

export default Wordle;
